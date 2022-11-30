/* MObile Responsive  */
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})



/* Changing the background of the clicked year */

function changeBackground(){
   document.querySelector('#y2075').style.backgroundColor = 'blue';
   document.querySelector('#y2075').style.color = 'white';
}