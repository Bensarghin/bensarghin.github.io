// Select the elements
const menu = document.querySelector('.mobile-nav'); // Ensure your menu has the 'mobile-nav' class
const closeButton = document.querySelector('.close');
const openButton = document.querySelector('.open');

// Function to toggle menu visibility
const closeMenu = () => {
  if (menu) {
    menu.classList.toggle('hidden'); // Toggles the 'hidden' class
    menu.classList.toggle('flex'); // Toggles the 'flex' class
  }
};

const openMenu = () => {
    if (menu) {
      menu.classList.toggle('hidden'); // Toggles the 'hidden' class
      menu.classList.toggle('flex'); // Toggles the 'flex' class
    }
  };

// Attach the event listener to the close button
if (closeButton) {
  closeButton.addEventListener('click', closeMenu);
}

if (openButton) {
    openButton.addEventListener('click', openMenu);
}


// Select all links with hashes (e.g., #section-id)
const links = document.querySelectorAll('.tracking-wide');

// Function to handle smooth scrolling
const smoothScroll = (event) => {
  event.preventDefault(); // Prevent the default jump to the anchor

  const targetId = event.currentTarget.getAttribute('href').slice(1); // Get the target ID
  const targetSection = document.getElementById(targetId); // Select the target element

  if (targetSection) {
    targetSection.scrollIntoView({
      behavior: 'smooth', // Smooth scrolling
      block: 'start', // Align to the top of the section
    });
  }
};

// Attach the event listener to each link
links.forEach((link) => {
  link.addEventListener('click', smoothScroll);
});
