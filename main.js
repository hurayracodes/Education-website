// Change navbar color on scroll
window.addEventListener('scroll', function () {
  const nav = document.querySelector('nav');
  if (window.scrollY > 0) {
    nav.classList.add('window-scroll');
  } else {
    nav.classList.remove('window-scroll');
  }
});

// Function to change the icon between plus and minus
const changeIcon = (faq) => {
  const icon = faq.querySelector('.faq__icon i');
  if (faq.classList.contains('open')) {
    icon.classList.remove('fa-angle-up');
    icon.classList.add('fa-angle-down');
  }
  // else {
  //   icon.classList.remove('fa-angle-up');
  //   icon.classList.add('fa-angle-down');
  // }
};
// <i class="fa-solid fa-angle-up"></i>

// Show and hide question and answer
const faqs = document.querySelectorAll('.faq');
faqs.forEach((faq) => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');
    changeIcon(faq);
  });
});

// copyright update is here
// Get the current year
const currentYear = new Date().getFullYear();

// Update the copyright year in the HTML element with id 'copyright'
document.querySelector('.update').textContent = `© ${currentYear}`;

// show and hide the mobile menu
const menu = document.querySelector('.nav__menu');
const openBtn = document.querySelector('.open-menu-btn');
const closeBtn = document.querySelector('.close-menu-btn');

openBtn.addEventListener('click', () => {
menu.style.display = 'block';
openBtn.style.display = 'none';
closeBtn.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
menu.style.display = 'none';
closeBtn.style.display = 'none';
openBtn.style.display = 'block';
})


// here is my social team social icons veiw
const teamMember = document.querySelector('.team_member');
const socialIcons = document.querySelector('.team_members-social');

