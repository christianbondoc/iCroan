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
    console.log(gameObj);
    gameContain.style.top = "0";
    gameContain.style.bottom = "0";
    gameContain.style.margin = "auto";
    gameObj.img.style.left = "0px";
    
gameObj.gName.innerHTML = "STARDEW VALLEY";
        gameObj.img.style.backgroundImage = "url(assets/img/starLogo.png)";
        gameObj.bg.style.backgroundImage = "url(assets/img/starBG.png)";
        gameObj.para.innerHTML = "Stardew Valley is an indie farming simulation role-playing video game developed solely by Eric Barone and published by Chucklefish Games. The game was released for Microsoft Windows in February 2016, with ports for OS X, Linux, PlayStation 4 and Xbox One released later that year. A port for Nintendo Switch is also in development and is expected to be released in 2017.<br><br>In Stardew Valley, the player takes the role of a character that, to get away from the hustle of an office job, takes over their grandfather's dilapidated farm in a place known as Stardew Valley. The player manages their character's time and energy levels as they clear land, plant and tend crops, raise livestock, craft goods, mine for ores, and engage in social activities, including romances leading towards marriage, with the various residents of the small town, all while earning in-game money to expand their farm. The game is open-ended, allowing the player to take on activities as they see fit.";
        gameObj.gTrailer.src = "https://www.youtube.com/embed/ot7uXNQskhs?ecver=1";
        gameObj.gTrailer.style.display = "block";