pragma solidity ^0.4.18;
/**
 * @title Recorder — record a message into the blockchain
 * @author Life on Mars — https://lifeonmars.pt
 */
contract Recorder{

  //only the machine should put records
  struct EnergyRecord {
    uint256 userId;
    uint256 machineId;
    uint256 wattHour;
  }

  EnergyRecord[] public records;

  function createRecord(uint256 userId,uint256 machineId, uint256 wattHour) public {
      EnergyRecord newRecord;
      newRecord.userId = userId;
      newRecord.machineId = machineId;
      newRecord.wattHour = wattHour;
      records.push(newRecord);
  }

  function getRecord() public returns (EnergyRecord[]){
    return records;
  }

}