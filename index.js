/****************************************************************************************************
* Burger Menu
* Included in the script tag of individual pages due to scoping issues

const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');
burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
})
****************************************************************************************************/

/****************************************************************************************************
* Practices Menu
****************************************************************************************************/

const tabs = document.querySelectorAll('.menu-list li');
const tabContentBoxes = document.querySelectorAll('#practices-content > div');

//Iterate through every tab
tabs.forEach((tab) => {
    //Listen for a click on a tab
    tab.addEventListener('click', () => {
        //If a click is registered, deactivate all tabs
        tabs.forEach(item => item.classList.remove('has-background-light'));
        //Activate the tab that's been clicked
        tab.classList.add('has-background-light');
        //Swap out content depending on active tag
        const target = tab.dataset.target;

        tabContentBoxes.forEach(box => {
            if (box.getAttribute('id') === target) {
                box.classList.remove('is-hidden');
            } else {
                box.classList.add('is-hidden');
            }
        })

    });
});

/****************************************************************************************************
* Dynamic Footer
****************************************************************************************************/

//index footer
try {
const indexFooter = document.querySelector(".main-footer")

    indexFooter.innerHTML = `

    
        <div class="columns is-centered">
            <div class="column is-3">
                <a href="index.html">
                    <img src="Assets\\Logos\\CR\\Full\\White.png" style="margin:0; padding:0; width:250px;">
                </a>
            </div>
        </div>
        <div class="columns is-variable is-centered">

            <div class="column is-3 is-responsive center">
                    <p class="my-2 mx-6 has-text-weight-light" style="text-align: center;">PRACTICES</p>
                    <p class="my-2 mx-6 has-text-weight-light" style="text-align: center;">ABOUT</p>
                    <p class="my-2 mx-6 has-text-weight-light" style="text-align: center;">CULTURE</p>
                    <p class="my-2 mx-6 has-text-weight-light" style="text-align: center;">CONTACT</p>
            </div>
        </div>
        
        <hr class="m-0 mb-3 p-0" style="margin-left: 20% !important; width: 60%;">
        
        <p class="has-text-weight-light center">&copy; 2022 COHEN ROTHSCHILDS PLLC</p>

`;
} catch (e) {
}

//Other footers
const footers = document.querySelectorAll(".other-page-footer");  
    footers[0].innerHTML = `
    
        <div class="columns is-centered">
            <div class="column is-3">
                <a href="index.html">
                    <img src="..\\Assets\\Logos\\CR\\Full\\White.png" style="display:block; margin:auto; padding:0; width:250px;">
                </a>
            </div>
        </div>

        <div class="columns is-variable is-centered">
            <div class="column is-3 is-responsive center">
                    <p class="my-2 mx-6 has-text-weight-light" style="text-align: center;">PRACTICES</p>
                    <p class="my-2 mx-6 has-text-weight-light" style="text-align: center;">ABOUT</p>
                    <p class="my-2 mx-6 has-text-weight-light" style="text-align: center;">CULTURE</p>
                    <p class="my-2 mx-6 has-text-weight-light" style="text-align: center;">CONTACT</p>
            </div>
        </div>
            
        <hr class="m-0 mb-3 p-0" style="margin-left: 20% !important; width: 60%;">
        
        <p class="has-text-weight-light center">&copy; 2022 COHEN ROTHSCHILDS PLLC</p>
    
    `;