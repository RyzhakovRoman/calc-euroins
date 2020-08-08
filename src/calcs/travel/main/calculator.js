;(function() {
    var scriptNode = document.createElement('script')
    scriptNode.src =
        'https://euro-ins.ru/front/v2/dist/js/calc/travel/main/loader.js?' +
        Date.now()
    scriptNode.setAttribute('async', true)
    document.head.appendChild(scriptNode)

    if (window.document.location.hostname === 'euro-ins.ru') {
        window.addEventListener('eCalcLoaded', function() {
            new TravelCalculator('eu-travel-calc-cont', {
                code: 'MTAwMTEwMDE4MDAwMDc4',
            })
        })
    }
})()
