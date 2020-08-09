import React, { useState } from 'react'
// import shortid from 'shortid'
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types'
import Error from '../components/Error'
import ItemList from '../components/ItemList'
import { colorRestante } from './helpers/ColorRestante'
const FormGastos = ({ listaGastos, montoAgregado, restante, guardarGasto, guardarCrearGasto }) => {

    const [nombreGasto, guardarNombreGasto] = useState('')
    const [montoGasto, actualizarMontoGasto] = useState(0)

    const [errorNombreMonto, setErrorNombreMonto] = useState(false)
    const [errorMontoGasto, setErrorMontoGasto] = useState(false)
    const agregarGasto = e => {
        e.preventDefault()

        //validar
        if (montoGasto < 1 || isNaN(montoGasto)) {
            setErrorMontoGasto(true);
            return;
        }
        else if (nombreGasto.trim() === '') {
            setErrorNombreMonto(true)
            return;
        }
        setErrorNombreMonto(false)
        setErrorMontoGasto(false)
        //construir gasto
        const gasto = {
            nombreGasto,
            montoGasto,
            id: uuidv4()
        }

        //pasar el gasto al componente principal
        // guardarNuevoGasto(gasto)
        guardarGasto(gasto)
        guardarCrearGasto(true)
        //reset del form
        guardarNombreGasto('')
        actualizarMontoGasto(0)
    }
    return (
        <div className="gastos__description">
            <div className="form gastos__form">
                <form onSubmit={agregarGasto}>
                    <div className="gastos__item">
                        <label className="form__item--label">Nombre del gasto</label>
                        <input onChange={(e) => guardarNombreGasto(e.target.value)} value={nombreGasto} name="nombreGasto" className="form__item--input" type="text" placeholder=" nombre del gasto" />
                        {errorNombreMonto && <Error text={"Agrega en que gastaras."} />}
                    </div>
                    <div className="gastos__item">
                        <label className="form__item--label">Monto a gastar</label>
                        <input onChange={(e) => actualizarMontoGasto(parseInt(e.target.value))} value={montoGasto} name="montoGasto" className="form__item--input" type="number" placeholder="S/00.00" />
                        {errorMontoGasto && <Error text={"Agrega un monto valido."} />}
                    </div>
                    {restante === 0 ?
                        <button disabled className="form__item--button-agotado" type="submit">Has agotado tu presupuesto.</button>
                        :
                        <button className="form__item--button" type="submit">Agregar gasto</button>
                    }
                </form>
            </div>
            <div className=" description__list">
                <div className="description__header">
                    <p className="monto__init">Monto inicial: <strong>S/{montoAgregado}</strong></p>
                    <p>Monto restante: <strong className={colorRestante(montoAgregado, restante)}>S/{restante}</strong></p>
                </div>
                {listaGastos.length <= 0 &&
                    <p className="empty">No hay gastos agregados.</p>}

                {listaGastos.map(item => (
                    <ItemList key={item.id} nombreGasto={item.nombreGasto} montoGasto={item.montoGasto} />
                ))}

            </div>
        </div>
    )
}

FormGastos.propTypes = {
    listaGastos: PropTypes.array.isRequired,
    montoAgregado: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired,
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}

export default FormGastos
