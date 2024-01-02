//switch case

//syntax
/*
switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/

const month = 3

switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("default case match")
        break;
}

// When a case will be matched and if there is not break statement then all the case code is executed except default case

const monthName = "march"

switch (month) {
    case "jan":
        console.log("jan");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;
    default:
        console.log("default case match")
        break;
}