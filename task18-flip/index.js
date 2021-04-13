document.addEventListener("DOMContentLoaded", (e) => {
    const game = document.querySelector(".game-container");
    const score = document.querySelector(".score");
    const bird = document.querySelector(".bird");
    let birdTimer;
    let birdLeft = 220;
    let birdBottom = 100;
    let gravit = 2;
    let isGameOver = false;
    let timer;
    let num = 0
    

    function createBird() {
        birdBottom -= gravit;
        bird.style.bottom = birdBottom + "px";
        bird.style.left = birdLeft + "px";
    }

    birdTimer = setInterval(createBird, 20)


    function jump (e){
        if (birdBottom < 490)birdBottom += 50;
        bird.style.bottom = birdBottom + 'px'
    }

    let touchTimer;

    function jumpTouch (e){
        if (birdBottom < 490){
            touchTimer = setInterval(()=>{
                birdBottom += 7;
                bird.style.bottom = birdBottom + 'px';
            }, 20)
            

        }

        
    }

    function controls(e){
        if(e.keyCode === 32){
            jump()
        }
    }

    document.addEventListener('keyup', controls);
    document.addEventListener('touchstart', jumpTouch);
    document.addEventListener('touchend', e => {
        clearInterval(touchTimer)
    });


    function createObs(){
        let obsLeft = 500;
        let randomHeigth = Math.random() * 150;
        let obsBottom = randomHeigth
        let topObsBottom = randomHeigth + 500;
        let obs = document.createElement('div');
        let topObs = document.createElement('div');
        if(!isGameOver){
            obs.classList.add('obs')
            topObs.classList.add('topObs')
        }
        game.appendChild(obs);
        game.appendChild(topObs);
        obs.style.bottom = obsBottom + 'px';
        obs.style.left = obsLeft + 'px';
        topObs.style.bottom = topObsBottom + 'px';
        topObs.style.left = obsLeft + 'px';
           
        function moveObs(){
           obsLeft -= 2;
           obs.style.left = obsLeft +'px';
           topObs.style.left = obsLeft +'px';
           if(obsLeft === -60){
               clearInterval(timerId);
               game.removeChild(obs)
               game.removeChild(topObs)
           }
           if( 
               
               obsLeft > 180 && obsLeft < 280 && (birdBottom + 150 < obsBottom + 300 || birdBottom + 150 > topObsBottom - 50)  ||
               birdBottom === 0 ){
               gameOver()
               clearInterval(timerId)
           }
       }
       let timerId = setInterval(moveObs, 20)
       if(!isGameOver) setTimeout(createObs, 3000);
         
   }
   
   createObs()

   

    function gameOver() {
        clearInterval(birdTimer);
        clearInterval(timer)
        console.log("игра окончена");
        isGameOver = true;
        document.removeEventListener('keyup', controls)
        document.removeEventListener('touchstart', jump)
    }

    function getScore (){
        num++;
        score.textContent = `Score : ${num}`
    }


    timer = setInterval(getScore, 1000)

    

    
});
