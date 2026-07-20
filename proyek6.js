const umur = [8, 13, 17, 20, 25, 11];

for (let i = 0; i < umur.length; i++) {

    if (umur[i] >= 17) {
        status = "boleh masuk";
    } else {
        status = "tidak boleh masuk";
    }

    console.log(`pengunjung ke-${i + 1}: ${status}`);
}