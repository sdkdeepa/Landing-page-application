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

// Add class 'active' to section when near top of viewport : reference : https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/
const isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};


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
// Add class 'active' to section when near top of viewport

function linkHighlight() {

    for (section of sections) {
        // finds the nav link corresponds to the current section
         const navLink = document.querySelector(`a[href="#${section.getAttribute("id")}"]`);
        // if statements to check the sections and nav link is active and applies css styles
        if (isInViewport(section)) {
                section.classList.add("your-active-class");
                navLink.classList.add("menu__link__active");
            
            } else { //checks if the else statement here
                section.classList.remove("your-active-class");
                navLink.classList.remove("menu__link__active");
            }

        }

    }


// calling the create nav items function
createNavgaitonItemfunction();

// highilighting the scroll action by using addEventListner
window.addEventListener('scroll',linkHighlight);