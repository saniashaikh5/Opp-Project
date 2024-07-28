#! /usr/bin/env node

import inquirer from "inquirer";

import chalk from "chalk";


class person {
    private _personality: string;
    constructor() {
        this._personality = `mystery`;
    }


//user input
userInput (input: string) {
    //if else statement
if(input.includes (`talk to other about yourself openly`)){
    this._personality = ` talk hapily`
}else if (input.includes(`keep your words to yourself`)) {
    this._personality = `talk rudely`
}

}

//return function
get personality(){
    return this._personality
}

}

//create object


class Main {
    public async main() {
        const ans = await inquirer.prompt({
            type:`list`,
            name: `choice`,
            message: chalk.green('tell your behaviour?'),
            choices: [
                '1: Talk to others about myself.',
                '2: Keep quit and dont ask Question'
            ]

        });

        //create a personal class
        let myPerson = new person()

        myPerson.userInput(ans.choice);

        //output response
        console.log(`you are ${myPerson.personality}`);
        


    }
}

const myobject = new Main();
myobject.main()

