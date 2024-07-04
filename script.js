document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.section-box');
  const buttons = document.querySelectorAll('.nav-button');
  const header = document.querySelector('header');

  // Initially show the home section
  sections[0].classList.remove('hidden');
  buttons[0].classList.add('bg-blue-700'); // Highlight the Home button initially

  // Background images array
  const bgImages = [
    './images/banner-img1.webp',
    './images/banner-img2.jpg',
    './images/banner-img3.jpg',
    './images/banner-img4.jpg',
    './images/banner-img5.jpg'
    
  ];

  let currentBgIndex = 0;
  const intervalTime = 5000; // Change background image every 5 seconds (5000 milliseconds)

  function changeBackground() {
    header.style.backgroundImage = `url('${bgImages[currentBgIndex]}')`;
    currentBgIndex = (currentBgIndex + 1) % bgImages.length;
  }

  // Change background initially
  changeBackground();

  // Automatically change background at intervals
  setInterval(changeBackground, intervalTime);

  // Event listener for button clicks
  buttons.forEach((button, index) => {
    button.addEventListener('click', function() {
      // Hide all sections
      sections.forEach(section => section.classList.add('hidden'));
      // Remove active class from all buttons
      buttons.forEach(btn => btn.classList.remove('bg-blue-700'));
      // Show the clicked section
      sections[index].classList.remove('hidden');
      // Add active class to the clicked button
      button.classList.toggle('bg-blue-700');
    });
  });
});
