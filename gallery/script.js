const container = document.querySelector('.container')
const jumbo = document.querySelector('.jumbo')
const thumbs = document.querySelectorAll('.thumb')

container.addEventListener('click', function (e) {
    // cek apakah yg diklik adalah thumb
    if (e.target.className == 'thumb') {
        // ganti src jumbo dengan target src yg di klik
        jumbo.src = e.target.src
        // saat image klik di klik, maka jumbo ditambah class fade
        jumbo.classList.add('fade')
        // kasih timeout biar class fade hilang
        setTimeout(function() {
            jumbo.classList.remove('fade')
        }, 500)

        // looping thumb
        thumbs.forEach(function (thumb) {
            // // jika ada class active di sebuah thumb
            // if (thumb.classList.contains('active'))   {
            //     // hilangkan class activenya
            //     thumb.classList.remove('active')
            // }

            // atau bisa dengan cara ini juga:
            thumb.className = 'thumb';
        })

        e.target.classList.add('active')
    }
})