const menuIcon=document.getElementById("menu-icon")
const menu=document.getElementById("menu")
menuIcon.addEventListener("click",()=>{

if(menu.className==="hidden"){
menu.classList.remove("hidden");}
else{
menu.classList.add("hidden");}



})

const p1ScoreDisplay=document.getElementById('p1Score')
 
 

const p1Btn=document.getElementById('p1Btn');
const p2Btn=document.getElementById('p2Btn');
const resetBtn=document.getElementById('resetBtn');
let p1Score=0;



p1Btn.addEventListener('click',()=>{
    p1Score++;
    p1ScoreDisplay.textContent=p1Score;
 

 
});
p2Btn.addEventListener('click',()=>{
    p1Score--;
    p1ScoreDisplay.textContent=p1Score
  
    
});
resetBtn.addEventListener('click',()=>{
    let p1Score=0;
 
    p1ScoreDisplay.textContent=p1Score
 
});