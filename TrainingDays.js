const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return 'Marathon';
    } else if (random === 1) {
        return 'Triathalon';
    } else if (random === 2) {
        return 'Pentathalon';
    }
}

const getTrainingDays = event => {
    let days;
    if (event === 'Marathon') {
        days = 50;
    } else if (event === 'Triathalon') {
        days = 1000;
    } else if (event === 'Pentathalon') {
        days = 200;
    }
    return days;
}