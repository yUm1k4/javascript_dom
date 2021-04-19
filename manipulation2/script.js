// Manipulasi Node
// menambahkan elemen baru, atau menghapus elemen, dan bahkan mengganti sebuah element

// misal menambahkan paragraf baru di bawah paragraf 3:
// buat element baru -> document.createElement()
const pBaru = document.createElement('p')
// membuat tulisan yg nanti dimasukkan ke dalam p -> ocument.createTextNode()
const teksPBaru = document.createTextNode('Paragraf Baru')
// tambahkan tulisan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru)
// simpan pBaru di akhir section a menggunakan appendChild()
const sectionA = document.getElementById('a')
sectionA.appendChild(pBaru)

// tes menambah list baru setelah item 1, sebelum item 2 -> node.appendChild()
const liBaru = document.createElement('li')
const teksLiBaru = document.createTextNode('Item Baru')
liBaru.appendChild(teksLiBaru)

// lalu menangkap parent nya yaitu ul, dan elemen setelahnya yaitu <li>item 2</li>
// ini parent
const ul = document.querySelector('section#b ul')
// ini elemen berikutnya
const li2 = ul.querySelector('li:nth-child(2)')

// di dalam ul simpan sebelum elemen li2, tambahkan liBaru -> node.insertBefore()
ul.insertBefore(liBaru, li2)

// menghapus elemen -> parentNode.removeChild()
const link = document.getElementsByTagName('a')[0]
sectionA.removeChild(link)

// mengganti elemen -> parentNode.replaceChild()
// tangkap parent nya dulu:
const sectionB = document.getElementById('b')
// tangkap elemen yg mau di replace:
const p4 = sectionB.querySelector('p')

// buat elemen dan isi nya
const h2Baru = document.createElement('h2')
const teksH2Baru = document.createTextNode('Judul Baru!')
h2Baru.appendChild(teksH2Baru)

// replace
sectionB.replaceChild(h2Baru, p4)

pBaru.style.backgroundColor = 'lightgreen'
liBaru.style.backgroundColor = 'lightgreen'
h2Baru.style.backgroundColor = 'lightgreen'