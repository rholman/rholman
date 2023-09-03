
// Create a function that outputs all the users who experienced the error. 

// logs are in chronological order
const logs = [
    { user: 1, action: "A" },
    { user: 1, action: "B" },
    { user: 2, action: "A" },
    { user: 1, action: "C" },
    { user: 2, action: "B" },
    { user: 3, action: "Z" },
    { user: 2, action: "B" },
    { user: 2, action: "C" },
    { user: 3, action: "A" },
    { user: 3, action: "B" },
    { user: 3, action: "C" },
];
/** find users with actions A-B-C **/

let userArray = [];
let userActionStringArray = []


function userHasABC(logs) {

    for (let i = 0; i < logs.length; i++) {
        let thisUser = logs[i].user;
        let thisAction = logs[i].action;

        const userIndexFunction = userArray.findIndex((element) => element == thisUser);
        if ( userIndexFunction > -1) {
            userActionStringArray[userIndexFunction] += `, ${thisAction}`; // a,b,c
        } else {  //append to the array the new user 
            userArray.push(thisUser);
            userActionStringArray.push(thisAction)
        }
    }

    for (let i = 0; i < userArray.length; i++) {
        if (userActionStringArray[i].includes("A, B, C")) {
            console.log(
                `WARNING: User [${userArray[i]}] performed actions [A, B, C] in sequence!`
            );
        }
    };
}
//test
userHasABC(logs);
