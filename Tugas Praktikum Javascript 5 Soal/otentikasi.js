function login() {
    let user = document.getElementById('username').value
    let pass = document.getElementById('password').value
    if (user == 'salma' && pass == 'integrity') {
        alert('Anda Berhasil Login')
        window.location = "welcome.html"
    } else if (user == '' && pass == '') {
        alert('Username & Password Tidak Boleh Kosong')
    } else if (user == 'salma' && pass != 'integrity') {
        alert('Password yang anda masukan salah !!')
    } else if (user != 'salma' && pass == 'integrity') {
        alert('Username yang anda masukan salah !!')
    } else if (user != 'salma' && pass != 'integrity') {
        alert('Username & Password yang anda masukan salah !!')
    }
}
