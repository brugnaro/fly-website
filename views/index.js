const ejs = require('ejs');
const fs = require('fs');

ejs.renderFile(
    '/.index.ejs',
    {},
    (err, html) => {
        fs.writeFile('template.html', html, (err) => { console.log(err) })
    })
