import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getShortestRoute } from '../../services/services';
import './ResultadoBusqueda.css';
import MostrarParadas from './MostrarParadas';
import MostrarMapa from './MostrarMapa';

export default function ResultadoBusqueda() {
    const { origen, destino } = useParams();
    const [rutas, setRutas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);
    const [caminoSeleccionado, setCaminoSeleccionado] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getShortestRoute(origen, destino);
                if (response.error) {
                    // Si hay un error, establecemos las rutas como un array vacío
                    setRutas([]);
                } else {
                    setRutas(response.rutas);
                }
            } catch (error) {
                setRutas([]); // Si ocurre un error, establecemos las rutas como un array vacío
                console.error("Error:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [origen, destino]);


    const mostrarParadas = (camino) => {
        setOpcionSeleccionada('Paradas');
        setCaminoSeleccionado(camino)
    };

    const mostrarMapa = () => {
        setOpcionSeleccionada('Mapa');
        alert("Esta función se implementará en proximas actualizaciones,\nGracias por la comprensión.");
    };



    return (
        <div className='resultado_busqueda'>

            <div className='resultado_busqueda_main_container'>

                {isLoading ? ( // Muestra el spinner mientras isLoading es true
                    <div className='spinner-container resultado_busqueda_spinner'>
                        <div className="spinner-border text-light" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (


                    rutas.length === 0 ? (
                        <div className='resultado_busqueda_h1_container'>
                            <h3>Lo sentimos, no se encontraron rutas para este tramo.</h3>
                            <h3>Intenta con otras paradas.</h3>
                        </div>
                    ) : (
                        <>
                            {rutas.length > 1 ? (
                                <div className='resultado_busqueda_h1_container'> <h3>Hemos encontrado {rutas.length} caminos para ti:</h3> </div>

                            ) : (
                                <div className='resultado_busqueda_h1_container'> <h3>Hemos encontrado 1 camino para ti:</h3> </div>
                            )}
                            <table className='resultado_busqueda_table_top'>
                                <tbody>
                                    {rutas.map((ruta, index) => (
                                        <tr key={index}>
                                            <td>
                                                <Link to={`/ruta-detalle/${ruta.ruta.split('_')[1]}`}>
                                                    <button type="button" className="btn btn-success consultar_busqueda_button_top">
                                                        {ruta.ruta.split('_')[0].toUpperCase() + " " + ruta.ruta.split('_')[1]} <i className="bi-bus-front"></i>
                                                    </button>
                                                </Link>
                                            </td>
                                            <td>
                                                <button type="button" className="btn btn-success consultar_busqueda_button_top" onClick={() => mostrarParadas(index)}>
                                                    Ver paradas <i className="bi-sign-stop"></i>
                                                </button>
                                            </td>
                                            <td>
                                                <button type="button" className="btn btn-success consultar_busqueda_button_top" onClick={mostrarMapa}>
                                                    Ver mapa <i className="bi-pin-map"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </>
                    )
                )}

                <div className='resultado_busqueda_bottom_container'>
                    {opcionSeleccionada === 'Paradas' && caminoSeleccionado !== null ? (

                        <MostrarParadas ruta={rutas[caminoSeleccionado]['camino']} nombre={rutas[caminoSeleccionado]['ruta']} />
                    ) : null}
                    {opcionSeleccionada === 'Mapa' && <MostrarMapa />}
                </div>
            </div>
        </div>

    );
}
