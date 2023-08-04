import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
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
            marginBottom: '30px',
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
        <div className="buscador_background">

            <div className='buscador_main_container'>
                <div className='buscador_top_container'>
                    <i className='bi-search icons'> </i>
                    <h1 className="buscador_h1">Buscador de rutas</h1>
                </div>

                <div className="buscador_combo_container">
                    <div className="busador_origen_container">
                        <label className="buscador_combo_top_text">Origen</label>
                        <Select
                            options={nodos}
                            classNamePrefix=""
                            styles={customStyles}
                            onChange={handleOrigenChange}
                            placeholder="Selecciona el origen..."
                        />
                    </div>

                    <div className="busador_destino_container">
                        <label className="buscador_combo_top_text">Destino</label>
                        <Select
                            options={nodos}
                            classNamePrefix="buscador_select"
                            styles={customStyles}
                            onChange={handleDestinoChange}
                            placeholder="Selecciona el destino..."
                        />
                    </div>
                </div>

                <div className="buscador_button_container">
                    <input type="submit" className="btn btn-success" value="Buscar" onClick={handleBuscarClick} />
                </div>
            </div>
        </div>
    );
}
