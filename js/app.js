/**
 * 
 * Manipulating the DOM exercise.
 * 1) Exercise programmatically builds navigation,
 * 2) Scrolls to anchors from navigation,and
 * 3) Highlights section in viewport upon scrolling.
*/

/**
 * Define Global Variables
*/
// defining global variable for  sections 
const sections = document.querySelectorAll('section');

//storing all the nav bar list to this variable
const menuItems = document.getElementById('navbar__list');

// Add class 'active' to section when near top of viewport
function isInViewport(elem) {
    const bounding = elem.getBoundingClientRect().top + window.scrollY;
    return (bounding.top >= 0);
}

// function getElementOffset(el) {
//   const rect = el.getBoundingClientRect();
//   return {
//     top: rect.top + window.pageYOffset,
//     left: rect.left + window.pageXOffset,
//   };
// }

// creating nav bar 
function createNavgaitonItemfunction() {
    for (const section of sections) {
        //getting attribute and storing in variables
        const sectionID = section.getAttribute('id');
        const sectionData = section.getAttribute('data-nav');

        //storing the list in navList
        const navList = document.createElement('li');

        // adding the nav links as list
        navList.innerHTML = `<li><a class='menu__link' href='#${sectionID}'> ${sectionData}</a> </li>`;

        //add links to the menu
        menuItems.appendChild(navList);
    }

}

function linkHighlight() {

    for (section of sections) {
         const activeLink = document.querySelector(`a[href="#${section.getAttribute("id")}"]` );
        if (isInViewport(section)) {
                section.classList.add("your-active-class");
                activeLink.classList.add("menu__link__active");

            } else {
                section.classList.remove("your-active-class");
                activeLink.classList.remove("menu__link__active");
            }

        }

    }



/**
 * End Main Functions
 * Begin Events
 *
 */

createNavgaitonItemfunction();

window.addEventListener('scroll',isInViewport);