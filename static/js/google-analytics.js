var disableGA = window.location.search.indexOf('noGA=true') > -1;

if (!disableGA) {
    window.dataLayer = window.dataLayer || []
    function gtag () { dataLayer.push(arguments) }
    gtag('js', new Date())
    gtag('config', 'G-921YK5Z1EV')
}
