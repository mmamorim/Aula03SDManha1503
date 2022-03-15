
console.log("Oi gente!");

const fs = require('fs')
const pdf = require('pdfjs')

async function geraPdf() {
    const doc = new pdf.Document({
        font: require('pdfjs/font/Helvetica'),
        padding: 10
    })
    doc.pipe(fs.createWriteStream('./output.pdf'))

    // render something onto the document

    doc.text('Hello World')
    doc.text('Hello World')
    doc.text('Hello World')

    await doc.end()
}

geraPdf();
