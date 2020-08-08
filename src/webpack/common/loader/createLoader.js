const fs = require('fs')

// узнает хэши
const getHash = require('./lib/getHashes.js')

// шаблон с изменяемыми хэшами
const createLoaderFromTemplate = require('./lib/loader-template.js')

const filePath = process.argv[2]

// тут шаблон для печати в скрипт, туда подставятся хэши
const scriptData = createLoaderFromTemplate(getHash(filePath), filePath)

// удаляем старый лоадер
if (fs.existsSync(`./src/js/calc/${filePath}/loader.ts`)) {
    fs.unlinkSync(`./src/js/calc/${filePath}/loader.ts`)
    console.log('previous loader was deleted')
}

// делаем новый
fs.writeFileSync(`./src/js/calc/${filePath}/loader.ts`, scriptData)

console.log('loader was created')
