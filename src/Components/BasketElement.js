import React, { useContext } from "react"
import { Context } from "../Context"
import useHover from "../Hooks/useHover"
import PropTypes from "prop-types"
import EmptyTrash from "../PNGs/delete_FILL0_wght400_GRAD0_opsz48.png"
import FilledTrash from "../PNGs/delete_FILL1_wght400_GRAD0_opsz48.png"

function BasketElement({ item }) {

    const [hovered, ref] = useHover()
    const { removeFromBasket } = useContext(Context)
    const trashIcon = hovered ?
        <img className="trash" alt="filled-trash-icon" src={FilledTrash} onClick={() => removeFromBasket(item.id)} />
        : <img className="trash" ref={ref} alt="empty-trash-icon" src={EmptyTrash} />

    return (
        <div className="basket-item">
            <div className="basket-item-img-container">
                <div style={{ backgroundImage: `url(${item.src})`, backgroundPosition: `${item.position}` }}></div>
                {trashIcon}
            </div>
            <div className="basket-item-details">
                <p> {item.name} </p>
                <span> {`£${item.price}.00`}</span>
            </div>

        </div>
    )
}

BasketElement.propTypes = {
    item: PropTypes.shape({
        src: PropTypes.string.isRequired
    })
}

export default BasketElement