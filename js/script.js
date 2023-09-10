const barChangePP = document.querySelector(".change_ppersegi");
const barChangeP = document.querySelector(".change_persegi");


barChangePP.addEventListener("click", () => {

const persegiPanjang = document.querySelector('#persegiPanjang_');
const persegi_ = document.querySelector('#persegi-');

persegiPanjang.classList.toggle("show");
persegi_.classList.toggle("none");
});

// luas persegi
function hitungLuas (){
 const sisi = document.querySelector("#sisi").value;
 let luas, hasil;

 luas = sisi * sisi;
hasil = document.querySelector("#hasil_").innerHTML ="<p>Hasil</p>"+ "<h2>" +luas+ "</h2>";
}

function resetPersegiLuas() {
    let reset = document.querySelector("#hasil_").innerHTML ="<h1>😱</h1>";
}

// keliling persegi
function kelilingPersegi () {
let keliling = document.querySelector("#keliling").value;
let operator ;

operator = 4 * keliling;

let hasil = document.querySelector("#hasil__").innerHTML = "<p>Hasil</p>"+ "<h2>" +operator+ "</h2>";
}
function resetPersegiKeliling() {
    let reset = document.querySelector("#hasil__").innerHTML ="<h1>😱</h1>";
}

// Jang persegi panjangna 

// luasna
function ppLuas (){

const hasil  = document.querySelector(".hasil_panjang");
const pL_panjang = document.querySelector("#pL_panjang").value;
const lp_panjang = document.querySelector("#lp_panjang").value;
let  operator ;

operator = pL_panjang * lp_panjang;

hasil.innerHTML = "<p>Hasil</p>"+ "<h2>" +operator+ "</h2>";
}

function resetLuas() {
    const hasil  = document.querySelector(".hasil_panjang").innerHTML ="<h1>🤤</h1>";
}

// keliling
function pp_keliling (){
    const hasil = document.querySelector(".box_keliling")
    const pL_panjang = document.querySelector("#pp_keliling").value; 
    const pp_lebar = document.querySelector("#pp_lebar").value;
    let operator;

    operator = 2 * (pL_panjang * pp_lebar);
    hasil.innerHTML = "<p>Hasil</p>"+ "<h2>" +operator+ "</h2>";
}
function resetKeliling() {
    const hasil = document.querySelector(".box_keliling").innerHTML ="<h1>🤤</h1>";
}