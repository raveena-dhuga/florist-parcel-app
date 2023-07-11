import React, { useState } from "react"
import data from "./data"

const Context = React.createContext()

function ContextProvider(props) {

    const [bouqets, setBouqets] = useState(JSON.parse(localStorage.getItem('bouqets')) || data)
    const [basketItems, setBasketItems] = useState([])

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
        setBasketItems(prev => [...prev, newBouqet])
    }

    function removeFromBasket(id) {
        setBasketItems(prev => prev.filter(item => item.id !== id))
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