function scrollToSection(){
document.getElementById("timeline")
.scrollIntoView({behavior:"smooth"});
}

const targetDate = new Date("2026-10-01");

function updateCounter(){
const now = new Date();
const diff = targetDate - now;

const days = Math.floor(diff / (1000*60*60*24));

document.getElementById("counter").innerHTML =
"باقي " + days + " يوم على بداية الجامعة 🎓";
}

updateCounter();
setInterval(updateCounter,1000);

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pieces = [];

for(let i=0;i<100;i++){
pieces.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*6+2,
speed:Math.random()*3+1
});
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);

pieces.forEach(p=>{
ctx.beginPath();
ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
ctx.fillStyle=`hsl(${Math.random()*360},100%,60%)`;
ctx.fill();

p.y += p.speed;

if(p.y > canvas.height){
p.y = -10;
}
});

requestAnimationFrame(animate);
}

animate();