const tUbahWarna = document.getElementById('tUbahWarna')
const body = document.getElementsByTagName('body')[0]

tUbahWarna.onclick = function () {
    // document.body.setAttribute('class', 'biru-muda')
    document.body.classList.toggle('biru-muda')
}

/*
* Menambah tombol untukmengubah warna acak
*/
const tAcakWarna = document.createElement('button')
const teksTombol = document.createTextNode('Acak Warna')

tAcakWarna.appendChild(teksTombol)
tAcakWarna.setAttribute('type', 'button')

tUbahWarna.after(tAcakWarna)
tAcakWarna.addEventListener('click', function () {
    // mengambil warna random menggunakan Math
    // dengan rumus * 255 + 1
    // nanti akan menghasilkan nilai dari 1 s/d 255
    // lalu koma(,)nya dihilangkan
    const r = Math.round(Math.random() * 255 + 1)
    const g = Math.round(Math.random() * 255 + 1)
    const b = Math.round(Math.random() * 255 + 1)
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
})


/*
* Mengubah warna dengan slider
*/

// ambil elementnya
const sMerah = document.querySelector('input[name=sMerah]')
// event saat berubah (input)
sMerah.addEventListener('input', function () {
    // ambil elemen input valuenya
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')'
})

const sHijau = document.querySelector('input[name=sHijau]')
sHijau.addEventListener('input', function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')'
})

const sBiru = document.querySelector('input[name=sBiru]')
sBiru.addEventListener('input', function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')'
})


/*
* Mengubah warna tergantung cursor
*/
// ketika mouse bergerak di dalam body
document.body.addEventListener('mousemove', function (e) {
    // cari posisi mouse sumbu x dan y
    // console.log(e.clientX);

    // ukuran lebar browser
    // console.log(window.innerWidth);

    // mendapatkan angka 1 s/d 255 saat mouse bergerak
    const xPos = Math.round((e.clientX / window.innerWidth) * 255)
    const yPos = Math.round((e.clientY / window.innerHeight) * 255)
    document.body.style.backgroundColor = 'rgb(' + xPos + ', ' + yPos + ', 0)'
})



