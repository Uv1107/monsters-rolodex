// import { Component } from "react"
import "./card-list.styles.css"
import Card from "../card/card.compoonent";

const CardList = ({ monsters }) => ( // we can use return also

    <div className="card-list">
        {monsters.map(monster => {
            return (
                <Card monster={monster} />
            )
        })}
    </div>
)




export default CardList;