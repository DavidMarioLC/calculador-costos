import React, { useState, useEffect } from 'react';
import Form from '../components/Form'
import FormGastos from '../components/FormGastos'
const App = () => {

  const [montoAgregado, guardarMontoAgregado] = useState(0)
  const [restante, guardarRestante] = useState(0)
  const [mostrarFormularioMonto, setMostrarFormularioMonto] = useState(true)

  const [listaGastos, guardarItemGasto] = useState([])

  const [gasto, guardarGasto] = useState({})
  const [crearGasto, guardarCrearGasto] = useState(false)

  useEffect(() => {
    if (crearGasto) {
      guardarItemGasto([
        ...listaGastos,
        gasto
      ])

      //caculando restante
      const calculandoRestante = restante - gasto.montoGasto;
      console.log(calculandoRestante);
      guardarRestante(calculandoRestante)

    }
  }, [gasto])



  return (
    <div className="app">
      <div className="wrapper">
        <div className="form__content">
          <h1 className="form__title">Calculador de gastos</h1>

          {mostrarFormularioMonto ?
            <Form guardarMontoAgregado={guardarMontoAgregado} guardarRestante={guardarRestante} setMostrarFormularioMonto={setMostrarFormularioMonto} />
            :
            <FormGastos guardarGasto={guardarGasto} guardarCrearGasto={guardarCrearGasto} montoAgregado={montoAgregado} restante={restante} listaGastos={listaGastos} />
          }
        </div>
      </div>
    </div>
  );
};


export default App;
