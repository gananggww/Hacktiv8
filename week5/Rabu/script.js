var mainForm = document.getElementById("main-form");
mainForm.addEventListener("submit", function (event) {
  event.preventDefault();
  if (document.getElementById("username").value === "") {
    alert("Username Harus di Isi!");
    return false;
  }
  else if (document.getElementById("password").value === "") {
    alert("Password Tidak Boleh Kosong!");
    return false;
  }
  else if (document.getElementById("confirm_password").value == "") {
    alert("Konfirmasi Password Tidak Boleh Kosong!");
    return false;
  }
  else if (document.getElementById("email").value === "") {
    alert("Email Harus di Isi!");
    return false;
  }
  else if (document.getElementById("confirm_email").value === "") {
    alert("Konfirmasi Email Tidak Boleh Kosong!");
    return false;
  }
  else if (document.getElementById("password").value != document.getElementById("confirm_password").value) {
    alert("Password dan Konfirmasi Password Harus di Isi Sama.");
    return false;
  }
  else if (document.getElementById("email").value != document.getElementById("confirm_email").value) {
    alert("Email dan Konfirmasi Email Harus di Isi Sama.");
    return false;
  }
  else if (document.getElementById("username").value.length < 5) {
    alert("Jumlah Karakter Username Minimal 5!");
    return false;
  }
  else if (document.getElementById("password").value.length < 6) {
    alert("Jumlah Karakter Password Minimal 6!");
    return false;
  }else{
    document.getElementById("main-form").innerHTML = "Selamat, registrasi anda telah berhasil!";
    document.getElementById("main-form").innerHTML += "<br/>" + "<br/>" + "Kembali ke halaman " + "<a href='form-validate.html'>sebelumnya</a>";
    return true;
  }
});


















// var namaForm = document.getElementById("main-form");
// var anakForm = namaForm.children;
// var anak2Form = anakForm[0].children;
// anak2Form[0].innerHTML = "Regestration Form";
// anak2Form[1].innerHTML = "Username : ";
// anak2Form[3].innerHTML = "Password : ";
// anak2Form[5].innerHTML = "Confirm Password : ";
// anak2Form[7].innerHTML = "E-mail : ";
// anak2Form[9].innerHTML = "Confirm E-mail : ";
//
// var inputUser = document.getElementById("username").value;
// var inputPass = document.getElementById("pass").value;
// var inputConPass = document.getElementById("conPass").value;
// var inputEmail = document.getElementById("email").value;
// var inputConEmail = document.getElementById("conEmail").value;
//
// namaForm.addEventListener('submit', function(){
// if((inputUser && inputPass && inputConPass && inputEmail && inputConEmail) != ""){
//     if(inputUser.length > 5){
//       if(inputPass == inputConPass){
//         if(inputEmail == inputConEmail){
//           alert("Berhasil");
//         }
//         else{
//           alert("Maaf, Email tidak cocok")
//         }
//       }
//       else {
//         alert("Maaf, Password tidak cocok")
//       }
//     }
//     else {
//       alert("username harus melibih 5 huruf");
//     }
// }
// else{
//    alert("Tidak Bole ada yang kosong");
// }
// });
//
