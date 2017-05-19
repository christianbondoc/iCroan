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

var fakeButt = document.getElementById("fakeButt");// DELETE THIS
    
    console.log(gameObj);
    gameContain.style.top = "0";
    gameContain.style.bottom = "0";
    gameContain.style.margin = "auto";
    gameObj.img.style.left = "0px";
    
        console.log("Overwatch");
        gameObj.gName.innerHTML = "OVERWATCH";
        gameObj.img.style.backgroundImage = "url(assets/img/owLogo.png)";
        gameObj.bg.style.backgroundImage = "url(assets/img/owScreen1.png)";
        gameObj.para.innerHTML = "Overwatch assigns players into two teams of six, with each player selecting one of 24 pre-defined characters, called heroes, each with unique movement, attributes, and abilities, whose roles are divided into four categories: Offense, Defense, Tank, and Support. <br> <br> Players on a team work together to secure and defend control points on a map or escort a payload across the map in a limited amount of time. Players gain cosmetic rewards that do not affect gameplay, such as character skins and victory poses, as they play the game.<br><br>The game was initially launched with casual play, with a competitive ranked mode, various 'arcade' game modes, and a player-customizable server browser subsequently included following its release. Additionally, Blizzard has developed and added new characters, maps, and game modes post-release, while stating that all Overwatch updates will remain free, with the only additional cost to players being microtransactions to earn additional cosmetic rewards.";
        gameObj.gTrailer.src = "https://www.youtube.com/embed/FqnKB22pOC0?ecver=1";
        gameObj.gTrailer.style.display = "block";

