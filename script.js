const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
if (menuBtn && nav) menuBtn.addEventListener('click', () => nav.classList.toggle('open'));

const searchForm = document.getElementById('searchForm');
if (searchForm) searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  document.getElementById('properties').scrollIntoView({behavior:'smooth'});
  alert('Showing available properties. You can browse the listings below.');
});

const loadMore = document.getElementById('loadMore');
if (loadMore) loadMore.addEventListener('click', () => {
  alert('You have reached the end of the sample property listings.');
});

const newsletter = document.getElementById('newsletter');
if (newsletter) newsletter.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Thank you for subscribing!');
  newsletter.reset();
});

const inquiryForm = document.getElementById('inquiryForm');
if (inquiryForm) inquiryForm.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Thank you! Your inquiry has been recorded in this demo.');
  inquiryForm.reset();
});
