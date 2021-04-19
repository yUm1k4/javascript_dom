function getPilihanComputer() {
    const comp = Math.random(); // 0.31231231231231

    if (comp < 0.34) return 'gajah';
    if (comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}

// aturan/rules
function getHasil(comp, player) {
    if (player == comp) return 'SERI!';
    if (player == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    if (player == 'orang') return (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    if (player == 'semut') return (comp == 'orang') ? 'KALAH!' : 'MENANG!';
}

/*
* Atur Event listenernya
*/

/*
* Pengulangan Lama start
*/
// // seleksi tombolnya
// // gajah
// const pGajah = document.querySelector('.gajah')
// pGajah.addEventListener('click', function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer)
//     // console.log('player: ' + pilihanPlayer);
//     // console.log('comp: ' + pilihanComputer);
//     // console.log('hasil: ' + hasil);

//     const imgComputer = document.querySelector('.img-komputer')
//     // --> ganti attribute src nya
//     // lalu sesuaikan dgn pilihan computer
//     // karena kebetulan nama file nya sesuai
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png')

//     const info = document.querySelector('.info')
//     info.innerHTML = hasil
// })

// // orang
// const pOrang = document.querySelector('.orang')
// pOrang.addEventListener('click', function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer)

//     const imgComputer = document.querySelector('.img-komputer')
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png')

//     const info = document.querySelector('.info')
//     info.innerHTML = hasil
// })

// // semut
// const pSemut = document.querySelector('.semut')
// pSemut.addEventListener('click', function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer)

//     const imgComputer = document.querySelector('.img-komputer')
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png')

//     const info = document.querySelector('.info')
//     info.innerHTML = hasil
// })

/*
* Pengulangan Lama end
*/

/*
* Pengulangan baru start
*/
// menambah fungsi putar gambar
function putarGambar() {
    const imgComputer = document.querySelector('.img-komputer')
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;

    // membuat waktu awal pada saat di klik
    const waktuMulai = new Date().getTime();

    // jalankan fungsi berikut setiap intervalnya
    setInterval(function () {
        // jika sudah 1 detik
        if (new Date().getTime() - waktuMulai > 1000) {
            // maka hentikan
            clearInterval;
            return
        }

        // acak gambarnya
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png')
        // jika i sudah sampai max length (ada 3 gambar)
        // kembali ke angka 0 jadi mengulang terus gambarnya
        if (i == gambar.length) {
            i = 0
        }
    }, 100)
}


const pilihan = document.querySelectorAll('li img')
// lalu looping tiap img
pilihan.forEach(function (pil) {
    // mengambil gambar yg di klik saja
    pil.addEventListener('click', function () {
        const pilihanComputer = getPilihanComputer()
        const pilihanPlayer = pil.className
        const hasil = getHasil(pilihanComputer, pilihanPlayer)

        // putar gambar selama satu detik
        putarGambar()
    
        // tunggu 1 detik baru jalankan function berikut
        setTimeout(function () {
            const imgComputer = document.querySelector('.img-komputer')
            imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png')
        
            const info = document.querySelector('.info')
            info.innerHTML = hasil
        }, 1000)
    })
})
/*
* Pengulangan baruend
*/