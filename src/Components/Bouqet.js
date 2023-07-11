import React, { useContext, useRef } from "react"
import { Context } from "../Context"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import useHover from "../Hooks/useHover"
import FilledHeart from "../PNGs/favorite_FILL1_wght400_GRAD0_opsz48.png"
import EmptyHeart from "../PNGs/favorite_FILL0_wght400_GRAD0_opsz48.png"
import AddIcon from "../PNGs/add_circle_FILL1_wght400_GRAD0_opsz48.png"
import FilledBasket from "../PNGs/shopping_basket_FILL1_wght400_GRAD0_opsz48.png"

function Bouqet({ bouqet, favourite }) {
    const [hovered, ref] = useHover()
    const { addToBasket, basketItems, toggleFavourite, favouriteToBasket } = useContext(Context)
    const addButtonRef = useRef(null)
    const basketButtonRef = useRef(null)

    function heartIcon() {
        if (bouqet.isFavourite) {
            return <img className="filled-heart" alt="filled-heart" src={FilledHeart} onClick={() => toggleFavourite(bouqet.id)} />
        } else if (hovered) {
            return <img className="empty-heart" alt="empty-heart" src={EmptyHeart} onClick={() => toggleFavourite(bouqet.id)} />
        }
    }

    function basketIcon() {
        const inBasket = basketItems.some(item => item.id === bouqet.id)
        if (inBasket) {
            return <Link to="/basket" className="filled-basket-container">
                <img alt="filled-basket" src={FilledBasket}
                    onMouseEnter={() => basketButtonRef.current.style.top = '80%'}
                    onMouseLeave={() => basketButtonRef.current.style.top = '100%'} />
            </Link>
        } else {
            return <div className="add-icon-container">
                <img src={AddIcon} className="add-icon" alt="add-icon"
                    onClick={() => {
                        addToBasket(bouqet);
                        addButtonRef.current.style.top = '100%';
                        if (favourite) { favouriteToBasket(bouqet.id) }
                    }}
                    onMouseEnter={() => addButtonRef.current.style.top = '80%'}
                    onMouseLeave={() => addButtonRef.current.style.top = '100%'}
                />
            </div>
        }
    }

    return (
        <div className="bouqet">
            <div ref={ref} className="bouqet-img-container" >
                <div style={{ backgroundImage: `url(${bouqet.src})`, backgroundPosition: `${bouqet.position}`, boxShadow: '1px 1px rgba(0, 0, 0, 0.1)' }}>
                </div>
                {heartIcon()}
                {basketIcon()}
                <button className="add-to-basket-button" ref={addButtonRef}>
                    {favourite ? "Move" : "Add"} to basket
                </button>
                <button className="go-to-basket-button" ref={basketButtonRef}> Go to basket </button>
            </div>
            <div className="bouqet-details">
                <p> {bouqet.name} </p>
                <span> {`£${bouqet.price}.00`} </span>
            </div>
        </div>
    )
}

Bouqet.propTypes = {
    bouqet: PropTypes.shape({
        id: PropTypes.string.isRequired,
        isFavourite: PropTypes.bool.isRequired,
        src: PropTypes.string.isRequired

    })
}

export default Bouqet