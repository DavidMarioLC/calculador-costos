import React from 'react'

const ItemList = ({ key, nombreGasto, montoGasto }) => {
    return (
        <div className="description__list--gastos">
            <p>{nombreGasto}</p>
            <p>S/ {montoGasto}</p>
        </div>
    )
}

export default ItemList
