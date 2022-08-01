const events = require('events');
const fs = require('fs');
const readline = require('readline');
const regexpNames = /^(.+ .+)$/g;

(async function processLineByLine() {
  try {
    const rl = readline.createInterface({
      input: fs.createReadStream('MCCC_GetPop_Jun15_152945.log'),
      crlfDelay: Infinity
    });

    rl.on('line', (line) => {
        const regexpNames = /^(.+ .+)$/g;
        console.log(line.match(regexpNames));
        var arr = line.match(regexpNames);
          if (Array.isArray(arr)) {
          //do something
          function join(arr) {
            return [...new Set(arr)];  
          }
         fs.appendFile('modnames.txt', "\n" + arr.join("\n"), err => { 
          if (err) {
              console.error(err);
          }
           });
          await events.once(rl, 'close');
        });
    });
         
        
  
      console.log('Reading file line by line with readline done.');
    } catch (err) {
      console.error(err);
    }
  })();
