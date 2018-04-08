pragma solidity ^0.4.18;
/**
 * @title Recorder — record a message into the blockchain
 * @author Life on Mars — https://lifeonmars.pt
 */
contract Recorder{

  struct wew {
    uint wattHours;
    uint timestamp;
    bool start;
  }

  mapping(uint => mapping(uint => wew[])) records;


  function startRecord(uint userId, uint machineId, uint wattHours) public {
    records[userId][machineId].push(wew({wattHours: wattHours, timestamp: now, start:true}));
  }

  function stopRecord(uint userId, uint machineId, uint wattHours) public {
    records[userId][machineId].push(wew({wattHours: wattHours, timestamp: now, start:false}));
  }


  function getRecords(uint userId, uint machineId) public view returns(uint[], uint[], bool[]) {
    wew[] storage s = records[userId][machineId];
    uint[] memory wH = new uint[](s.length);
    uint[] memory timestamps = new uint[](s.length);
    bool[] memory starts = new bool[](s.length);
    for(uint i=0; i< s.length; i++){
      wH[i] = s[i].wattHours;
      timestamps[i] = s[i].timestamp;
      starts[i] = s[i].start;
    }
  return (wH, timestamps,starts);
  }
}