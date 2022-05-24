'reach 0.1';
//'use strict';

// This iteration (MVP):
// [1] Moved updateWeekOutcomeArray to Player (a workaround)
// [2] Pay/transfer 0.5 ALGO (assessment fee)

// Next iteration will need to do the following:
// [3*] Improve DeployerViews.js's GetHand screen
// [4*] Improve PlayerViews.js's ViewResults screen
// [5*] Other CSS and User Experience screen improvements
// [6*] Overall badge
// [7*] Change providerEnv to 'MainNet' including PNG path

// [*] Remove most of wallet sign-in's
// [*] Add the "What's your name?" interaction

// Future development (adding back previous features):
// [8*] Checking passcode
// [9*] NFT

// * Still needs to be done

const Player = {
  seeWeekOutcomeArray: Fun([], Array(Bool,3)),
  updateWeekOutcomeArray: Fun([UInt,Bool], Null),
};

export const main = Reach.App(() => {

  const Creator = Participant('Creator', {
    ...Player,
    setFee: Fun([], UInt),
  });

  const Alice = Participant('Alice', {
    ...Player,
    provideWeek: Fun([], UInt),
  });

  init();
  
  // Display the initial weekly status (by Alice)
  Alice.only(() => {
    const weekOutcomeArray0 = declassify(interact.seeWeekOutcomeArray());
  });

  Alice.publish(weekOutcomeArray0);
  commit();

  // Display the initial weekly status (by Creator)
  Creator.only(() => {
    const weekOutcomeArray1 = declassify(interact.seeWeekOutcomeArray());
  });

  Creator.publish(weekOutcomeArray1);

  var STOPPING = false;
  invariant ( balance() == 0 );
  while ( STOPPING == false) {

    commit();

    // Creator determines the assessment fee
    Creator.only(() => {
      const assessmentFee = declassify(interact.setFee());
    });
    Creator.publish(assessmentFee);
    commit();

    // Alice requests assessment badge for Week X
    Alice.only(() => {
      const weekNumber = declassify(interact.provideWeek());
      check(weekNumber<3,"Invalid week has been selected.");
    });

    Alice.publish(weekNumber);
    check(weekNumber<3,"Invalid week has been selected.");
    commit();

    // Outcome of the badge will always be true for now
    const weekOutcome = true;

    // Update and publish the WeekOutcomeArray (Creator)
    Creator.only(() => {
      interact.updateWeekOutcomeArray(weekNumber,weekOutcome);
      const weekOutcomeArray2 = declassify(interact.seeWeekOutcomeArray());
    });

    Creator.publish(weekOutcomeArray2);
    commit();

    // Update and publish the WeekOutcomeArray (Alice)
    Alice.only(() => {
      interact.updateWeekOutcomeArray(weekNumber,weekOutcome);
      const weekOutcomeArray3 = declassify(interact.seeWeekOutcomeArray());
    });

    Alice.publish(weekOutcomeArray3);
    commit();

    // Alice pays the assessment fee regardless the outcome
    Alice.pay(assessmentFee);
    transfer(assessmentFee).to(Creator);

    // Creator assesses the overall outcome (and did not pass overall before)
    const overallOutcome = ( weekOutcomeArray2[0] == true &&
      weekOutcomeArray2[1] == true && weekOutcomeArray2[2] == true) ? true : false;

    // system.out.println("Congratulations on passing all modules");
    STOPPING = overallOutcome;
    continue;
  }  

  commit();

});
