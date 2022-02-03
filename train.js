//import nlpmanager

const { NlpManager } = require("node-nlp");

//create an instance of an nlp class
const manager =  new NlpManager ({ languages: ["en"]} );

//import fs module to read the json files
const fs = require("fs");

// read intents from the intents folder
const files = fs.readdirSync("./intents");

/*loop through the files and parse the string to 
object then pass it to manager instance to train and process it
*/

for (const file of files) {
    let data = fs.readFileSync(`./intents/${file}`);
    data = JSON.parse(data);

    const intent = file.replace(".json", "");

    for (const question of data.questions) {
        manager.addDocument("en", question, intent);

    }

    for (const answer of data.answers) {
        manager.addAnswer("en", intent, answer);

    }
}
/*let's create a function that will be responsible for
Training and saving the manager instance
*/

async function train_save() {
    await manager.train();
    manager.save();

}

//call the function

train_save();
