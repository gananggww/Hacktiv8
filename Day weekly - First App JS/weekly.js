//SEBELUM MENJALANKAN PROGRAM
//RUN PROGRAM MENGGUNAKAN CLIENTBASE seperti JSBIN.com
//DAN TIDAK DAPAT MENGGUNAKAN prompt maupun alert di dalam pengulangan FOR

//-------------Pseudocode
/*
1. Masukan nama pada variabel namaAnda sebagai tanda memulainya permaianan dan tidak boleh kosong
2. Jika nama tidak kosong maka tampilkan "selamat namaAnda Mulai"
3. Tampilkan cerita "pada suatu hari namaAnda tersesat dan..." "...menemukan 3 persimpangan"
4. membuat variabel objek yang berisi binatang, ability, level.
    --------1--------
    binatang: Srigala
    ability: Cakar
    level: Mematikan
    --------2--------
    binatang:Harimau
    ability:Cakar
    level:Mematikan
    --------3-------
    binatang: Tikus Tanah
    ability: Cakar
    level:"dapat menghindar
    --------4-------
    binatang: Serangga
    ability: Sengat
    jenis:dapat menghindar
    --------5-------
    binatang: Kupu-kupu
    ability: Indah
    level: Jinak
    --------6-------
    binatang: Bunga
    ability: Indah
    level: Jinak
5. masukan objek satu dan dua ke dalam tipe data array yaitu arrayKanan
6. masukan objek tiga dan empat ke dalam tipe data array yaitu arrayKLurus
7. masukan objek lima dan enam ke dalam tipe data array yaitu arrayKiri
8. masukan panjang arrayKanan menggunakan .length ke panjangKanan
9. masukan panjang arrayLurus menggunakan .length ke panjangLurus
10. masukan panjang arrayKiri menggunakan .length ke panjangKiri
11. Tentukan variabel jalan jika sama dengan "Kanan" maka lakukan pengulangan sepanjang tipe data arrayKanan
   dan tampilkan "Anda tidak beruntung, anda telah mati diserang (arrayKanan dan property ability)"
   dan tampilkan "Sungguh serangan yang sangat (arrayKanan dan property level) "
   dan tampilkan "(arrayKanan dan property binatang) Sungguh ganas"
12. Tentukan variabel jalan jika sama dengan "Lurus" maka lakukan pengulangan sepanjang tipe data arrayLurus
   dan jika masukan dari variabel lawan adalah "iya", maka tampilkan "jika x = 5, maka berapakah jika x + 4 = ?" dan masukan jawaban pada quest
   jika quest = (benar) maka
   tampilkan "(arrayLurus dengan property binatang) menyerang"
   dan tampilkan "(arrayLurus dgn propert ability)an terus menerus"
   dan tampilkan "Selamat anda berhasil (arrayLurus dgn property level) dari semua serangan"
   jika tidak maka tampilkan "Dan anda mati! GAME OVER")
13. Tentukan Variabel jalan jika sama dengan "Kiri" maka lakukan pengulangan sepanjang tipedata arrayKiri
    dan tampilkan "selamat datang di taman (arrayKiri dengan property binatang)"
    dan tampilkan "Anda beruntung (namaAnda), Lanjutkan Perjalanan!"

*/

var Object1 = {
    binatang: "Srigala",
    ability: "Cakar",
    level:"Mematikan"
    }
var Object2 = {
    binatang: "Harimau",
    ability: "Cakar",
    level:"Mematikan"
    }

var Object3 = {
    binatang: "Tikus Tanah",
    ability: "Cakar",
    level:"Dapat menghindar"
    }

var Object4 = {
    binatang: "Serangga",
    ability: "Sengat",
    jenis:"Dapat menghindar"
}

var Object5 = {
    binatang: "Kupu-kupu",
    ability: "Indah",
    level:"Jinak"
}

