//SPDX-License-Identifier: MIT
pragma solidity >= 0.8.1;

contract ProcessRecord{

    event UpdatedRecord(string previousRecord, string currentRecord);

    string public record;

    constructor (string memory baseRecord){
        record = baseRecord;
    }

    function updateRecord(string memory newRecord) public{
        string memory previousRecord = record;
        record = newRecord;
        emit UpdatedRecord(previousRecord, newRecord);
    }
}
