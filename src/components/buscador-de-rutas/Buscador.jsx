import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useNavigate  } from 'react-router-dom';
import './Buscador.css';
import { GetNodes } from '../../services/services';

export default function Buscador() {

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            borderRadius: '25px',
            boxShadow: state.isFocused ? '0 0 0 1px #1161ee' : 'none',
            '&:hover': {
                borderColor: '#1161ee',
            },
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#1161ee' : 'transparent',
            color: state.isSelected ? '#fff' : '#6a6f8c',
        }),
        singleValue: (provided, state) => ({
            ...provided,
            color: state.isSelected ? '#fff' : '#fff',
        }),
        placeholder: (provided) => ({
            ...provided,
            color: '#fff',
        }),
        container: (provided) => ({
            ...provided,
            marginBottom: '20px',
        }),
        input: (provided) => ({
            ...provided,
            color: '#fff',
        }),
    };

    const [nodos, setNodos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await GetNodes();
                const data = response[0].nodos; // Obtener el array de nodos del cuerpo de respuesta

                const transformedOptions = data.map((nodo) => ({
                    label: nodo,
                    value: nodo,
                }));
                setNodos(transformedOptions); // Guardamos los datos obtenidos en el estado del componente.
            } catch (error) {
                console.error("Error fetching nodes:", error);
            }
        };

        fetchData();
    }, []);


    const [origen, setOrigen] = useState('');
    const [destino, setDestino] = useState('');
  
    const navigate = useNavigate(); // Obtiene el objeto navigate mediante el hook useNavigate

    const handleBuscarClick = () => {
      if (origen && destino) {
        // Utiliza el objeto navigate para navegar a la nueva ruta
        navigate(`/resultados/${origen}/${destino}`);
      }
    };

    const handleOrigenChange = (selectedOption) => {
        setOrigen(selectedOption.value);
    };

    const handleDestinoChange = (selectedOption) => {
        setDestino(selectedOption.value);
    };

    return (
        <div className="buscador_login-wrap">
            <div className="buscador_login-html">
                <h1 className="buscador-title">Buscador de rutas</h1>
                <div className="buscador-login-form">
                    <div className="buscador-sign-in-htm">
                        <div className="buscador-group">
                            <label htmlFor="buscador-origen" className="buscador-label">Origen</label>
                            <Select
                                id="buscador-origen"
                                options={nodos}
                                classNamePrefix="buscador_select"
                                styles={customStyles}
                                onChange={handleOrigenChange}
                            />
                        </div>
                        <div className="buscador-group">
                            <label htmlFor="buscador-destino" className="buscador-label">Destino</label>
                            <Select
                                id="buscador-destino"
                                options={nodos}
                                classNamePrefix="buscador_select"
                                styles={customStyles}
                                onChange={handleDestinoChange}
                            />
                        </div>
                        <div className="buscador-group">
                            <input type="submit" className="buscador-button" value="Buscar" onClick={handleBuscarClick} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
