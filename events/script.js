// const p3 = document.querySelector('.p3')

// function ubahWarna() {
//     p3.style.backgroundColor = 'lightblue'
// }

// // event handler -> onclick
// const p2 = document.querySelector('.p2')
// p2.onclick = ubahWarna

// // event listener -> addEventListener
// // menambah list item baru saat paragraf 4 di klik
// const p4 = document.querySelector('section#b p')
// p4.addEventListener('click', function () {
    //     // panggil parent nya dulu
    //     const ul = document.querySelector('section#b ul')
//     // buat element li
//     const liBaru = document.createElement('li')
//     // buat teks untuk elemen li
//     const teksLiBaru = document.createTextNode('item baru')
//     // gabungkan elemen li dengan teks nya
//     liBaru.appendChild(teksLiBaru)
//     ul.appendChild(liBaru)
// })

/*
* Perbedaan event handler dengan event lister
Event handler = akan menimpa perintah yg di atasnya
Event listener = akan menggabungkan perintah sebelumnya
*/
const p3 = document.querySelector('.p3')
p3.onclick = function () {
    p3.style.backgroundColor = 'lightblue'
}

p3.onclick = function () {
    p3.style.color = 'red'
}

const p4 = document.querySelector('section#b p')
p4.addEventListener('dblclick', function () {
    p4.style.backgroundColor = 'lightblue'
})

p4.addEventListener('dblclick', function () {
    p4.style.color = 'red'
})

