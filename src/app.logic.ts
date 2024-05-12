import fs from "fs";
import { yarg } from "./config/plugins/args.plugin";

const { b: base, l: limit, s: showTable } = yarg;
let outputMessage: string = '';
let headerMessage: string = `
=============================
        Tabla del ${base}         
=============================\n`;

for (let i = 1; i <= limit; i++) {
    outputMessage += `${base} x ${i} = ${base * i} \n`;
}

outputMessage = headerMessage + outputMessage;

if (showTable == true) {
    console.log(outputMessage);
}

const outputPath = `outputs`;

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/tabla-${base}`, outputMessage);
console.log('File created')


// const multiplicationTable = (base: number) => {

//     for (let i: number = 1; i < 11; i++) {

//         console.log(`${base} x ${i} = ${base * i} `)
//     }

// }

// const result = multiplicationTable(5)

// const funcionMultiply = multiplicationTable.toString();

// fs.writeFile(`outputs/tabla-5.txt`, funcionMultiply, (err) => {

//     if (err) {
//         console.log('error');
//     } else {
//         console.log('Succes');
//     }

// })