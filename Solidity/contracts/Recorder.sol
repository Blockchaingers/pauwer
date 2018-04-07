pragma solidity ^0.4.18;
/**
 * @title Recorder — record a message into the blockchain
 * @author Life on Mars — https://lifeonmars.pt
 */
contract Recorder{
  struct wew {
    uint wattHours;
    uint timestamp;
  }

  mapping(uint => mapping(uint => wew[])) records;

  function createRecord(uint userId, uint machineId, uint wattHours) public {
    records[userId][machineId].push(wew({wattHours: wattHours, timestamp: now}));
  }

  function getRecords(uint userId, uint machineId) public view returns(uint[], uint[]) {
    wew[] storage s = records[userId][machineId];
    uint[] memory wH = new uint[](s.length); 
    uint[] memory timestamps = new uint[](s.length); 
    for(uint i=0; i< s.length; i++){
      wH[i] = s[i].wattHours;
      timestamps[i] = s[i].timestamp;
    }
return (wH, timestamps);
  }
}