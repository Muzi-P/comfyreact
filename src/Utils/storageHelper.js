const key = {
    cart: 'cart'
}

const setItem = {

    local: (key, value) => { if (key) window.localStorage.setItem(key, JSON.stringify(value)) }
}

const getItem = {
    local: (key) => {
        if (key) {
            let value = window.localStorage.getItem(key)
            return value? JSON.parse(value) : []
        }
    }
}

export default {
    key,
    setItem,
    getItem,
    // removeItem,
    // clear
}
