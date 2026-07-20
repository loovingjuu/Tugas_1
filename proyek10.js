const skor = [100, 450, 800, 150, 900];

for (let i = 0; i < skor.length; i++) {
    if (skor[i] >= 800) {
        console.log(`player ${i + 1} -> ${skor[i]} -> mythic`);
    }
    else if (skor[i] >= 500) {
        console.log(`player ${i + 1} -> ${skor[i]} -> legend`);
    }
    else if (skor[i] >= 300) {
        console.log(`player ${i + 1} -> ${skor[i]} -> epic`);
    }
    else {
        console.log(`player ${i + 1} -> ${skor[i]} -> warrior`);
    }
}
