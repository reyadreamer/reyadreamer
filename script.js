const playerButtons=document.querySelectorAll('.player-toggle');
playerButtons.forEach(button=>button.addEventListener('click',()=>{
  const targetId=button.getAttribute('aria-controls');
  const target=document.getElementById(targetId);
  const isOpening=target?.hasAttribute('hidden');
  document.querySelectorAll('.track-player').forEach(player=>player.setAttribute('hidden',''));
  playerButtons.forEach(item=>{item.setAttribute('aria-expanded','false');item.textContent='Play here +';});
  if(!target||!isOpening)return;
  const frame=target.querySelector('iframe');
  if(frame&&!frame.hasAttribute('src'))frame.src=frame.dataset.src;
  target.removeAttribute('hidden');
  button.setAttribute('aria-expanded','true');
  button.textContent='Close player −';
}));

const inquiryForm=document.querySelector('#inquiry-form');
inquiryForm?.addEventListener('submit',(event)=>{
  event.preventDefault();
  const data=new FormData(inquiryForm);
  const name=data.get('name');
  const email=data.get('email');
  const details=data.get('details');
  const subject=encodeURIComponent(`Project inquiry from ${name}`);
  const body=encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nProject details:\n${details}`);
  window.location.href=`mailto:reyadreamer@gmail.com?subject=${subject}&body=${body}`;
});
