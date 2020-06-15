import React from 'react'
import './Food.css'
function Food(props) {
    
    const position = {
        left: `${props.food[0]}vh`,
        top: `${props.food[1]}vh`
    }
    
    return (
        <div style={position} className="food-dot">
        </div>
    )
}

export default Food
