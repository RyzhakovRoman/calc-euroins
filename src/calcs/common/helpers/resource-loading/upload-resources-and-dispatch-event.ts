interface ResourceInfoInterface {
    url: string
    loaded: boolean
}

export default function uploadResourcesAndDispatchEvent(
    css: ResourceInfoInterface[],
    js: ResourceInfoInterface[],
    domen
) {
    js.unshift(
        {
            url: '/front/node_modules/react/umd/react.production.min.js',
            loaded: false,
        },
        {
            url:
                '/front/node_modules/react-dom/umd/react-dom.production.min.js',
            loaded: false,
        }
    )
    css.forEach(item => {
        const linkNode = document.createElement('link')
        linkNode.href = domen + item.url
        linkNode.rel = 'stylesheet'
        document.head.appendChild(linkNode)
    })

    createScriptNode(domen + js[0].url)
        .then(() => createScriptNode(domen + js[1].url))
        .then(() => {
            handleScriptLoading(js[0].url)
            handleScriptLoading(js[1].url)
            js.forEach((item, i) => {
                if (i < 2) return
                createScriptNode(domen + item.url).then(() =>
                    handleScriptLoading(item.url)
                )
            })
        })

    function handleScriptLoading(url: string) {
        let allScriptsLoaded: boolean = false

        js.some(function(item) {
            if (item.url === url) return (item.loaded = true)
        })

        allScriptsLoaded = js.every(function(item) {
            return item.loaded
        })

        if (allScriptsLoaded)
            setTimeout(() => {
                window.dispatchEvent(new CustomEvent('eCalcLoaded'))
            }, 15)
    }
}

function createScriptNode(src) {
    return new Promise(resolve => {
        const scriptNode = document.createElement('script')
        scriptNode.defer = true
        scriptNode.src = src
        scriptNode.addEventListener('load', resolve)
        document.head.appendChild(scriptNode)
    })
}
