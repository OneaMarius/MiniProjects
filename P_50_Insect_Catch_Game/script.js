const screens = document.querySelectorAll('.screen');
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn');
const start_btn = document.getElementById('start-btn')
const game_container = document.getElementById('game-container')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')
let seconds = 0
let score = 0
let selected_insect = {}
let elements =[];
let adeHeads = ["./pictures/head.png","./pictures/head1.png","./pictures/head2.png","./pictures/head3.png"]
screens[1].classList.remove('up')

start_btn.addEventListener('click', () => screens[0].classList.add('up'))

choose_insect_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        selected_insect = { src, alt }
        screens[1].classList.add('up')
        setTimeout(createInsect, 1000)
        startGame()
        console.log(selected_insect.src)
    })
})

function startGame() {
    setInterval(increaseTime, 1000)
}

function increaseTime() {
    let m = Math.floor(seconds / 60)
    let s = seconds % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    timeEl.innerHTML = `Time: ${m}:${s}`
    seconds++
}

let insectInterval;

function createInsect() {
    let indexRandom = Math.floor(Math.random()*4);
    console.log(indexRandom);
    const insect = document.createElement('div')
    insect.classList.add('marioNet')
    const { x, y } = getRandomLocation()
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`
    insect.innerHTML = `<div class="bigBP body">
    <div class="BP lowerBody">
        <div class="BP topBody">
            <div class="BP head" style="background-image: url(${adeHeads[indexRandom]});"></div>
            <div class="BP neck"></div>

            <div class="bigBP arms leftArm">
                <div class="articArm articLA"></div>
                <div class="BP topArm TAL">
                    <div class="articCenterArm"></div>
                    <div class="BP lowerArm LAL">
                        <div class="articHand"></div>
                        <div class="BP hands leftHand"></div>
                    </div>
                </div>
            </div>

            <div class="bigBP arms rightArm">
                <div class="articArm articRA"></div>
                <div class="BP topArm TAR">
                    <div class="articCenterArm"></div>
                    <div class="BP lowerArm LAR">
                        <div class="articHand"></div>
                        <div class="BP hands rightHand"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="articBody"></div>

        <div class="bigBP legs leftLeg">
            <div class="articLeg articLL"></div>
            <div class="BP topLeg TLL">
                <div class="articCenterLeg"></div>
                <div class="BP lowerLeg LLL">
                    <div class="articFoot"></div>
                    <div class="BP foots leftFoot"></div>
                </div>
            </div>
        </div>

        <div class="bigBP legs rightLeg">
            <div class="articLeg articRL"></div>
            <div class="BP topLeg TLR">
                <div class="articCenterLeg"></div>
                <div class="BP lowerLeg LLR">
                    <div class="articFoot"></div>
                    <div class="BP foots rightFoot"></div>
                </div>
            </div>
        </div>
    </div>
</div>`
    elements = insect.querySelectorAll(".BP");
    sportMarionet()
    insect.addEventListener('click', catchInsect)

    game_container.appendChild(insect)
    insectInterval = setInterval(() => {
        const { x, y, a, b } = getRandomLocation()
        console.log(x,y,a,b)
        insect.style.top = `${y}px`
        insect.style.left = `${x}px`
        // insect.style.transform = `translate(${a}px, ${b}px)`
        insect.style.transform = `translate(${a}px, ${b}px) rotate(${Math.random() * 360}deg)`
        // insect.style.transform = 'translate(0px, 0px)'
    }, 2000);
    
}

function moveInsect() {
    this.style.transform = 'translateX(250px)' ;
}

function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight;
    const x = Math.random() * (width - 400) + 200
    const y = Math.random() * (height - 400) + 200
    const a = -100 + Math.random() * 200
    const b = -100 + Math.random() * 200
    return { x, y, a, b }
}

function catchInsect() {
    increaseScore()
    this.classList.add('caught')
    setTimeout(() => this.remove(), 2000)
    addInsects()
    clearInterval(insectInterval);
}

function addInsects() {
    setTimeout(createInsect, 2000)
    setTimeout(createInsect, 4000)
}

function increaseScore() {
    score++
    if(score > 5) {
        message.classList.add('visible')
    }
    scoreEl.innerHTML = `Score: ${score}`
}