var Object6 = {
    binatang: "Bunga",
    ability: "Indah",
    level: "Jinak"
}
function cerita (){
  var arrayKanan = [Object1, Object2];
  var arrayLurus = [Object3, Object4];
  var arrayKiri = [Object5, Object6];

  var panjangKanan = arrayKanan.length;
  var panjangLurus = arrayLurus.length;
  var panjangKiri = arrayKiri.length;

  var namaAnda = prompt("Isi nama sebelum mengikuti cerita interaktif :)");
  var namaPacar = "siCantikHacktiv8";

  var jalanKanan = "Kanan";
  var jalanLurus = "Lurus"
  var jalanKiri = "Kiri";

  if(namaAnda === ""){
    alert("Tolong isi nama sebelum memulai cerita interaktif");
    console.log("Tolong isi nama sebelum memulai cerita interaktif");
    return cerita();
  }
  else{
     console.log("selamat " +namaAnda+ " Mulai");
     console.log("Pada suatu hari, "+namaAnda+" dan " +namaPacar+  " yang selalu menjalin hubungan sangat indah. Pada sebuah ketika saat mereka liburan mereka tersesat dalam sebuah pulau yang masih sangat lebat. Saat tersesat mereka mencoba mencari jalan keluar, pada saat berjalan mereka menemukan tiga persimpangan");
     alert("selamat " +namaAnda+ " Mulai");
     alert("Pada suatu hari, "+namaAnda+" dan " +namaPacar+  " yang selalu menjalin hubungan sangat indah. Pada sebuah ketika saat mereka liburan mereka tersesat dalam sebuah pulau yang masih sangat lebat. Saat tersesat mereka mencoba mencari jalan keluar, pada saat berjalan mereka menemukan tiga persimpangan");

  var jalan = prompt("Pilih Jalanmu! Kanan, Kiri atau Lurus ?");

      if(jalan==jalanKanan){
          for(i=0; i<panjangKanan; i++){
            console.log("Anda tidak beruntung, anda telah mati diserang "  +arrayKanan[i].ability );
            //alert("Anda tidak beruntung, anda telah mati diserang "  +arrayKanan[i].ability);

            console.log("sungguh serangan yang sangat "+arrayKanan[i].level);
            //alert("sungguh serangan yang sangat "+arrayKanan[i].level);

            console.log(arrayKanan[i].binatang+" Sungguh mematikan");
            //alert(arrayKanan[i].binatang+" Sungguh mematikan");
          }

      }
      else if (jalan == jalanLurus){
          // console.log("Anda kurang beruntung, anda akan diserang "  +arrayLurus[i].binatang+ " tapi " +arrayLurus[i].level) ;
          // alert("Anda kurang beruntung, anda akan diserang "  +arrayLurus[i].binatang+ " tapi " +arrayLurus[i].level) ;
          var lawan = prompt("Anda diserang, Apakah anda ingin perlakukan perlawanan? (iya/tidak)");
            if(lawan == "iya"){
              console.log("lawan dengan menjawab pertanyaan berikut");
              alert("lawan dengan menjawab pertanyaan berikut");
              var quest = prompt("jika x = 5, maka berapakah jika x + 4 = ?");

              for(i=0; i<panjangLurus; i++){

                if(quest == 9 ){

                  console.log(arrayLurus[i].binatang+ "menyerang..!");
                  //alert(arrayLurus[i].binatang+ "menyerang ..!");

                  console.log("Banyak "+arrayLurus[i].ability+ "an terus menerus");
                  //alert("Banyak "+arrayLurus[i].ability+ "an terus menerus");

                  console.log("Selamat anda "+arrayLurus[i].level+" dari semua serangan");
                  //alert("Selamat anda "+arrayLurus[i].level+" dari semua serangan");

                  console.log("SELAMAT "+namaAnda+" Anda berhasil menemukan jalan keluar");
                  //alert("SELAMAT "+namaAnda+" Anda berhasil menemukan jalan keluar");
                }
                else{
                  console.log("Sayang sekali anda tidak dapat berhasil mengalahkan "+arrayLurus[i].binatang );
                  //alert("Sayang sekali anda tidak dapat berhasil mengalahkan "+arrayLurus[i].binatang);

                  console.log("Dan anda mati! GAME OVER");
                  //alert("Dan anda mati! GAME OVER");
                }
              }
            }
            else{
              console.log("anda tidak melakukan apa apa. dan anda mati! GAME OVER");
              //alert("anda tidak melakukan apa apa. dan anda mati! GAME OVER");
            }
            console.log("SELAMAT "+namaAnda+" Anda berhasil menemukan jalan keluar");
            //alert("SELAMAT "+namaAnda+" Anda berhasil menemukan jalan keluar");

      }
      else if (jalan == jalanKiri){
          console.log("Anda beruntung " +namaAnda+ ", Lanjutkan Perjalanan!");
          alert("Anda beruntung " +namaAnda+ ", Lanjutkan Perjalanan!");

        for(i=0; i<panjangKiri; i++){
          console.log("selamat datang di taman "+arrayKiri[i].binatang);
          //alert("selamat datang di taman "+arrayKiri[i].binatang);
        }
        console.log("SELAMAT "+namaAnda+" Anda berhasil menemukan jalan keluar");
        //alert("SELAMAT "+namaAnda+" Anda berhasil menemukan jalan keluar");
      }
  }
 return ;
}
cerita();
