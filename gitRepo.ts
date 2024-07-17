import { runEntire } from ".";
import fs from 'fs';

let data = fs.readFileSync('dataSet.txt', 'utf-8').toLowerCase().split(/\s+|\n+/g);
let randomContext = data[Math.floor(Math.random() * data.length)];

let quote = runEntire(randomContext.split(' '));
let templateFile = fs.readFileSync('template.md', 'utf-8');
templateFile = templateFile.replace('$quote', quote.string);
templateFile = templateFile.replace('$date', new Date().toLocaleTimeString());
//@ts-ignore // ts dosent like the replaceAll function
templateFile = templateFile.replace('$context', quote.info.replaceAll("\n", "<br>"));
templateFile = templateFile.replace('$seed', randomContext);
templateFile = templateFile.replace('$iterations', quote.iterations.toString());
fs.writeFileSync('readme.md', templateFile);