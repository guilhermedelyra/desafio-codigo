const KUDOS_TO_POINTS = [
    { name: 'SUPER', value: 100 },
    { name: 'GREAT', value: 50 },
    { name: 'GOOD', value: 20 },
    { name: 'NICE', value: 10 },
    { name: 'OK', value: 5 },
];


function buildKudosArray(result, quantityOfKudos, name) {
    const kudos_array = Array(quantityOfKudos).fill(name)
    return result.concat(kudos_array);
}


function getKudosForUser(points) {
    let result = [];
    
    KUDOS_TO_POINTS.forEach(({ name, value }) => {
        const quantityOfKudos = Math.floor(points / value);
        result = buildKudosArray(result, quantityOfKudos, name);
        points -= quantityOfKudos * value;
    });

    return result;
}


module.exports = {
    getKudosForUser,
};
