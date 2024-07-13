let search = document.querySelector('.search-box') //select the search-box


//toggle can use to display the hidden things as well as hide the display things. In here search
//bar get hide at the starting of the searching.
document.querySelector('#search-icon').onclick =() =>{ //create an arrow function
    search.classList.toggle('active')
    //this event help to call the active fuction.
    navbar.classList.remove()//stop the collapsing of search icon and menu
    //icon
}

let navbar = document.querySelector('.navbar');//create
//a variable called navbar and store the already created navbar in that

document.querySelector('#menu-icon-').onclick = ()=>{
    navbar.classList.toggle('active');//starts working the active
    //status of the navbar when clicking the navbar
    search.classList.remove('active');//stop the collapsing of
    //search bar and menu icons
}
window.onscroll =()=>{
    navbar.classList.remove('active');
    search.classList.remove('active')
}
