const game = document.getElementById('gamePage');
const home = document.getElementById('home');
let kill = 0;
let speed = 1000;

function spawnZombies() {
    let zombie = document.createElement('div');
    zombie.classList.add('zombie');
    game.appendChild(zombie)



        x = innerHeight+40;
        y = Math.random()*window.innerWidth;





    zombie.style.top = `${x}px`
    zombie.style.left = `${y}px`


    setTimeout(() => {
        zombie.style.top = `${window.innerHeight/ 2}px`
        zombie.style.left = `${window.innerWidth/ 2 -25}px`
    },100)
    function killZombie() {
        game.removeChild(zombie);
        kill++;
        speed -= 100;
    }
    zombie.addEventListener('click',killZombie)
  

    setTimeout(()=>{
        if(document.body.contains(zombie)){
            zombie.removeEventListener("click",killZombie)
            document.getElementById('point').innerHTML=`You killed : ${kill}`
            document.getElementById('score').style.display='block' 
            clearInterval(gameInterval);

        }
    },5000);
}
function killZombie() {
    game.removeChild(zombie);
    kill++;
}
const gameInterval = setInterval(spawnZombies, speed);