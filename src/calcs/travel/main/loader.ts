import uploadResourcesAndDispatchEvent from '../../../calcs/common/helpers/resource-loading/upload-resources-and-dispatch-event'
;(function() {
    const domen = 'https://euro-ins.ru',
        css = [
            {
                url:
                    '/front/v2/dist/js/calc/travel/main/vendors664ad928bc3c94053ee7.css',
                loaded: false,
            },
            {
                url:
                    '/front/v2/dist/js/calc/travel/main/index148118b142b6808b4273.css',
                loaded: false,
            },
        ],
        js = [
            {
                url:
                    '/front/v2/dist/js/calc/travel/main/runtime76b9d5e7e8ed9281bb3c.js',
                loaded: false,
            },
            {
                url:
                    '/front/v2/dist/js/calc/travel/main/vendors664ad928bc3c94053ee7.js',
                loaded: false,
            },
            {
                url:
                    '/front/v2/dist/js/calc/travel/main/index148118b142b6808b4273.js',
                loaded: false,
            },
        ]
    uploadResourcesAndDispatchEvent(css, js, domen)
})()
