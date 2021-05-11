import '../vendor/routie.js';

function routeHandeler(){
    routie({
        '': function() {
            sectionToggler('home_page');
        },
       'detail_page/:date': function() {
            sectionToggler('detail_page');
        }
    });
}

function sectionToggler(page) {
    const allSections = document.querySelectorAll('section');
    const activeSection = document.querySelector(`#${page}`);
  
    allSections.forEach((section) => {
      section.classList.remove('active');
      section.setAttribute("aria-hidden", "true");
      section.hidden = true;
    });

    activeSection.classList.add('active');
    activeSection.setAttribute('aria-hidden', 'false');
    activeSection.hidden = false;
}

routeHandeler();
export { routeHandeler }