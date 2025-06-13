const copyButtons = document.querySelectorAll('.copy-btn');
copyButtons.forEach((btn) => {
  const defaultCopyText = document.querySelector("#button").innerHTML;
  btn.addEventListener("click", () => {
   const code = btn.parentElement.querySelector('code').innerText;
    navigator.clipboard.writeText(code).then(() => {
      btn.textContent = " Copied!";
      btn.style.color = "#dcf804"

      setTimeout(() => {
        btn.innerHTML = defaultCopyText;
        btn.style.color = "#d4d4d4"
      }, 2000);
    }).catch(err => {
      console.error("Copy failed:", err);
    });
  });
});

fetch('/app/navbar.html')
.then(response => response.text())
  .then(data => {
    document.getElementById('navbar-container').innerHTML = data;
    document.querySelectorAll('.toggle-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const parent = btn.parentElement;
        parent.classList.toggle('active');
      });
    });
    const menuBtn = document.querySelector('#mobile-nav-btn');
    const asideSection = document.querySelector('#aside-section');
    if (menuBtn && asideSection) {
      menuBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (asideSection.style.display === 'flex') {
        asideSection.style.display = 'none';
        document.body.style.overflow = '';
      } else {
        asideSection.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      }
      });

      document.body.addEventListener('click', (e) => {
      // Only hide if asideSection is open and click is outside
        if ( asideSection.style.display === 'flex' && !asideSection.contains(e.target) && e.target !== menuBtn){
          asideSection.style.display = 'none';
          document.body.style.overflow = '';
        }
      });
    }


    
    



    
    

    console.log(asideSection);
    console.log(document.querySelectorAll('.toggle-btn'));
});
window.addEventListener('load', () => {
  document.getElementById('loader').style.display = 'none';
  document.getElementById('page-content').style.display = 'block';
});

