import React, { useState } from "react"
import data from "./data"

const Context = React.createContext()

function ContextProvider(props) {

    const [bouqets, setBouqets] = useState(JSON.parse(localStorage.getItem('bouqets')) || data)
    const [basketItems, setBasketItems] = useState(JSON.parse(localStorage.getItem('basket')) || [])

    function toggleFavourite(id) {
        const newBouqets = bouqets.map(item => {
            if (item.id === id) {
                return { ...item, isFavourite: !item.isFavourite }
            }
            return item
        })
        localStorage.setItem('bouqets', JSON.stringify(newBouqets))
        const localStorageBouqets = JSON.parse(localStorage.getItem('bouqets'))
        setBouqets(localStorageBouqets)
    }

    function emptyBasket() {
        setBasketItems([])
    }

    function addToBasket(newBouqet) {
        const newBasket = [...basketItems, newBouqet]
        localStorage.setItem('basket', JSON.stringify(newBasket))
        setBasketItems(newBasket)
    }

    function removeFromBasket(id) {
        const filteredBasket = basketItems.filter(item => item.id !== id)
        localStorage.setItem('basket', JSON.stringify(filteredBasket))
        setBasketItems(filteredBasket)
    }

    function favouriteToBasket(id) {
        const updatedStorage = bouqets.map(item => {
            if (item.id === id) {
                return { ...item, isFavourite: !item.isFavourite }
            }
            return item
        })
        localStorage.setItem('bouqets', JSON.stringify(updatedStorage))
        setBouqets(updatedStorage)
    }

    return (
        <Context.Provider value={{
            bouqets,
            basketItems,
            emptyBasket,
            removeFromBasket,
            addToBasket,
            toggleFavourite,
            favouriteToBasket
        }}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }