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


/*
* Dom Selection part 2
*/

// document.querySelector() -> menghasilkan elemen
const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)')
li2.style.backgroundColor = 'orange';

// document.querySelectorAll -> menghasilkan nodeList
// sama seperti getElementsByClassName
const pAll = document.querySelectorAll('p');
// pAll[1].style.backgroundColor = 'lightblue';
// jika ingin semua:
for (let i = 0; i < pAll.length; i++) {
    pAll[i].style.backgroundColor = 'red';
}


/*
* Mengubah Node Root
*/
const sectionB = document.getElementById('b');
const paragraf4 = sectionB.querySelector('p');
paragraf4.style.backgroundColor = 'cyan';