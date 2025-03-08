const gameBoard = document.getElementById('gamePage');
let kill = 0;
let speed = 1000;

function spawnZombies() {
    let zombie = document.createElement('div');
    zombie.classList.add('zombie');
    gameBoard.appendChild(zombie)

    x = innerHeight+40;
    y = Math.random()*window.innerWidth;

    zombie.style.top = `${x}px`
    zombie.style.left = `${y}px`


    setTimeout(() => {
        zombie.style.top = `${window.innerHeight/ 2}px`
        zombie.style.left = `${window.innerWidth/ 2 -25}px`
    },100)

    function killZombie() {
        gameBoard.removeChild(zombie);
        kill++;
        speed -= 10;
    }
    zombie.addEventListener('click',killZombie)
  

    setTimeout(()=>{
        if(document.body.contains(zombie)){
            zombie.removeEventListener("click",killZombie)
            // document.getElementById('point').innerHTML=`You killed : ${kill}`
            // document.getElementById('score').style.display='block' ;
            let zombies = document.querySelectorAll('.zombie');
            zombies.forEach(zombie => gameBoard.removeChild(zombie));
            game.stop();
            

        }
    },5000);
}

let gameInterval;

let game = {
    start : () => {
        gameInterval = setInterval(spawnZombies, speed);
        document.getElementById('score').style.display='none'
    },
    stop : () => {
        clearInterval(gameInterval);
    }
};

