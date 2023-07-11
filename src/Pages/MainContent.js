import React, { useContext } from "react"
import { Context } from "../Context"
import Bouqet from "../Components/Bouqet"

function MainContent() {

    const { bouqets } = useContext(Context)
    const mainContentElements = bouqets.map((bouqet) => {
        return (
            <Bouqet key={bouqet.id} bouqet={bouqet} favourite={false} />
        )
    })

    return (
        <>
            <section className="main-content-section">
                <div className="main-content-banner">
                    <h2>Flowers</h2>
                    <p> (13 bouqets)</p>
                </div>
                <div className="main-content-grid">
                    {mainContentElements}
                </div>
            </section>
            <footer></footer>
        </>
    )
}

export default MainContent