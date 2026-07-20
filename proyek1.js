const nama = "budi";
const umur = 20;
const hargaBarang = [12000, 15000, 8000, 5000];

let totalHarga = 0;

for (let i = 0; i < hargaBarang.length; i++) {
    totalHarga += hargaBarang[i];
}

let status = mendapatkanDiskon(totalHarga);

{
    if (total > 30000) {
        status = "mendapatkan diskon";
    console log