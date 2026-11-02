"use strict";
let toastTimer;
const status=document.getElementById('copy-status');
document.querySelectorAll('[data-copy]').forEach(button=>{
 button.addEventListener('click',async()=>{
  const input=document.getElementById(button.dataset.copy);
  try {
   if(!navigator.clipboard?.writeText)throw new Error('Clipboard unavailable');
   await navigator.clipboard.writeText(input.value);
   button.textContent='Copied';status.textContent='Copied to clipboard.';
   setTimeout(()=>{button.innerHTML='Copy <span aria-hidden="true">⧉</span>';},1800);
  }catch(error){input.focus();input.select();status.textContent='Selected for copying. Press Ctrl+C or Command+C, or use your device’s Copy action.';}
  clearTimeout(toastTimer);toastTimer=setTimeout(()=>status.textContent='',5000);
 });
});
