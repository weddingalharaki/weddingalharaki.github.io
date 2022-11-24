var form = document.getElementById('sheetdb-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(form.action, {
    method: 'POST',
    body: new FormData(document.getElementById('sheetdb-form')),
  })
    .then((response) => response.json())
    .then((html) => {
      // you can put any JS code here
      window.open('terkirim.html', '');
    });
});

// Reset Form
const btn = document.getElementById('btn-hapus');

btn.addEventListener('click', function handleClick(event) {
  // 👇️ if you are submitting a form
  event.preventDefault();

  const inputs = document.querySelectorAll('#nama, #nomor, #email, #pesan');

  inputs.forEach((input) => {
    input.value = '';
  });
});
