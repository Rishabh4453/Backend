/*const fs = require("fs");

const fh = fs.openSync("test.txt", "w");
console.log(fh);
const fw=fs.writeSync(fh, "Hello, World!");
console.log(fw);
const fc=fs.openSync("SECFB", "w+");
console.log(fc);
const f=fs.writeSync(fc, "Security Focus");
console.log(f);
fs.closeSync(fh);
fs.closeSync(fc);*/
const fs=require("fs");
const fh=fs.writeFileSync("section fa","This is section fa"); 
console.log(fh);
const fr=fs.readFileSync("section fa","utf-8");
console.log(fr);
fs.renameSync("section fa","SECFA");
const fd=fs.appendFileSync("SECFA","\n This is appended data");
console.log(fd);
const rr=fs.readFileSync("SECFA","utf-8");
console.log(rr);
 