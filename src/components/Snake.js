import React from 'react'

function Snake(props) {
    return (
        <div>
            {
                props.snakedots.map((dot,index)=>{
                    const position = {
                        left: `${dot[0]}vh`,
                        top: `${dot[1]}vh`
                    }
                    return (
                            <div className="snake-body" key={index} style={position}></div>
                    )
                    
                })
            }
        </div>
    )
}

export default Snake
