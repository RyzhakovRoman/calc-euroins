const fs = require('fs')

const getHashes = path => {
    const dir = `./dist/js/calc/${path}`
    const chunksHashes = {
        index: '',
        runtime: '',
        vendors: '',
    }

    // достаем хэш из имени файла
    const formatFile = fileName => {
        const formattedString = fileName.replace(/index|runtime|vendors/, '')
        return formattedString.slice(0, formattedString.indexOf('.'))
    }

    const filesNames = fs.readdirSync(dir)

    filesNames.forEach(fileName => {
        if (/index/.test(fileName) && !chunksHashes.index) {
            chunksHashes.index = formatFile(fileName)
        } else if (/runtime/.test(fileName) && !chunksHashes.runtime) {
            chunksHashes.runtime = formatFile(fileName)
        } else if (/vendors/.test(fileName) && !chunksHashes.vendors) {
            chunksHashes.vendors = formatFile(fileName)
        }
    })
    return chunksHashes
}

module.exports = getHashes
