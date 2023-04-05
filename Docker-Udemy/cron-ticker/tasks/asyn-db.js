let times = 0;

const syncDB = () => {
    times++;
    return times
}

module.exports = {
    syncDB
}