


if(window.location.pathname == '/portfolio.html') {
    document.querySelector(`.ttt`).addEventListener(`click`, init);
}

window.addEventListener('load', function(){
        document.body.classList.add('fade-out');
    });

document.querySelector(`.wrap`).style.backgroundImage = `linear-gradient(transparent,transparent), url(../img/background${random()}.jpg)`;

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    document.querySelector(`.wrap`).style.backgroundImage = `linear-gradient(transparent,transparent), url(../img/background5.jpg)`;
 } 

function random(){
    return Math.floor((Math.random()*5)+1);
}



function init(){
    const gridSelect = document.querySelectorAll(`.portfolio__item`);
    let player,
        counter = 0,
        playingfeeld = [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
        ],
        vivtoryConditions = [
            [1,2,3],
            [4,5,6],
            [7,8,9],
            [1,4,7],
            [2,5,8],
            [3,6,9],
            [1,5,9],
            [3,5,7]
        ];

    // console.log(`new game`);
    // console.log(playingfeeld);
    // console.log(vivtoryConditions);

    document.querySelector(`.ttt`).removeEventListener(`click`, init);
    document.querySelector(`.ttt`).innerText = "Exit?";
    document.querySelector(`.ttt`).addEventListener(`click`,function(){
        location.reload();  
    })

gridSelect.forEach(function(i){
    i.innerHTML = "";
    i.style.backgroundImage = "none";
    i.style.backgroundColor = "#fff";
    i.addEventListener(`click`, xOrh);
})
 
pickPlayer();
aiTurn();

function xOrh(){
    this.classList.add(player);

    updateVivtoryConditions(parseInt(this.id));
    updatePlayingFeeld(parseInt(this.id));
    checkVivtoryConditions();
    switchPlayer();
    this.removeEventListener('click', xOrh);
    aiTurn();
}

function aiTurn(){
    if (player !== 'o') return;
    let move;
    winBrain();
    if (move) {
        turn(move);
        return
    }
   blockBrain();
    if (move) {
        turn(move);
        return
    } 
    randomBrain();
    if (move) {
        turn(move);
        return
    }

    function winBrain(){
        vivtoryConditions.forEach(function(e){
            if((e[0] === `o` && e[1] === `o`) && e[2] !== `x`) move = e[2];
            if((e[0] === `o` && e[2] === `o`) && e[1] !== `x` ) move = e[1];
            if((e[1] === `o` && e[2] === `o`) && e[0] !== `x` ) move = e[0];
        });
    }

    function blockBrain(){
        vivtoryConditions.forEach(function(e){
            if((e[0] === `x` && e[1] === `x`)  && e[2] !== `o`  ) move = e[2];
            if((e[0] === `x` && e[2] === `x`)  && e[1] !== `o` ) move = e[1];
            if((e[1] === `x` && e[2] === `x`)  && e[0] !== `o` ) move = e[0];
        });
    }

    function randomBrain(){
        let random1to9 = Math.floor(Math.random()*9);
        if(playingfeeld[random1to9] === `x` || playingfeeld[random1to9] === `o` ) return randomBrain();
        move = random1to9 + 1;
    }

    function turn (move){
        document.getElementById(move).classList.add(player);
        updateVivtoryConditions(move);
        updatePlayingFeeld(move);
        checkVivtoryConditions();
        switchPlayer();
        document.getElementById(move).removeEventListener('click', xOrh);     
    }
}

function checkVivtoryConditions() {
    let wongame = 0;
    counter ++
    vivtoryConditions.forEach(function(e){
        if(e[0] === e[1] && e[1] === e[2]){
            wongame = e[0];
        }
    })
    if(wongame) {
        // alert(`Game Won By Player ${wongame}`);
        return location.reload(); 
    } else if (counter === 9){
        // alert(`Draw`);
        return location.reload();       
    }
}

function switchPlayer(){
    player === `x`?  player = `o` : player = `x`;
}

function pickPlayer(){
    if(Math.random() > .5 ){
        // alert(`player x is first`);
        player = 'x';
    } else {
        // alert(`player o is first`);
        player = 'o';
    }
}

function updatePlayingFeeld(id){
    playingfeeld[id-1] = player;
};

function updateVivtoryConditions (id){
        vivtoryConditions.forEach(function(i){
            if(i.indexOf(id) >= 0){
                i.splice(i.indexOf(id), 1, player);
            }
        })

}

};

