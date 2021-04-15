/*
* Dom Selection
*/

// document.getElementById() -> element
const judul = document.getElementById('judul');

judul.style.color = 'blue';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Zainudin Abdullah';

// document.getElementsByTagName() -> HTMLCollections
const p = document.getElementsByTagName('p');
// mewarnai backgroundcolor tag p yang indexnya 2
p[2].style.backgroundColor = 'lightblue';

// document.getElementsByClassName() -> HTMLCollections
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'Ini diubah dari js';