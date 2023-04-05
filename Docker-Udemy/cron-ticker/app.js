const cron = require('node-cron');
const { syncDB } = require('./tasks/asyn-db');

console.log('Inicio en image docker');

cron.schedule('1-59/5 * * * * *', syncDB);

