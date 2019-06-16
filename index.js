const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const favicon = require('serve-favicon');



var port = process.env.PORT || 3000;

app.listen(port, () =>
{ 
    console.log('SERVER STARTED ON '+ port);
});
app.use(favicon(__dirname + '/public/CSS/favicon.ico'));

//ROUTES
const HOME = require('./ROUTES/HOME/INDEX');
const DETAILS = require('./ROUTES/DETAILS/INDEX');

//MIDDLE-WARE
app.use(bodyParser.json());

app.use(cors());
app.use(expressLayouts);
app.use(express.static(__dirname + '/public'));
app.use(express.static('public'));

//SET TEMPLATE ENGINE...
app.set('views', path.join(__dirname, '/VIEWS'));
app.set('view engine', 'ejs');


//  USE ROUTES....
app.use('/', HOME );
app.use('/DETAILS', DETAILS);

// request('https://www.yifysubtitles.com', (err, res, html) =>
// {
//     let pag = [];
//     if(!err && res.statusCode == 200)
//     {
//         const $ = cheerio.load(html);
//         const links = $('.owl-carousel a img');
//         $(links).each(function(i, links)
//         {
//             let sop = $(this).attr('src');
//             pag[i] = sop;
//         });
//     }
//     console.log(pag);
// });




