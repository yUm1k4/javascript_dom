// Event Handling
// const tutup = document.querySelector('.close')
// const card = document.querySelector('.card')


// tutup.addEventListener('click', function () {
//     card.style.display = 'none'
// })

/*
* Dom Traversal
*/
// ambil semua tombol close
const tutup = document.querySelectorAll('.close')

// // --> cara ribet
// for (let i = 0; i < tutup.length; i++) {
//     // tombol ke i di klik jalankan function
//     tutup[i].addEventListener('click', function (event) {
//         // ambil close yg ke i
//         // telusuri parent nya dgn parentElement
//         // dengan cara:
//         // tutup[i].parentElement.style.display = 'none';
//         // atau :
//         event.target.parentElement.style.display = 'none';
//     })
// }

// --> cara lebih simple
tutup.forEach(function (element) {
    element.addEventListener('click', function (e) {
        e.target.parentElement.style.display = 'none'
        // cegah aksi defaultnya
        e.preventDefault()
    })
})

