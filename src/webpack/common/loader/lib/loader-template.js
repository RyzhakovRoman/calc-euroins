const createLoaderFromTemplate = (hashes, path) =>
    `import uploadResourcesAndDispatchEvent from '../../../common/helpers/resource-loading/upload-resources-and-dispatch-event'
;(function() {
    // const domen = 'http://euro-ins.lh',
    const domen = 'https://euro-ins.ru',
        css = [
            {
                url:
                    '/front/dist/js/calc/${path}/vendors${hashes.vendors}.css',
                loaded: false,
            },
            {
                url:
                    '/front/dist/js/calc/${path}/index${hashes.index}.css',
                loaded: false,
            },
        ],
        js = [
            {
                url:
                    '/front/dist/js/calc/${path}/runtime${hashes.runtime}.js',
                loaded: false,
            },
            {
                url:
                    '/front/dist/js/calc/${path}/vendors${hashes.vendors}.js',
                loaded: false,
            },
            {
                url:
                    '/front/dist/js/calc/${path}/index${hashes.index}.js',
                loaded: false,
            },
        ]
    uploadResourcesAndDispatchEvent(css, js, domen)
})()`

module.exports = createLoaderFromTemplate
