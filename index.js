// import nlp manager
const { NlpManager } = require("node-nlp");
console.log("Starting Chat...");

//create an instance of the NlpManager class
const manager = new NlpManager({ languages: ["en"]});
//loading our saved model
manager.load();

//Loading a module realine to take input from terminal
var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);

console.log("Chatbot Started!");

rl.setPrompt(">");
rl.prompt();

rl.on("line", async function (line) {
    //here we pass our input text to the manager to get a response
    //and display the answer
    const response = await manager.process("en", line);
    console.log(response.answer);
    rl.prompt();

}).on("close", function () {
    process.exit(0);
});
