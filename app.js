var fs = require('fs');
var XLSX = require('xlsx');

var buf = fs.readFileSync("sheetjs.xlsx");
var wb = XLSX.read(buf, {type:'buffer'});
XLSX.writeFile(wb, 'out.html');

console.log('wb', wb)