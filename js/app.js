const shareBtn = document.querySelector('#shareBtn');
const shareSection = document.querySelector('#shareSection');

shareBtn.addEventListener('click', ()=>{
   shareBtn.classList.toggle('articlePreviev__shareBtn--active'); 
   shareSection.classList.toggle('articlePreviev__shareSection--active');
});