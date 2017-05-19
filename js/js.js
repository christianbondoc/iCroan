// Setting up variables



// Div box questions
var qOne = document.getElementById("qOne"),
    qTwo = document.getElementById("qTwo"),
    qThree = document.getElementById("qThree"),
    qFour = document.getElementById("qFour"),
    results = document.getElementById("results"),
    finAnswer = document.getElementById("finAnswer");

// Buttons
var forwardQ2 = document.getElementById("forwardQ2"),
    forwardQ3 = document.getElementById("forwardQ3"),
    forwardQ4 = document.getElementById("forwardQ4"),
    calculate = document.getElementById("calculate"),
    restartButt = document.getElementById("restartButt"),
    backwardsQ3 = document.getElementById("backwardsQ3"),
    backwardsQ2 = document.getElementById("backwardsQ2"),
    backwardsQ1 = document.getElementById("backwardsQ1"),
    refreshPage = document.getElementById("refreshButt");

//Question 1 Questions - What kind of gamer
var notGamer = document.getElementById("notGamer"),
    casualGamer = document.getElementById("casualGamer"),
    hardcoreGamer = document.getElementById("hardcoreGamer"),
    moneyGamer = document.getElementById("moneyGamer");


//Question 2 Questions - What do you like to do
var liveLife = document.getElementById("liveLife"),
    statLife = document.getElementById("statLife"),
    balanceLife = document.getElementById("balanceLife"),
    noLife = document.getElementById("noLife");

// Question 3 Questions - What do you own
var mobileOwner = document.getElementById("mobileOwner"),
    consoleOwner = document.getElementById("consoleOwner"),
    pcOwner = document.getElementById("pcOwner"),
    bothOwner = document.getElementById("bothOwner");

// Question 4 Questions - How long do you play for
var oneHour = document.getElementById("oneHour"),
    threeHour = document.getElementById("threeHour"),
    fourHour = document.getElementById("fourHour"),
    sixHour = document.getElementById("sixHour");

// Question Results 
var kindResults = 0,
    doResults = 0,
    ownResults = 0,
    longResults = 0,
    finalResults = 0;

// VARIABLES ALL SET
var frontLock = document.getElementById("lockout-questions");


// FIRST SET OF QUESTIONS
// ALL THE BUTTON FUNCTIONS

    refreshPage.addEventListener("click", function(){
        window.location.reload();
        console.log("Page Refresh!");
    })
    
// FOWARD BUTTONS
// WHAT KIND OF GAMER
    forwardQ2.addEventListener("click", function(){
        

        if (notGamer.checked){
            kindResults = 1;
            qTwo.style.display = "block";
            qOne.style.display = "hidden";
        } else if (casualGamer.checked){
            kindResults = 2;
            qTwo.style.display = "block";
            qOne.style.display = "hidden";
        } else if (hardcoreGamer.checked){
            kindResults = 3;
            qTwo.style.display = "block";
            qOne.style.display = "hidden";
        } else if (moneyGamer.checked){
            kindResults = 4;
            qTwo.style.display = "block";
            qOne.style.display = "hidden";
        } else if (notGamer.checked == false && casualGamer.checked == false && hardcoreGamer.checked == false && moneyGamer.checked == false) {
            alert("Please pick what kind of gamer you are");
            return false;
        }
        doResults = 0;
    
    console.log("Kind of gamer: "+kindResults);
});
// WHAT DO YOU LIKE TO DO?

        forwardQ3.addEventListener("click", function(){
        ownResults = 0;
        if (liveLife.checked){
            doResults = 1;
            qThree.style.display = "block";
            qTwo.style.display = "hidden";
        } else if(statLife.checked){
            doResults = 2;
            qThree.style.display = "block";
            qTwo.style.display = "hidden";
        } else if(balanceLife.checked){
            doResults = 3;
            qThree.style.display = "block";
            qTwo.style.display = "hidden";
        } else if(noLife.checked){
            doResults = 4;
            qThree.style.display = "block";
            qTwo.style.display = "hidden";
        } else if(liveLife.checked == false && statLife.checked == false && balanceLife.checked == false && noLife.checked == false){
        (alert("Please pick what you like to do"))
            return false;
        }
        console.log("DO: "+doResults)
    });
