// Automatically generated with Reach 0.1.10 (84dc282c)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (84dc282c)';
export const _backendVersion = 15;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  
  return {
    infos: {
      },
    views: {
      1: [ctc0],
      4: [ctc0, ctc0],
      5: [ctc0, ctc0, ctc1],
      6: [ctc0, ctc0, ctc1],
      7: [ctc0, ctc0, ctc1, ctc3],
      8: [ctc0, ctc0, ctc1, ctc3]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bool;
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v138 = stdlib.protect(ctc1, await interact.seeWeekOutcomeArray(), {
    at: './index.rsh:45:70:application',
    fs: ['at ./index.rsh:44:13:application call to [unknown function] (defined at: ./index.rsh:44:17:function exp)'],
    msg: 'seeWeekOutcomeArray',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v138],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:48:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:48:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v143], secs: v145, time: v144, didSend: v30, from: v142 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v143], secs: v145, time: v144, didSend: v30, from: v142 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v153], secs: v155, time: v154, didSend: v42, from: v152 } = txn2;
  ;
  let v156 = false;
  let v157 = v154;
  
  while (await (async () => {
    const v167 = v156 ? false : true;
    
    return v167;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v172], secs: v174, time: v173, didSend: v58, from: v171 } = txn3;
    ;
    const v175 = stdlib.addressEq(v152, v171);
    stdlib.assert(v175, {
      at: './index.rsh:68:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const v178 = stdlib.protect(ctc2, await interact.provideWeek(), {
      at: './index.rsh:73:57:application',
      fs: ['at ./index.rsh:72:15:application call to [unknown function] (defined at: ./index.rsh:72:19:function exp)'],
      msg: 'provideWeek',
      who: 'Alice'
      });
    const v179 = stdlib.lt(v178, stdlib.checkedBigNumberify('./index.rsh:74:24:decimal', stdlib.UInt_max, '3'));
    stdlib.assert(v179, {
      at: './index.rsh:74:12:application',
      fs: ['at ./index.rsh:72:15:application call to [unknown function] (defined at: ./index.rsh:72:19:function exp)'],
      msg: 'Invalid week has been selected.',
      who: 'Alice'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v142, v152, v172, v178],
      evt_cnt: 1,
      funcNum: 4,
      lct: v173,
      onlyIf: true,
      out_tys: [ctc2],
      pay: [stdlib.checkedBigNumberify('./index.rsh:77:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v181], secs: v183, time: v182, didSend: v69, from: v180 } = txn4;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc4, ctc2, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [v181], secs: v183, time: v182, didSend: v69, from: v180 } = txn4;
    ;
    const v184 = stdlib.addressEq(v142, v180);
    stdlib.assert(v184, {
      at: './index.rsh:77:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const v185 = stdlib.lt(v181, stdlib.checkedBigNumberify('./index.rsh:78:22:decimal', stdlib.UInt_max, '3'));
    stdlib.assert(v185, {
      at: './index.rsh:78:10:application',
      fs: [],
      msg: 'Invalid week has been selected.',
      who: 'Alice'
      });
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc1],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v193], secs: v195, time: v194, didSend: v83, from: v192 } = txn5;
    ;
    const v196 = stdlib.addressEq(v152, v192);
    stdlib.assert(v196, {
      at: './index.rsh:90:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    stdlib.protect(ctc3, await interact.updateWeekOutcomeArray(v181, true), {
      at: './index.rsh:95:38:application',
      fs: ['at ./index.rsh:94:15:application call to [unknown function] (defined at: ./index.rsh:94:19:function exp)'],
      msg: 'updateWeekOutcomeArray',
      who: 'Alice'
      });
    const v199 = stdlib.protect(ctc1, await interact.seeWeekOutcomeArray(), {
      at: './index.rsh:96:72:application',
      fs: ['at ./index.rsh:94:15:application call to [unknown function] (defined at: ./index.rsh:94:19:function exp)'],
      msg: 'seeWeekOutcomeArray',
      who: 'Alice'
      });
    
    const txn6 = await (ctc.sendrecv({
      args: [v142, v152, v172, v193, v199],
      evt_cnt: 1,
      funcNum: 6,
      lct: v194,
      onlyIf: true,
      out_tys: [ctc1],
      pay: [stdlib.checkedBigNumberify('./index.rsh:99:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn6) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v204], secs: v206, time: v205, didSend: v96, from: v203 } = txn6;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc4, ctc2, ctc1, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [v204], secs: v206, time: v205, didSend: v96, from: v203 } = txn6;
    ;
    const v207 = stdlib.addressEq(v142, v203);
    stdlib.assert(v207, {
      at: './index.rsh:99:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const txn7 = await (ctc.sendrecv({
      args: [v142, v152, v172, v193],
      evt_cnt: 0,
      funcNum: 7,
      lct: v205,
      onlyIf: true,
      out_tys: [],
      pay: [v172, []],
      sim_p: (async (txn7) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v210, time: v209, didSend: v103, from: v208 } = txn7;
        
        sim_r.txns.push({
          amt: v172,
          kind: 'to',
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          amt: v172,
          kind: 'from',
          to: v152,
          tok: undefined /* Nothing */
          });
        const v218 = v193[stdlib.checkedBigNumberify('./index.rsh:107:47:array ref', stdlib.UInt_max, '0')];
        const v220 = v193[stdlib.checkedBigNumberify('./index.rsh:108:24:array ref', stdlib.UInt_max, '1')];
        const v222 = v218 ? v220 : false;
        const v223 = v193[stdlib.checkedBigNumberify('./index.rsh:108:56:array ref', stdlib.UInt_max, '2')];
        const v225 = v222 ? v223 : false;
        const cv156 = v225;
        const cv157 = v209;
        
        await (async () => {
          const v156 = cv156;
          const v157 = cv157;
          
          if (await (async () => {
            const v167 = v156 ? false : true;
            
            return v167;})()) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }})();
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc4, ctc2, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v210, time: v209, didSend: v103, from: v208 } = txn7;
    ;
    const v213 = stdlib.addressEq(v142, v208);
    stdlib.assert(v213, {
      at: './index.rsh:103:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    ;
    const v218 = v193[stdlib.checkedBigNumberify('./index.rsh:107:47:array ref', stdlib.UInt_max, '0')];
    const v220 = v193[stdlib.checkedBigNumberify('./index.rsh:108:24:array ref', stdlib.UInt_max, '1')];
    const v222 = v218 ? v220 : false;
    const v223 = v193[stdlib.checkedBigNumberify('./index.rsh:108:56:array ref', stdlib.UInt_max, '2')];
    const v225 = v222 ? v223 : false;
    const cv156 = v225;
    const cv157 = v209;
    
    v156 = cv156;
    v157 = cv157;
    
    continue;
    
    
    
    
    
    
    
    
    
    }
  return;
  
  
  
  
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bool;
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v143], secs: v145, time: v144, didSend: v30, from: v142 } = txn1;
  ;
  const v148 = stdlib.protect(ctc1, await interact.seeWeekOutcomeArray(), {
    at: './index.rsh:53:70:application',
    fs: ['at ./index.rsh:52:15:application call to [unknown function] (defined at: ./index.rsh:52:19:function exp)'],
    msg: 'seeWeekOutcomeArray',
    who: 'Creator'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v142, v148],
    evt_cnt: 1,
    funcNum: 1,
    lct: v144,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:56:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v153], secs: v155, time: v154, didSend: v42, from: v152 } = txn2;
      
      ;
      const v156 = false;
      const v157 = v154;
      
      if (await (async () => {
        const v167 = v156 ? false : true;
        
        return v167;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v153], secs: v155, time: v154, didSend: v42, from: v152 } = txn2;
  ;
  let v156 = false;
  let v157 = v154;
  
  while (await (async () => {
    const v167 = v156 ? false : true;
    
    return v167;})()) {
    const v170 = stdlib.protect(ctc2, await interact.setFee(), {
      at: './index.rsh:66:55:application',
      fs: ['at ./index.rsh:65:17:application call to [unknown function] (defined at: ./index.rsh:65:21:function exp)'],
      msg: 'setFee',
      who: 'Creator'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v142, v152, v170],
      evt_cnt: 1,
      funcNum: 3,
      lct: v157,
      onlyIf: true,
      out_tys: [ctc2],
      pay: [stdlib.checkedBigNumberify('./index.rsh:68:13:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v172], secs: v174, time: v173, didSend: v58, from: v171 } = txn3;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc4, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [v172], secs: v174, time: v173, didSend: v58, from: v171 } = txn3;
    ;
    const v175 = stdlib.addressEq(v152, v171);
    stdlib.assert(v175, {
      at: './index.rsh:68:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Creator'
      });
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v181], secs: v183, time: v182, didSend: v69, from: v180 } = txn4;
    ;
    const v184 = stdlib.addressEq(v142, v180);
    stdlib.assert(v184, {
      at: './index.rsh:77:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Creator'
      });
    const v185 = stdlib.lt(v181, stdlib.checkedBigNumberify('./index.rsh:78:22:decimal', stdlib.UInt_max, '3'));
    stdlib.assert(v185, {
      at: './index.rsh:78:10:application',
      fs: [],
      msg: 'Invalid week has been selected.',
      who: 'Creator'
      });
    stdlib.protect(ctc3, await interact.updateWeekOutcomeArray(v181, true), {
      at: './index.rsh:86:38:application',
      fs: ['at ./index.rsh:85:17:application call to [unknown function] (defined at: ./index.rsh:85:21:function exp)'],
      msg: 'updateWeekOutcomeArray',
      who: 'Creator'
      });
    const v188 = stdlib.protect(ctc1, await interact.seeWeekOutcomeArray(), {
      at: './index.rsh:87:72:application',
      fs: ['at ./index.rsh:85:17:application call to [unknown function] (defined at: ./index.rsh:85:21:function exp)'],
      msg: 'seeWeekOutcomeArray',
      who: 'Creator'
      });
    
    const txn5 = await (ctc.sendrecv({
      args: [v142, v152, v172, v188],
      evt_cnt: 1,
      funcNum: 5,
      lct: v182,
      onlyIf: true,
      out_tys: [ctc1],
      pay: [stdlib.checkedBigNumberify('./index.rsh:90:13:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v193], secs: v195, time: v194, didSend: v83, from: v192 } = txn5;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc4, ctc2, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [v193], secs: v195, time: v194, didSend: v83, from: v192 } = txn5;
    ;
    const v196 = stdlib.addressEq(v152, v192);
    stdlib.assert(v196, {
      at: './index.rsh:90:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Creator'
      });
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc1],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v204], secs: v206, time: v205, didSend: v96, from: v203 } = txn6;
    ;
    const v207 = stdlib.addressEq(v142, v203);
    stdlib.assert(v207, {
      at: './index.rsh:99:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Creator'
      });
    const txn7 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 7,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v210, time: v209, didSend: v103, from: v208 } = txn7;
    ;
    const v213 = stdlib.addressEq(v142, v208);
    stdlib.assert(v213, {
      at: './index.rsh:103:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Creator'
      });
    ;
    const v218 = v193[stdlib.checkedBigNumberify('./index.rsh:107:47:array ref', stdlib.UInt_max, '0')];
    const v220 = v193[stdlib.checkedBigNumberify('./index.rsh:108:24:array ref', stdlib.UInt_max, '1')];
    const v222 = v218 ? v220 : false;
    const v223 = v193[stdlib.checkedBigNumberify('./index.rsh:108:56:array ref', stdlib.UInt_max, '2')];
    const v225 = v222 ? v223 : false;
    const cv156 = v225;
    const cv157 = v209;
    
    v156 = cv156;
    v157 = cv157;
    
    continue;
    
    
    
    
    
    
    
    
    
    }
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAJAAEHQAUIBAYDJgIBAAAiNQAxGEEDCSlkSSJbNQEhBVs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIQYMQAGVSSEHDEAAzUkkDEAAaCQSRCEFNAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/VyAgNf4lWzX9V0gDNfyABOIbs6mwNP2IApw0/zEAEkSxIrIBNP2yCCOyEDT+sgezNP80/jT8IlU0/CNVEDT8gQJVEDIGQgHtSCQ0ARJENARJIhJMNAISEUQoZEk1A0lKVwAgNf9XICA1/iVbNf1XSAM1/Ek1BTX7gASTLwRZNPtQsDT/MQASRDT/NP5QNP0WUDT8UChLAVcAS2dIIQU1ATIGNQJCAdJJIQQMQABaSCEHNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/VyAgNf4lWzX9STUFNfyABNso0Kc0/FCwNP4xABJENP80/lA0/RZQNPxQKEsBVwBLZ0gkNQEyBjUCQgFxSCEENAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/VyAgNf4lWzX9STUFFzX8gAT5i694NPwWULA0/zEAEkQ0/CEIDEQ0/zT+UDT9FlAoSwFXAEhnSCEHNQEyBjUCQgERSSMMQACMSSEIDEAAVUghBjQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/VyAgNf5JNQUXNf2ABNQMbNY0/RZQsDT+MQASRDT/NP5QNP0WUChLAVcASGdIIQQ1ATIGNQJCAK8jEkQjNAESRDQESSISTDQCEhFEKGQ1A0k1BTX/gARVCwr4NP9QsDQDMQAiMgZCADtIIjQBEkQ0BEkiEkw0AhIRREk1BTX/gARzT3hqNP9QsIGgjQaIAJUxAChLAVcAIGdIIzUBMgY1AkIARDX/Nf41/TX8NP5BAANCABg0/DT9UChLAVcAQGdIIQY1ATIGNQJCABwxGSEEEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/wzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 75,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool[3]",
                "name": "v143",
                "type": "bool[3]"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool[3]",
                "name": "v143",
                "type": "bool[3]"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool[3]",
                "name": "v153",
                "type": "bool[3]"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v172",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v181",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool[3]",
                "name": "v193",
                "type": "bool[3]"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool[3]",
                "name": "v204",
                "type": "bool[3]"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool[3]",
                "name": "v153",
                "type": "bool[3]"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v172",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v181",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool[3]",
                "name": "v193",
                "type": "bool[3]"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool[3]",
                "name": "v204",
                "type": "bool[3]"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620015cc380380620015cc833981016040819052620000269162000224565b60008055436003556040517fd9fe77929a57a435d88ce369dbd837cb668f91aa71ce26c08b9411d101557bdc90620000629033908490620002d3565b60405180910390a16200007834156007620000c9565b6040805160208082018352338083526001600081905543905583519182015290910160405160208183030381529060405260029080519060200190620000c0929190620000f3565b50505062000367565b81620000ef5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805462000101906200032a565b90600052602060002090601f01602090048101928262000125576000855562000170565b82601f106200014057805160ff191683800117855562000170565b8280016001018555821562000170579182015b828111156200017057825182559160200191906001019062000153565b506200017e92915062000182565b5090565b5b808211156200017e576000815560010162000183565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b0381118282101715620001d457620001d462000199565b60405290565b604051602081016001600160401b0381118282101715620001d457620001d462000199565b604051606081016001600160401b0381118282101715620001d457620001d462000199565b600081830360808112156200023857600080fd5b62000242620001af565b8351815260206060601f19840112156200025b57600080fd5b62000265620001da565b925085603f8601126200027757600080fd5b62000281620001ff565b8060808701888111156200029457600080fd5b8388015b81811015620002c15780518015158114620002b35760008081fd5b845292840192840162000298565b50508452508101919091529392505050565b6001600160a01b03831681528151602080830191909152828101515160a0830191906000604085015b60038210156200031f5782511515815291830191600191909101908301620002fc565b505050509392505050565b600181811c908216806200033f57607f821691505b602082108114156200036157634e487b7160e01b600052602260045260246000fd5b50919050565b61125580620003776000396000f3fe6080604052600436106100845760003560e01c8063ab53f2c611610056578063ab53f2c6146100ec578063b94b56791461010f578063bb89832e14610122578063bf2c5b2414610135578063f4cedab01461014857005b80631e93b0f11461008d57806326f7faf3146100b157806383230757146100c4578063a209ad4e146100d957005b3661008b57005b005b34801561009957600080fd5b506003545b6040519081526020015b60405180910390f35b61008b6100bf366004610e06565b61015b565b3480156100d057600080fd5b5060015461009e565b61008b6100e7366004610e3b565b6102da565b3480156100f857600080fd5b506101016104a6565b6040516100a8929190610e57565b61008b61011d366004610e06565b610543565b61008b610130366004610e06565b6106e4565b61008b610143366004610e3b565b61085e565b61008b610156366004610e3b565b610a70565b61016b6001600054146009610c07565b6101858135158061017e57506001548235145b600a610c07565b60008080556002805461019790610eb4565b80601f01602080910402602001604051908101604052809291908181526020018280546101c390610eb4565b80156102105780601f106101e557610100808354040283529160200191610210565b820191906000526020600020905b8154815290600101906020018083116101f357829003601f168201915b50505050508060200190518101906102289190610f67565b90507fa3a6b7a3be27d9a5f5d9a59f09ef50e8283f713bca623fe5b7379804a20f5a85338360405161025b929190610ffe565b60405180910390a161026f34156008610c07565b6040805160808101825260008183018181526060830182905282528251808401909352808352602080840191909152810191909152815181516001600160a01b03909116905280513360209182015280820180516000905251439101526102d581610c30565b505050565b6102ea6005600054146012610c07565b610304813515806102fd57506001548235145b6013610c07565b60008080556002805461031690610eb4565b80601f016020809104026020016040519081016040528092919081815260200182805461034290610eb4565b801561038f5780601f106103645761010080835404028352916020019161038f565b820191906000526020600020905b81548152906001019060200180831161037257829003601f168201915b50505050508060200190518101906103a7919061101b565b90507f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc033836040516103da929190611065565b60405180910390a16103ee3415600f610c07565b8051610406906001600160a01b031633146010610c07565b61041860036020840135106011610c07565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b0390811680885289850151821684528989015183526006909555436001558751938401949094529051909216948101949094525190830152906080015b604051602081830303815290604052600290805190602001906104a0929190610cc7565b50505050565b6000606060005460028080546104bb90610eb4565b80601f01602080910402602001604051908101604052809291908181526020018280546104e790610eb4565b80156105345780601f1061050957610100808354040283529160200191610534565b820191906000526020600020905b81548152906001019060200180831161051757829003601f168201915b50505050509050915091509091565b6105536006600054146016610c07565b61056d8135158061056657506001548235145b6017610c07565b60008080556002805461057f90610eb4565b80601f01602080910402602001604051908101604052809291908181526020018280546105ab90610eb4565b80156105f85780601f106105cd576101008083540402835291602001916105f8565b820191906000526020600020905b8154815290600101906020018083116105db57829003601f168201915b5050505050806020019051810190610610919061101b565b90507fc654b797653201df8e0aeb05e4652c0868015c916032bf45831aef6d486aca8e3383604051610643929190610ffe565b60405180910390a161065734156014610c07565b6020810151610672906001600160a01b031633146015610c07565b61067a610d4b565b81516001600160a01b039081168252602080840151909116818301526040808401518184015280516060818101909252918501906003908390839080828437600092018290525060608501939093525050600790554360015560405161047c90829060200161108c565b6106f4600760005414601a610c07565b61070e8135158061070757506001548235145b601b610c07565b60008080556002805461072090610eb4565b80601f016020809104026020016040519081016040528092919081815260200182805461074c90610eb4565b80156107995780601f1061076e57610100808354040283529160200191610799565b820191906000526020600020905b81548152906001019060200180831161077c57829003601f168201915b50505050508060200190518101906107b191906110ed565b90507f80f732f40ee8469e0ebef647de029ee60d7d701868f65d84cb39077c03c1ec9233836040516107e4929190610ffe565b60405180910390a16107f834156018610c07565b8051610810906001600160a01b031633146019610c07565b610818610d4b565b81516001600160a01b0390811682526020808401519091168183015260408084015181840152606080850151908401526008600055436001555161047c9183910161108c565b61086e600860005414601e610c07565b6108888135158061088157506001548235145b601f610c07565b60008080556002805461089a90610eb4565b80601f01602080910402602001604051908101604052809291908181526020018280546108c690610eb4565b80156109135780601f106108e857610100808354040283529160200191610913565b820191906000526020600020905b8154815290600101906020018083116108f657829003601f168201915b505050505080602001905181019061092b91906110ed565b90507f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb338360405161095e92919061118c565b60405180910390a161097781604001513414601c610c07565b805161098f906001600160a01b03163314601d610c07565b80602001516001600160a01b03166108fc82604001519081150290604051600060405180830381858888f193505050501580156109d0573d6000803e3d6000fd5b506040805160808101825260008183018181526060830182905282528251808401909352808352602080840191909152810191909152815181516001600160a01b03918216905260208084015183519216910152606082015151610a35576000610a3f565b6060820151602001515b610a4a576000610a54565b6060820151604001515b602080830180519215159092529051439101526102d581610c30565b610a80600460005414600d610c07565b610a9a81351580610a9357506001548235145b600e610c07565b600080805560028054610aac90610eb4565b80601f0160208091040260200160405190810160405280929190818152602001828054610ad890610eb4565b8015610b255780601f10610afa57610100808354040283529160200191610b25565b820191906000526020600020905b815481529060010190602001808311610b0857829003601f168201915b5050505050806020019051810190610b3d91906111c4565b90507f96fec920882ac36be2ad80273a3572d38922662f78edb2ef77dc6748d3fd2cc13383604051610b70929190611065565b60405180910390a1610b843415600b610c07565b6020810151610b9f906001600160a01b03163314600c610c07565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b0390811680885289850151821684528a850135835260059095554360015587519384019490945290519092169481019490945251908301529060800161047c565b81610c2c5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b60208101515115610c545760008080556001819055610c5190600290610d85565b50565b604080518082018252600080825260208083018281528551516001600160a01b03908116808652875184015182168352600490945543600155855180840194909452905116828501528351808303850181526060909201909352805191926102d59260029290910190610cc7565b905290565b828054610cd390610eb4565b90600052602060002090601f016020900481019282610cf55760008555610d3b565b82601f10610d0e57805160ff1916838001178555610d3b565b82800160010185558215610d3b579182015b82811115610d3b578251825591602001919060010190610d20565b50610d47929150610dbb565b5090565b604051806080016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001610cc2610dd0565b508054610d9190610eb4565b6000825580601f10610da1575050565b601f016020900490600052602060002090810190610c5191905b5b80821115610d475760008155600101610dbc565b60405180606001604052806003906020820280368337509192915050565b600060808284031215610e0057600080fd5b50919050565b600060808284031215610e1857600080fd5b610e228383610dee565b9392505050565b600060408284031215610e0057600080fd5b600060408284031215610e4d57600080fd5b610e228383610e29565b82815260006020604081840152835180604085015260005b81811015610e8b57858101830151858201606001528201610e6f565b81811115610e9d576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610ec857607f821691505b60208210811415610e0057634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715610f2257610f22610ee9565b60405290565b6040516080810167ffffffffffffffff81118282101715610f2257610f22610ee9565b80516001600160a01b0381168114610f6257600080fd5b919050565b600060208284031215610f7957600080fd5b6040516020810181811067ffffffffffffffff82111715610f9c57610f9c610ee9565b604052610fa883610f4b565b81529392505050565b8015158114610c5157600080fd5b80358252602080830181830160005b6003811015610ff6578135610fe281610fb1565b151583529183019190830190600101610fce565b505050505050565b6001600160a01b038316815260a08101610e226020830184610fbf565b60006060828403121561102d57600080fd5b611035610eff565b61103e83610f4b565b815261104c60208401610f4b565b6020820152604083015160408201528091505092915050565b6001600160a01b038316815260608101610e22602083018480358252602090810135910152565b81516001600160a01b039081168252602080840151909116818301526040808401519083015260608084015160c08401929091840160005b60038110156110e35783511515825292820192908201906001016110c4565b5050505092915050565b600060c082840312156110ff57600080fd5b611107610f28565b61111083610f4b565b8152602061111f818501610f4b565b818301526040840151604083015284607f85011261113c57600080fd5b611144610eff565b8060c086018781111561115657600080fd5b606087015b8181101561117b57805161116e81610fb1565b845292840192840161115b565b505060608401525090949350505050565b6001600160a01b0383168152813560208083019190915260608201908301356111b481610fb1565b8015156040840152509392505050565b6000604082840312156111d657600080fd5b6040516040810181811067ffffffffffffffff821117156111f9576111f9610ee9565b60405261120583610f4b565b815261121360208401610f4b565b6020820152939250505056fea2646970667358221220ff84024a7f74438fd56af5bb6cd1465f5ae2b3509eb9fb156838407a178a1c7664736f6c634300080c0033`,
  BytecodeLen: 5580,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:49:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:115:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:62:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:69:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:79:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:91:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:100:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Creator": Creator
  };
export const _APIs = {
  };
