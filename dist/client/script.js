const menuButton=document.querySelector('.menu-toggle');
const navigation=document.querySelector('.site-nav');
menuButton?.addEventListener('click',()=>{const isOpen=navigation.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(isOpen));});
navigation?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{navigation.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');}));

const inquiryForm=document.querySelector('#inquiry-form');
inquiryForm?.addEventListener('submit',(event)=>{
  event.preventDefault();
  const data=new FormData(inquiryForm);
  const name=data.get('name');
  const email=data.get('email');
  const details=data.get('details');
  const subject=encodeURIComponent(`Project inquiry from ${name}`);
  const body=encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nProject details:\n${details}`);
  window.location.href=`mailto:hello@reyadreamer.com?subject=${subject}&body=${body}`;
});
