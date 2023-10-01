import { useState } from 'react'
import './Card.css'

export default function Card(props){
    // eslint-disable-next-line react/prop-types
    let title = props.title
    // eslint-disable-next-line react/prop-types
    let numCard = props.numCard
    
    const [cont, setCont] = useState(0)
    
    const aumentar = () => {
        if (cont < 10) {
            setCont(cont + numCard)
        }
    }

    const diminuir = () => {
        if (cont > 0) {
            setCont(cont - numCard)
        }
    }
  
    return (
        <div className='container__card'>

            <h1>{title}</h1>

            <span className='card-span'>{cont}</span>

            <div className='container__card-btn'>
                <button onClick={diminuir}>-</button>
                <button onClick={aumentar}>+</button>
            </div>
            
        </div>
    )
}