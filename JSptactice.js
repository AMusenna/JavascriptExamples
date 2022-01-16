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

    prompt("Please enter your name");
prompt("Please enter your love name");


var loveColculator = Math.random() * 100;
loveColculator = Math.floor(loveColculator) + 1;

if (loveColculator > 60) {
    alert("You will love your girl tooo much today % " + loveColculator);
}else {
    alert("You will love your girl today like % " + loveColculator);
}



---------------------------------------------------------------

    function bmiCalculator (weight, height) {

        var interpretation = weight/(height*height);

        if(interpretation < 18.5){

            return "Your BMI is "+ interpretation +", so you are underweight.";

        }

        if(interpretation>=18.5 && interpretation<=24.9){

            return "Your BMI is "+interpretation+", so you have a normal weight.";

        }

        if(interpretation>24.5){

            return "Your BMI is "+interpretation+", so you are overweight.";

        }

        return interpretation;

    }

-------------------------------------------------------------------------------------



    function isLeap(year) {

        if (year % 4 !==0 || year % 100 === 0 && year % 400 !== 0) {

            console.log("Not leap year.");

        } else {

            console.log("Leap year.");

        }

    }


isLeap(1998);


--------------------------------------



var guestLists = ["Ahmet","Mehmet","Cnabet","Hasan","Kos ","Getir"];
var guestNames = prompt("What is your name ? ")

if (guestLists.includes(guestNames)) {

    alert("Welcome Come In");
} else{
    alert("Sorry maybe next time :( ")
}

----------------------------------------
var output = [];
var count = 1;

function fizzBuzz() {

    output.push(count);
    count ++;

    console.log(output);

}

-------------------------------------------------------

var output = [];
var count = 1;

function fizzBuzz () {

    while (count<=100) {

        if (count % 3 === 0 && count % 5 ===0) {
            output.push("FizzBuzz");
        }
        else if (count % 3 === 0) {

            output.push("Fizz");
        }
        else if (count % 5 === 0) {
            output.push("Buzz");
        }

        else {
            output.push(count);
        }

        count ++;
    }


    console.log(output);
}


----------------------------------------------------

    function whosPaying(names) {

    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];

    return randomPerson + " is going to bu y lunch today! "

    }

----------------------------------------------------------

var numberOfBottles = 99

while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    }
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
    numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}