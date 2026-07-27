const skor = [100, 450, 800, 150, 900];

for (let i = 0; i < skor.length; i++) {

let rank = '';
if (skor[i] >= 800) {
    rank = 'mythic';
} else if (skor[i] >= 500) {
    rank = 'legend';
} else if (skor[i] >= 300) {
    rank = 'epic';
} else {
    rank = 'warrior';
}

    console.log(`Player ke-${i + 1} : ${skor[i]} -> Rank: ${rank}`);
}