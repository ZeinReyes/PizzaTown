document.addEventListener('DOMContentLoaded', function () {
    let pizzaNav = document.getElementById('pizza-nav');
    let pastaNav = document.getElementById('pasta-nav');
    let sidesNav = document.getElementById('side-nav');
    let drinkNav = document.getElementById('drink-nav');
  
    let pizzaContainer = document.getElementById('pizza-container');
    let pastaContainer = document.getElementById('pasta-container');
    let sidesContainer = document.getElementById('sides-container');
    let drinkContainer = document.getElementById('drinks-container');
  
    function hideAllContainers() {
      pizzaContainer.classList.remove('active');
      pastaContainer.classList.remove('active');
      sidesContainer.classList.remove('active');
      drinkContainer.classList.remove('active');
    }
  
    // Set the initial state
    pizzaContainer.classList.add('active');
    pizzaNav.classList.add('active');
  
    pizzaNav.addEventListener('click', function () {
      hideAllContainers();
      pizzaContainer.classList.add('active');
      pizzaNav.classList.add('active');
    });
  
    pastaNav.addEventListener('click', function () {
      hideAllContainers();
      pastaContainer.classList.add('active');
      pastaNav.classList.add('active');
    });
  
    sidesNav.addEventListener('click', function () {
      hideAllContainers();
      sidesContainer.classList.add('active');
      sidesNav.classList.add('active');
    });
  
    drinkNav.addEventListener('click', function () {
      hideAllContainers();
      drinkContainer.classList.add('active');
      drinkNav.classList.add('active');
    });
    
    // Scroll to the clicked section smoothly
    document.querySelectorAll('.menu-nav a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });
  