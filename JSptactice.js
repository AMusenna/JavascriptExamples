var name = prompt("What is your name ? ");

var firstChar = name.slice(0,1);

var upperCasefirstChar = firstChar.toUpperCase();

var restOfname = name.slice(1,name.length);

restOfname = restOfname.toLowerCase();

var capitalisedName= upperCasefirstChar + restOfname ;

alert("Hello; " + capitalisedName);
-----------------------------------------------------------

var a = 16 % 4;
0

var x = 3 ;

var y = x++;

y += 1 ;

y ? y = 4

-------------------------------------------------------------


    function getMilk(money) {

        console.log("leaveHouse");
        console.log("moveRight");
        console.log("moveRight");
        console.log("moveUp");
        console.log("moveUp");
        console.log("moveUp");
        console.log("moveUp");
        console.log("moveRight");
        console.log("moveRight");
        var numberOfBottles = Math.floor(money / 1.5);
        console.log("buy " + numberOfBottles + " bottles of milk")
        console.log("moveLeft");
        console.log("moveLeft");
        console.log("moveDown");
        console.log("moveDown");
        console.log("moveDown");
        console.log("moveDown");
        console.log("moveLeft");
        console.log("moveLeft");
        console.log("enterHouse");
    }

getMilk(5);

----------------------------------------------------------------------

    function lifeInWeeks(age) {

        var RemainingTime = 90-age;
        var days = RemainingTime*365;
        var weeks = RemainingTime*52;
        var mounths = RemainingTime*12;

        console.log("You have " + days + " days " + weeks + " weeks " + mounths + "  mounths left.  ")
    }

lifeInWeeks(29);



----------------------------------------------------------------------------


    function getMilk(money) {

            console.log("leaveHouse");
            console.log("moveRight");
            console.log("moveRight");
            console.log("moveUp");
            console.log("moveUp");
            console.log("moveUp");
            console.log("moveUp");
            console.log("moveRight");
            console.log("moveRight");

            console.log("buy " + calcBottles(money, 1.5) + " bottles of milk");

            console.log("moveLeft");
            console.log("moveLeft");
            console.log("moveDown");
            console.log("moveDown");
            console.log("moveDown");
            console.log("moveDown");
            console.log("moveLeft");
            console.log("moveLeft");
            console.log("enterHouse");

            return calcChange(money, 1.5);
    }

function calcBottles(startingMoney, costPerBottle) {

        var numberOfBottles = Math.floor(startingMoney / costPerBottle);

        return numberOfBottles;
}

function calcChange(startingAmount, costPerBottle) {

        var change = startingAmount % costPerBottle;
        return change;

}

console.log ("Hello master, here is your " + getMilk(5) + " change. ");

---------------------------------------------------

    function bmiColculator (weight, height) {

        var bmi = weight / Math.pow(height, 2);
        return Math.round(bmi);

    }

var bmi = bmiColculator(65, 1.8);

console.log(bmi);


---------------------------------------------------------