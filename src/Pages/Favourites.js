import React, { useContext } from "react"
import { Context } from "../Context"
import Bouqet from "../Components/Bouqet"

function Favourites() {

    const { bouqets } = useContext(Context)
    const Favourites = bouqets.filter(item => item.isFavourite)

    function numberinFavs() {
        if (Favourites.length === 1) { return "1 item" } else { return `${Favourites.length} items` }
    }

    const favContentElements = Favourites.map((bouqet) => {
        return (
            <Bouqet key={bouqet.id} bouqet={bouqet} favourite={true} />
        )
    })

    return (
        <>
            <section className="main-content-section favourites">
                <div className="main-content-banner">
                    <h2>Your favourites</h2>
                    <p> {numberinFavs()}</p>
                </div>
                <div className="favourites-grid">
                    {favContentElements}
                </div>
            </section>
            <footer></footer>
        </>
    )
}

export default Favourites