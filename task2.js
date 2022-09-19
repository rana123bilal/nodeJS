const csvFilePath='./files/data.csv';
import fs from "fs";
import {parse} from "csv-parse";

let str = ''
 
fs.createReadStream(csvFilePath)
  .pipe(parse({ delimiter: ",", from_line: 2}))
  .on("data",  (row) => {
      const obj = {
          "book": row[0],
          "author": row[1],
          "price": row[2]
      }
      str += `${JSON.stringify(obj)}\n`
  }) 
  .on("end", () => {
    console.log("done");
    fs.writeFile('./files/text.txt', str, error => {
        if (error) {
            console.error(error);
        }
    });
  })
  .on("error", function (error) {
    console.log(error.message);
  });

 