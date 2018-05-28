var http = require('http');

const data = {'password': 'QDam0hCckaf'};
const api = 'com.taobao.redbull.getpassworddetail';
const v = '1.0';
const t = '0';
var targetUrl = 'http://api.m.taobao.com/rest/h5ApiUpdate.do?callback=jsonp11&timeout=10050&type=&api=' + api + '&v=' + v;


function requestTaoCode(taoCode) {
    console.log(targetUrl);
    http.get(targetUrl, (res) => {

        const {statusCode} = res;
        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
        });
        res.on('end', () => {
            console.log(JSON.parse(data));
        });
    }).on('error', (err) => {
        console.log("Error" + err.message);
    });
}
requestTaoCode();
//node request
//https://segmentfault.com/a/1190000010698468