(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),l=document.getElementById("timer-minutes"),n=document.getElementById("timer-seconds"),r=()=>{let e=(new Date("22 november 2021").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,days:Math.floor(e/60/60/24),hours:Math.floor(e/60/60%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}};r().timeRemaining>0&&setInterval((()=>{let e=r();t.textContent=("0"+e.hours).slice(-2),l.textContent=("0"+e.minutes).slice(-2),n.textContent=("0"+e.seconds).slice(-2)}),1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),l=t.querySelector(".close-btn"),n=t.querySelectorAll("ul>li>a"),r=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",r),l.addEventListener("click",r),n.forEach((e=>e.addEventListener("click",r)))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),l=e.querySelector(".popup-close");t.forEach((t=>{t.addEventListener("click",(()=>{e.style.opacity="0",e.style.display="block",document.documentElement.offsetWidth>=738?(()=>{let t,l=0;t=setInterval((()=>{l<1?(l+=.05,e.style.opacity=l):clearInterval(t)}),50)})():e.style.opacity="1"}))})),l.addEventListener("click",(()=>{e.style.display="none"}))})(),(()=>{const e=document.querySelectorAll(".calc-block"),t=document.querySelectorAll(".form-name"),l=document.querySelectorAll(".form-email"),n=document.querySelectorAll(".form-phone");e.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/g,"")}))})),t.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[a-яА-Я]\s/gi,"")}))})),l.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[a-zA-z]\S/gi,"")}))})),n.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/^\d$/g,"")}))}))})()})();