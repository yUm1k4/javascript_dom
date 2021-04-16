// Manipulasi Element

// const judul = document.getElementById('judul')

// // manipulasi isinya
// judul.innerHTML = '<i>Zainudin Abdullah</i>'

// const sectionA = document.querySelector('#a')
// sectionA.innerHTML = '<div><p>paragraf1</p></div>'


// // menipulasi css
// const judul = document.querySelector('#judul')
// judul.style.color = 'lightblue'
// judul.style.backgroundColor = 'salmon'


// // manipulasi attribut
// // --> 1. menambah attribut
// const judul = document.getElementsByTagName('h1')[0]
// judul.setAttribute('name', 'zain')

// const a = document.querySelector('section#a a')
// a.setAttribute('id', 'link')

// // --> 2. mencari isi dari attribut
// a.getAttribute('href') // hasil: "http://instagram.com/sandhikagalih"

// judul.getAttribute('id') // hasil: "judul"

// // ---> 3. menghapus attribut
// a.removeAttribute('href')


/*
* Memanipulasi Class
*/

// menambahkan class baru -> element.classList.add()
const p2 = document.querySelector('.p2')
p2.classList.add('label')

// menghapus class -> element.classList.remove()
p2.classList.remove('label')

// menambahkan class jika tidak ada, menghapus class jika sudah ada -> element.classList.toggle()
// jika hasil true maka class ditambahkan
// jika hasil false maka class dihapus
p2.classList.toggle('label')

// mengetahui urutan nama class pada elemen -> element.classList.item()
p2.classList.item(0) // hasil: p2
p2.classList.item(1) // hasil: label

// mengecek ada atau tidak suatu class
// akan menghasilkan true / false
p2.classList.contains('label') // hasil: true
p2.classList.contains('judul') // hasil: false

// mengganti class dengan class yg baru element.classList.replace()
p2.classList.replace('p2', 'sub-judul') // mereplace class p2 menjadi sub-judul


