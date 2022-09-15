const csvFilePath='./data.csv'
import csv from 'csvtojson'; // ES6 import
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
	console.log(jsonObj); 
})
