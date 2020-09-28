const data = {
    水: {
        distance: 44970,
        speed: 3
    },
    金: {
        distance: 2277068,
        speed: 4
    },
    地: {
        distance: 28463350,
        speed: 5
    },
    火: {
        distance: 5119987398,
        speed: 6
    },
    木: {
        distance: 11946637262,
        speed: 7
    },
};
for (i in data) {
    const d = data[i];
    d.time = d.distance / d.speed;
}
const mokutime = data["木"].time;
for (let i = mokutime;; i += mokutime) {
    let ok = true;
    for (j in data) {
        const d = data[j];
        if (i % d.time != 0) {
            ok = false;
            break;
        }
    }
    if (ok) {
        console.log(i);
        console.log(
            `${Math.floor(i / 24 / 60 / 60)}日${Math.floor(i / 60 / 60) % 24}時間${
          Math.floor(i / 60) % 60
        }分${i % 60}秒`
        );
        break;
    }
}