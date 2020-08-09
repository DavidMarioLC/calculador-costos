import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Error from '../components/Error'

const Form = ({ guardarMontoAgregado, guardarRestante, setMostrarFormularioMonto }) => {

    const [monto, guardarMonto] = useState(0)
    const [error, guardarError] = useState(false)

    const definirMonto = e => {
        const monto = parseInt(e.target.value, 10);
        guardarMonto(monto)
    }

    const registrarMonto = e => {
        e.preventDefault()

        //validad
        if (monto <= 0 || isNaN(monto)) {
            guardarError(true)
            return;
        }
        guardarError(false)
        //enviar
        guardarMontoAgregado(monto)
        guardarRestante(monto)
        setMostrarFormularioMonto(false)

    }
    return (
        <form className="form" onSubmit={registrarMonto}>
            <div className="form__item">
                <label className="form__item--label">Escribe el monto con el que cuentas</label>
                <input value={monto} onChange={definirMonto} name="monto" className="form__item--input" type="number" placeholder="S/00.00" />
                {error && <Error text={"Por favor ingrese un monto valido."} />}
            </div>
            <button className="form__item--button" type="submit">Registrar tu monto</button>
        </form>
    )
}

Form.propTypes = {
    guardarMontoAgregado: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    setMostrarFormularioMonto: PropTypes.func.isRequired

}

export default Form
