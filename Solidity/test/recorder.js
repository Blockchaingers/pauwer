var Recorder = artifacts.require("Recorder");

contract('Recorder', function(accounts) {
  it("records event", async function() {
    var contract = await Recorder.new();
    await contract.createRecord(2,1,9);
    await contract.createRecord(2,1,86786);

    entries = await contract.getRecords(2,1);

    console.log(entries[1]);
  });
});