// WHAT DO YOU OWN
        forwardQ4.addEventListener("click", function(){

        if(mobileOwner.checked){
            ownResults = 1; 
            qFour.style.display = "block"
            qThree.style.display = "none";
            console.log(ownResults);
        } else if(consoleOwner.checked){
            ownResults = 2; 
            qFour.style.display = "block"
            qThree.style.display = "none";
            console.log(ownResults);
            console.log("Pleb");
        } else if(pcOwner.checked){
            ownResults = 3;
            qFour.style.display = "block"
            qThree.style.display = "none";
            console.log(ownResults);
        } else if(bothOwner.checked){
            ownResults = 4;
            qFour.style.display = "block"
            qThree.style.display = "none";
            console.log(ownResults);
        } else (
            alert("What do you own?"));
        console.log("Owns a: "+ownResults)
        longResults = 0;

    });
// BACKWARD BUTTONS
// HOW LONG YOU PLAY FOR?
    backwardsQ1.addEventListener("click", function(){
        qOne.style.display = "block";
        qTwo.style.display = "none";
        console.log("Click back to Q1");
        kindResults = 0;
    });
    backwardsQ2.addEventListener("click", function(){
        qTwo.style.display = "block";
        qThree.style.display = "none";
        console.log("Click back to Q2");
        doResults = 0;
    });
    backwardsQ3.addEventListener("click", function(){
        qThree.style.display = "block";
        qFour.style.display = "none";
        console.log("Click back to Q3");
        ownResults = 0;
    });
    

        calculate.addEventListener("click", function(){
            if(oneHour.checked){
                longResults = 1
                finAnswer.style.display = "block";
                qFour.style.display = "none";
            } else if(threeHour.checked){
                longResults = 2;
                finAnswer.style.display = "block";
                qFour.style.display = "none";
            } else if(fourHour.checked){
                longResults = 3;
                finAnswer.style.display = "block";
                qFour.style.display = "none";
            } else if(sixHour.checked){
                longResults = 4;
                finAnswer.style.display = "block";
                qFour.style.display = "none";
            } else (alert("Please tell me how long you play games for"));
            console.log("Length: "+longResults);
            var sum;
            finalResults = kindResults + doResults + ownResults + longResults;
            console.log("Total amount: "+finalResults);


    if (finalResults<= 4){
        results.innerHTML = "Casual Game <br> Suggestion: Stardew Valley";
    } else if (finalResults >= 5 && finalResults <=8) {
        results.innerHTML = "Strategy Game <br> Suggestion: Civilization VI";
    } else if (finalResults >=9 && finalResults <= 12) {
        results.innerHTML = "Competitve Game/Shooter <br> Suggestion: Overwatch";
    } else {
        results.innerHTML = "MMORPG <br> Suggestion: World of Warcraft";
    }


})  // End of form

// Restart the form
    restartButt.addEventListener("click", function(){
        
        // restack the divs

        qOne.style.display = "block";
        qTwo.style.display = "none";
        qThree.style.display = "none";
        qFour.style.display = "none";
        finAnswer.style.display = "none"

        // Reset the radio Buttons
        notGamer.checked = false;
        casualGamer.checked = false;
        hardcoreGamer.checked = false;
        moneyGamer.checked = false;

        liveLife.checked = false;
        statLife.checked = false;
        balanceLife.checked = false;
        noLife.checked = false;

        mobileOwner.checked = false;
        consoleOwner.checked = false;
        pcOwner.checked = false;
        bothOwner.checked = false;

        oneHour.checked = false;
        threeHour.checked = false
        fourHour.checked = false;
        sixHour.checked = false;

        // Restart the counter
        kindResults = 0;
        doResults = 0;
        ownResults = 0;
        longResults = 0;
        // Confirm reset
        console.log("Reset Number: "+kindResults + doResults + ownResults + longResults);
    });
    
