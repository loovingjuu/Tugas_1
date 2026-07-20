const stok = [12, 0, 5, 8, 0, 20];

let habis = 0;
let tersedia = 0;

for (let i = 0; i < stok.length; i++) {
    if (stok[i] === 0) {
        console.log(`Barang ${i + 1} : Barang Habis`);
        habis++;
    } else {
        console.log(`Barang ${i + 1} : Stok Tersedia`);
        tersedia++;
    }
}

console.log("Barang habis :", habis);
console.log("Barang tersedia :", tersedia);