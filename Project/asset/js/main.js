const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelectorAll(".nav__link");
const navMenu = document.getElementById("nav__menus");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("nav-open");
});

const buttons = document.querySelectorAll('.accordion-button');
const contents = document.querySelectorAll('.accordion-content');
const icons = document.querySelectorAll('.icon');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
    if (contents[index].style.display === 'block') {
      contents[index].style.display = 'none';
    } else {
      contents[index].style.display = 'block';
    }
  });
});


buttons.forEach((button, index) => {
  button.addEventListener('click', () => {

    button.classList.toggle('active');

    const content = contents[index];
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {

      contents.forEach((item) => {
        if (item !== content) {
          item.style.maxHeight = null;
        }
      });
      content.style.maxHeight = content.scrollHeight + 'px';
    }
    icons[index].classList.toggle('rotate');
  });
});


// Initially hide the "Individuals" and "Organizations" sections
const individualsAccordion = document.getElementById('individuals-accordion');
const organizationsAccordion = document.getElementById('organizations-accordion');
individualsAccordion.style.display = 'none';
organizationsAccordion.style.display = 'none';

// Add click event listeners to each button
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Toggle the active class on the button
    button.classList.toggle('active');

    // Toggle the display of the content for the corresponding section
    const content = contents[index];
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      // Close all other sections before opening this one
      contents.forEach((item) => {
        if (item !== content) {
          item.style.maxHeight = null;
        }
      });
      content.style.maxHeight = content.scrollHeight + 'px';
    }

    // Toggle the class for rotating the caret icon on the button
    icons[index].classList.toggle('rotate');
    
    // Show or hide "Individuals" and "Organizations" sections based on button clicks
    if (button.textContent === 'Individuals') {
      individualsAccordion.style.display = individualsAccordion.style.display === 'none' ? 'block' : 'none';
    } else if (button.textContent === 'Organizations') {
      organizationsAccordion.style.display = organizationsAccordion.style.display === 'none' ? 'block' : 'none';
    }
  });
});
