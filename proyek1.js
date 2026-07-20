const nama = "Budi";
const umur = 20;
const hargaBarang = [12000, 15000, 8000, 5000];

let total = 0;

for (let i = 0; i < hargaBarang.length; i++) {
    total += hargaBarang[i];
}

let status;

if (total > 30000) {
    status = "Mendapat Diskon";
    console.log("Selamat! Anda mendapatkan diskon.");
} else {
    status = "Belanja lagi agar mendapat diskon.";
}

console.log(`Nama: ${nama}`);
console.log(`Umur: ${umur}`);
console.log(`Total Belanja: ${total}`);
console.log(`Status: ${status}`);