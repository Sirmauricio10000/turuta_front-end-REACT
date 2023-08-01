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

    return (
        <div>
            <div className='consultar_nodos_item_center'>
                <h1 className='bi-sign-stop-fill'>&nbsp;Paradas</h1>
            </div>


            <div className='consultar_nodos_item_center'>
                <input id='consultar_nodos_input_filter'
                    type="text"
                    value={filtro}
                    onChange={handleInputChange}
                    placeholder="Buscar por nombre..."
                />
            </div>


            {isLoading ? ( // Muestra el spinner mientras isLoading es true
            <div className='spinner-container consultar_nodos_item_center' id='consultar_nodos_loading'>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            ) : (


            <div className='consultar_nodos_item_center'>
                <table id='consultar_nodos_table'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {nodosFiltrados.map((nodo, index) => (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{nodo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            )}

        </div>
            
    );
}
