function flipCard() {
    document.getElementsByClassName('card')[0].classList.toggle('flipped');
    document.getElementById('random-number').innerText = Math.floor(Math.random() * 100) + 1;
}


//TODO code working step  by step 

//& The getElementsByClassName() method returns a collection 
//& (an array-like object) 
//& of all elements that have the class name 'card'

//^ document.getElementsByClassName('card')[0] 
//^ will refer to the first element with the class 'card'.

//~ The classList property gives you access to the list 
//~ of CSS classes on an element.

//* This means that if the element has the 'flipped' class, 
//* The toggle() method toggles a class in the list. 
//* it will be removed; if it doesn't 
//* have the 'flipped' class, it will be added.

//! The getElementById() method is used to select an 
//! HTML element by its unique id. In this case, 
//! it selects the element with the id of 'random-number'.

//? The innerText property is used to get or set the 
//? visible text content of an element. In this case, 
//? we are setting the text content of the element with id='random-number' 
//? to the value of a random number.




