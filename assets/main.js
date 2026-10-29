const menu = document.querySelector('header button');
const nav = document.querySelector('header nav');
if (menu && nav) {
  menu.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  }));
}
const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());

const partnerForm = document.querySelector('#partnerForm');
if (partnerForm) {
  partnerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!partnerForm.reportValidity()) return;
    const data = new FormData(partnerForm);
    const name = String(data.get('name') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const need = String(data.get('need') || '').trim();
    const location = String(data.get('location') || '').trim();
    const message = String(data.get('message') || '').trim();
    const body = [
      'Halo Meatfish, saya ingin berkonsultasi mengenai kemitraan/pasokan.',
      '',
      'Nama: ' + name,
      'Nomor WhatsApp: ' + phone,
      'Kebutuhan: ' + need,
      'Lokasi: ' + location,
      message ? 'Pesan: ' + message : ''
    ].filter(Boolean).join('\n');
    const status = document.querySelector('#formStatus');
    if (status) status.textContent = 'WhatsApp akan terbuka dengan pesan yang sudah disiapkan. Periksa kembali sebelum mengirim.';
    const whatsappUrl = 'https://wa.me/6285921327969?text=' + encodeURIComponent(body);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  });
}
