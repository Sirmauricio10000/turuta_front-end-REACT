import React from 'react';
import './ResultadoBusqueda.css';

const MostrarParadas = (props) => {
    const { ruta, nombre } = props;

    return (
        <div className='mostrar_paradas'>
            <h3 className='mostrar_paradas_tabla_title'> {nombre.split('_')[0].toUpperCase() + " " + nombre.split('_')[1]} </h3>
            <table className='resultado_busqueda_table_bottom'>
                <thead>
                    <tr>
                        <td></td>
                        <td style={{ fontSize: '20px', color: '#28a745' }}>Origen</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td> <i className='bi-arrow-bar-down' style={{ fontSize: '20px' }}></i> </td>
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
                                <td></td>
                                <td> <i className='bi-arrow-bar-down' style={{ fontSize: '20px' }}></i> </td>
                            </tr>

                        </React.Fragment>
                    ))}
                    <tr>
                        <td></td>
                        <td>  <strong style={{ fontSize: '20px', color: '#28a745' }}> Destino </strong> </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MostrarParadas;
