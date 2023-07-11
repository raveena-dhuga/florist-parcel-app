import React, { useState, useContext } from "react"
import { Context } from "../Context"
import { Link } from "react-router-dom"
import BasketElement from "../Components/BasketElement"
import ArrowIcon from "../PNGs/arrow_back_FILL0_wght400_GRAD0_opsz48.png"


function Basket() {
    const [buttonContent, setButtonContent] = useState("Checkout securely")
    const { basketItems, emptyBasket } = useContext(Context)
    const orderValue = basketItems.map(item => item.price).reduce((accumulator, currentItem) => { return accumulator + currentItem }, 0.00)
    const orderValuePrice = orderValue.toLocaleString("en-GB", { style: "currency", currency: "GBP" })

    const basketItemElements = basketItems.map(item => {
        return (
            <BasketElement key={item.id} item={item} />
        )
    })

    function checkout() {
        setButtonContent("Checking out securely...")
        setTimeout(() => {
            setButtonContent("Checkout securely")
            emptyBasket()
        }, 3000)
    }

    function numberinBasket() {
        if (basketItems.length === 1) { return "1 item" } else { return `${basketItems.length} items` }
    }

    return (
        <>
            <section className="basket-page-wrapper">
                <Link to="/" className="continue-shopping">
                    <img src={ArrowIcon} />
                    <h5>Continue shopping</h5>
                </Link>
                <div className="basket-banner">
                    <h3>Basket</h3>
                    <p>{numberinBasket()}</p>
                </div>
                <div className="basket-flex">
                    <div className="basket-grid">
                        {basketItemElements}
                        {basketItems.length === 0 && <div className="empty-message">
                            <span>There are no items in your bag</span>
                        </div>
                        }
                    </div>
                    <div className="checkout-wrapper">
                        <h4 className="order-value"><span> Total:</span> {orderValuePrice}</h4>
                        {basketItems.length > 0 &&
                            <button onClick={checkout}> {buttonContent} </button>
                        }
                    </div>
                </div>
            </section>
            <footer></footer>
        </>
    )
}

export default Basket