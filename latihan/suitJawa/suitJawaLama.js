var tanya = true;
while (tanya) {
    // menangkap pilihan player (gajah, semut, atau orang)
    var player = prompt('pilih: gajah, semut, orang');

    // menangkap pilihan komputer
    // membangkitkan bilangan random
    var komputer = Math.random(); // 0.31231231231231

    if (komputer < 0.34) {
        komputer = 'gajah';
    } else if (komputer >= 0.34 && komputer < 0.67) {
        komputer = 'orang';
    } else {
        komputer = 'semut';
    }

    // menentukan rules/aturan
    var hasil = '';
    if (player == komputer) {
        hasil = 'SERI';
    } else if (player == 'gajah') {
        // if (komputer == 'orang') {
        //     hasil = 'MENANG!';
        // } else {
        //     hasil = 'KALAH!';
        // }
        hasil = (komputer == 'orang') ? 'MENANG!' : 'KALAH';
    } else if (player == 'orang') {
        // if (komputer == 'gajah') {
        //     hasil == 'KALAH!';
        // } else {
        //     hasil == 'MENANG!';
        // }
        hasil = (komputer == 'gajah') ? 'KALAH!' : 'MENANG';
    } else if (player == 'semut') {
        hasil = (komputer == 'orang') ? 'KALAH!' : 'MENANG';
    } else {
        hasil = 'Memasukkan pilihan yang salah!';
    }


    // tampilkan hasilnya
    alert('Kamu memilih: ' + player + ' dan Komputer memilih: ' + komputer + '\n Maka hasilnya kamu ' + hasil);
    
    tanya = confirm('lagi?');
}

alert('Terimakasih telah bermain ^_^');