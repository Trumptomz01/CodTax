const copyButtons = document.querySelectorAll('.copy-btn');
console.log(copyButtons)

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
});
window.addEventListener('load', () => {
  document.getElementById('loader').style.display = 'none';
  document.getElementById('page-content').style.display = 'block';
});