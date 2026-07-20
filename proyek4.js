const hadir = [true, false, true, true, false, true];

let jumlahHadir = 0;
let jumlahTidakHadir = 0;

for (let i = 0; i < hadir.length; i++) {
    if (hadir[i]) {
        console.log(`Siswa ${i + 1} : Hadir`);
        jumlahHadir++;
    } else {
        console.log(`Siswa ${i + 1} : Tidak Hadir`);
        jumlahTidakHadir++;
    }
}

console.log("Total Hadir :", jumlahHadir);
console.log("Total Tidak Hadir :", jumlahTidakHadir);