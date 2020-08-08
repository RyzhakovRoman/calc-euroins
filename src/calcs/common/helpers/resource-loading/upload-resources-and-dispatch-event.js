export default function uploadResourcesAndDispatchEvent(css, js, domen) {
    css.forEach(function(item) {
        const linkNode = document.createElement('link')
        linkNode.href = domen + item.url
        linkNode.rel = 'stylesheet'
        document.head.append(linkNode)
    })

    js.forEach(function(item) {
        const scriptNode = document.createElement('script')
        scriptNode.addEventListener('load', function() {
            handleScriptLoading(item.url)
        })
        scriptNode.src = domen + item.url
        scriptNode.setAttribute('defer', 'true')
        document.head.append(scriptNode)
    })

    function handleScriptLoading(url) {
        let allScriptsLoaded = false

        js.some(function(item) {
            if (item.url === url) return (item.loaded = true)
        })

        allScriptsLoaded = js.every(function(item) {
            return item.loaded
        })

        if (allScriptsLoaded)
            setTimeout(() => {
                window.dispatchEvent(new Event('eCalcLoaded'))
            }, 15)
    }
}
