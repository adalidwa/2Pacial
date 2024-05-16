import React from 'react'
import './Card.css'
import Informacion from './Informacion.jsx';
import Button from './Button.jsx';
const Card = () => {
  return (
    <div>
        <div className='Cuadro'>
            <Button/>
            <Informacion/>
            <div className='Circulo'>
              <div className='Triangulo'>
              </div>
            </div>  
        </div>
    </div>
  )
}

export default Card