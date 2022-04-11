import * as $ from 'jquery'

function createAnalytics() {
    let counter = 0
    let destroyed = false

    const listener = () => counter++

    document.addEventListener('click', listener)
    $(document).on('click', listener)

    return {
        destroy1() {
            document.removeEventListener('click', listener)
            destroyed = true
        },

        destroy2() {
            $(document).off('click', listener)
            destroyed = true
        },

        getClicks() {
            if (destroyed) {
                return `Analytics is destroyed. Total clicks = ${counter}`
            }
            return counter
        }
    }
}

window.analytics = createAnalytics()