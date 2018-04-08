var Recorder = artifacts.require("Recorder");

function sleep(ms){
  return new Promise(resolve=>{
      setTimeout(resolve,ms)
  })
}

contract('Recorder', function(accounts) {
  it("records event", async function() {
    var contract = await Recorder.new();
    await contract.startRecord(2,1,100);
    await sleep(1000)
    await contract.stopRecord(2,1,266);

    entries = await contract.getRecords(2,1);
    console.log(entries[0]);
    console.log(entries[1]);
    console.log(entries[2]);
  });
});