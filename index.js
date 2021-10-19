import fetch from 'node-fetch'; // npm install node-fetch
import fs from 'fs';
import FormData from 'form-data'; // npm install form-data

const data = new FormData();
data.append('imagedata', fs.createReadStream('C:\\Users\\CriShoux\\Downloads\\image.png'));

const res = await fetch('https://upload.gyazo.com/upload.cgi', {
    method: 'POST',
    headers: {
        ...data.getHeaders()
    },
    body: data
});

console.log(await res.text()); // Prints a link to the uploaded image.
