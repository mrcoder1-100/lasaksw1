// Simple script to test if the external image URLs are reachable from the node environment
const https = require('https');

const testUrls = [
    'https://cdn-icons-png.flaticon.com/512/2906/2906206.png', // Cloud
    'https://cdn-icons-png.flaticon.com/512/3524/3524659.png', // Mechanical
    'https://cdn-icons-png.flaticon.com/512/2906/2906231.png', // Database
];

console.log('Testing image URLs...');

testUrls.forEach(url => {
    https.get(url, (res) => {
        console.log(`[${res.statusCode}] ${url}`);
    }).on('error', (e) => {
        console.error(`[ERROR] ${url} - ${e.message}`);
    });
});
