const dropdownButtons = document.querySelectorAll('.dropdown-btn');

dropdownButtons.forEach(btn => {
  const submenu = btn.nextElementSibling;

  // kliknięcie otwiera / zamyka submenu
  btn.addEventListener('click', (e) => {
    e.stopPropagation(); // nie zamyka samego siebie
    submenu.classList.toggle('open');
  });
});

// zamykanie menu po kliknięciu gdziekolwiek poza dropdown
document.addEventListener('click', () => {
  document.querySelectorAll('.submenu').forEach(sub => {
    sub.classList.remove('open');
  });
});