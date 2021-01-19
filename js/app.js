/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * Dependencies: None
 * JS Version: ES2015/ES6
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
*/
// defining global variable for  sections 
const sections = document.querySelectorAll('section');

//storing all the nav bar list to this variable
const menuItems = document.getElementById('navbar__list');

// creating nav bar 
function createNavgaitonItemfunction () {
    for (section of sections) {
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
createNavgaitonItemfunction(); 
    // Add class 'active' to section when near top of viewport
    // Scroll to anchor ID using scrollTO event

function linkHighlight(){
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        for (const i = $sections.length-1; i>=0; i--) {
            const currectionSection = $sections[i];
            const sectionTop = getOffset(currectionSection.top);

            if (scrollPosition>=sectionTop -250) {
            const menuItems = sectionIdnavigated[id];


    }

    
    }
}


    /**
     * End Main Functions
     * Begin Events
     *
    */
    // Build menu 
    // Scroll to section on link click
    // Set sections as active




// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