/*  
kRadio = what Kind of gamer are you
dRadio = what Do you do 
oRadio = what do you Own
lRadio = How Long do you play for

kindGamer
doGamer
ownGamer
longGamer

kindResults = 0,
doResults
ownResults
longResults
finalResults
*/

// Random word generator pulled from array
    function b(a) {
        for (var b = "", c = "abcdefghijklmnopqrstuvwxyz ", d = 0; a > d; d++)
            b += c.charAt(Math.floor(Math.random() * c.length));
        return b
    }
    let interval;
    var randomWords = ['itemA', 'itemB', 'itemC', 'itemD', 'itemE'];
    var randomGames = [
        'Clash of Clans',
        'Overwatch',
        'Counter-Strike Global Offensive',
        'Tera Uprising',
        'Dauntless',
        'Dota 2',
        'Starcraft 2',
        'Diablo 3',
        'World of Warcraft',
        'FIFA 17',
        'NBA2k17',
        'NHL17',
        'Paperboy 2017',
        'Bastion',
        'Hearthstone',
        'Prey',
        'Rust',
        ]
    let count = null; 
    let word = '';
    let arrWords = randomWords[Math.floor(Math.random()*randomWords.length)];
    var total = Math.round(Math.random()*30+20);
    var go = true;
interval = setInterval(function(){
    interval = setInterval(function(){
    if (go){
        if (count >= total) {
            //word = arrWords;
            total = Math.round(Math.random()*30+50); //*30+20
            word = randomGames[Math.floor(Math.random()*(randomGames.length))];
            setTimeout(function(){go = true}, 5000);
            count = 0;
            go = false;
    } 
    else {
        count++
        word = b(randomGames[Math.floor(Math.random() * (randomGames.length - 1))].length)
    } 
        document.getElementById('word').innerHTML = word;
        }
    }, 50); // Speed of words changing
},5000);

// Fix to loop words through randomWords[i], fix speed of word changing really fast

var lockoutDiv = document.getElementById("lockout");
    lockoutButton = document.getElementById("lockout-start"),
    lockoutEnd = document.getElementById("lockout-end"),
    siteWrapper = document.getElementById("site-wrapper"),
    coverContainer = document.getElementById("site-wrapper-container"),
    infoButt = document.getElementById("infoButt"),
    infoWrapper = document.getElementById("info-wrapper");

    lockoutButton.addEventListener("click", function(){
        lockoutDiv.style.display = "none";
        go = false;
        qOne.style.display = "block";
        coverContainer.style.display = "block";
    })

var gameImg = document.getElementById("gameImg");
    gameBg = document.getElementById("gameBG"),
    gameName = document.getElementById("gameName"),
    gamePara = document.getElementById("gameParagraph"),
    gameMScore = document.getElementById("mcScore"),
    gameIGN = document.getElementById("ignScore"),
    gameTrailer = document.getElementById("iFrame");
    gameContain = document.getElementById("game-container");



// Change infobutt2
var gameObj = {
    img: gameImg,
    bg: gameBg,
    gName: gameName,
    para: gamePara,
    mcScore: gameMScore,
    ignScore: gameIGN,
    gTrailer: gameTrailer,
}

infoButt.addEventListener("click", function(){
    console.log("click");
   if(finalResults<= 4){
        console.log("Stardew");
        window.open("stardew.html");

    } else if(finalResults >= 5 && finalResults <=8){
        console.log("Civ VI");
        window.open("civ.html");
    }
    else if (finalResults >=9 && finalResults <= 12)  {
        console.log("Overwatch");
        window.open("overwatch.html");
    } 
    else{
        console.log("World of warcraft");
        window.open("wow.html");
    }

}) 