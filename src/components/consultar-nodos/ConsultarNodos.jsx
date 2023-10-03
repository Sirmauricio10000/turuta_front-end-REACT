// En el componente ConsultarNodos
import React, { useEffect, useState } from 'react';
import { GetNodes } from '../../services/services';
import './ConsultarNodos.css';

export default function ConsultarNodos() {
    const [nodos, setNodos] = useState([]);
    const [filtro, setFiltro] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await GetNodes();
                const data = response[0].nodos; // Obtener el array de nodos del cuerpo de respuesta
                setNodos(data); // Guardamos los datos obtenidos en el estado del componente.
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching nodes:", error);
            }
        };

        fetchData();
    }, []);


    const handleInputChange = (e) => {
        setFiltro(e.target.value);
    };

    const nodosFiltrados = nodos.filter((nodo) =>
        nodo.toLowerCase().includes(filtro.toLowerCase())
    );

    function showAlertDialog() {
        alert("Esta función se implementará en proximas actualizaciones,\nGracias por la comprensión.")
    }

    return (
        <div className='consultar_nodos'>
            <div className='consultar_nodos_main_container'>
                <div className='consultar_nodos_separate_div' id='consultar_nodos_h1'>
                    <i className='bi-sign-stop-fill'> </i> Paradas
                </div>


                <div className='consultar_nodos_table_container'>
                    <input
                        type="text"
                        value={filtro}
                        onChange={handleInputChange}
                        placeholder="Buscar por nombre..."
                        className='consultar_nodos_filter'
                    />
                </div>


                {isLoading ? ( // Muestra el spinner mientras isLoading es true
                    <div className='consultar_nodos_spinner'>
                        <div className="spinner-border text-light" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (


                    <div className='consultar_nodos_table_container'>
                        <table className='table consultar_nodos_table'>
                            <thead>
                                <tr>
                                    <th><i className='bi bi-key-fill' style={{ fontSize: '20px' }}></i> </th>
                                    <th>Nombre</th>
                                    <th>Ubicar </th>
                                </tr>
                            </thead>
                            <tbody>
                                {nodosFiltrados.map((nodo, index) => (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{nodo}</td>
                                        <td> <button className='btn btn-success' type='button' onClick={showAlertDialog}> <i className='bi-geo-alt-fill' style={{ color: 'white' }}></i> </button> </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

            </div>
        </div>


    );
}
