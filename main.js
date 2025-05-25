let btnMenu = document.getElementById('btn-menu');
let Menu = document.querySelector('.nav-links');

btnMenu.onclick = function(){
    btnMenu.classList.toggle('fa-times');
    Menu.classList.toggle('active')
}

let header = document.querySelector('header');

window.onscroll = function(){
    if(this.scrollY >= 100){
        header.classList.add('active')
    }
    else{
        header.classList.remove('active')
    }
    btnMenu.classList.remove('fa-times')
    Menu.classList.remove('active')
}
const typed = new Typed('#multiple-text',{
      strings: ['<i>مصمم جرافيك</i>.', 'و مطور واجهة امامية','مستعد لتحويل افكارك لواقع ملموس','وبناء علامة تجارية تتحدث عنك'],
      typeSpeed: 80,
      backspeed: 80,
      backDelay: 1200,
      loop: true,

    });
    
  function closeWhatsApp() {
    document.getElementById("whatsappWidget").style.display = "none";
  }
  
  const whatsappBtn = document.getElementById('whatsapp-button');
  const closeBtn = document.getElementById('close-whatsapp');

  closeBtn.addEventListener('click', () => {
    whatsappBtn.style.display = 'none';
    
    setTimeout(() => {
      whatsappBtn.style.display = 'flex';
      whatsappBtn.classList.add('slide-up');

    setTimeout(() => {
      whatsappBtn.classList.remove('slide-up');
    },500);
    }, 15000);
  });

  document.addEventListener("DOMContentLoaded", function () {
  const whatsapp = document.getElementById('whatsapp-button');
  const message = document.getElementById('whatsapp-message');

  let startY = 0;
  const threshold = 40;

  whatsapp.addEventListener('touchstart', function (e) {
    startY = e.touches[0].clientY;
  }, { passive: true });

  whatsapp.addEventListener('touchend', function (e) {
    const endY = e.changedTouches[0].clientY;
    const diff = startY - endY;

    if (diff > threshold) {
      message.style.display = 'block';

      // إخفاء بعد 2 ثانية
      setTimeout(() => {
        message.style.display = 'none';
      }, 2000);
    }
  }, { passive: true });
});


  
  
  



