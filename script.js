const scriptURL = 'https://script.google.com/macros/s/AKfycbwVh04h3Y6-pPRGO1wLsvMVt6e8x7EorehOduzOsOT2t9F8Rzpc5G7LaD6BH0LE3CNk/exec'
const form = document.forms['submit-to-google-sheet']
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');

form.addEventListener('submit', e => {
    e.preventDefault()
    // ketika tombol submit di klik
    // tampilkan tombol loading hilangkan tombol kirim
    btnLoading.classList.toggle('d-none')
    btnKirim.classList.toggle('d-none')
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        btnLoading.classList.toggle('d-none')
        btnKirim.classList.toggle('d-none')
        Swal.fire({
            title: 'Berhasil 😁',
            text: 'Silahkan dilanjutkan',
            icon: 'success',
            confirmButtonText: 'lanjutkan'
        })

        form.reset()

        console.log('Success!', response)
        window.location.replace("berhasil.html");
    })
    .catch(error => console.error('Error!', error.message))
})