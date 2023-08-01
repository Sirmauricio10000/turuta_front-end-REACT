import React from 'react';
import './ResultadoBusqueda.css';

const MostrarParadas = (props) => {
    const { ruta, nombre } = props;

    return (
        <div>
            <h3> {nombre.split('_')[0].toUpperCase() + " " + nombre.split('_')[1]} </h3>
            <strong style={{ fontSize: '20px' }}> Origen </strong>
            <table className='table table-striped resultado_busqueda_table_rutas'>
                <thead>
                    <tr>
                        <td colSpan={2}> <i className='bi-arrow-bar-down' style={{ fontSize: '20px' }}></i> </td>
                    </tr>
                </thead>
                <tbody>
                    {ruta.map((parada, index) => (
                        <React.Fragment key={index}>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{parada}</td>
                            </tr>
                            <tr>
                                <td colSpan={2}> <i className='bi-arrow-bar-down' style={{ fontSize: '20px' }}></i> </td>
                            </tr>

                        </React.Fragment>
                    ))}
                    <tr>
                        <td colSpan={2}>  <strong style={{ fontSize: '20px' }}> Destino </strong> </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MostrarParadas;
