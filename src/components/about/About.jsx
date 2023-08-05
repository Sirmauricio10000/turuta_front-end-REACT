import React, { useState } from 'react';
import './About.css';

const About = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(null);
        } else {
            setExpandedIndex(index);
        }
    };

    const aboutItems = [
        {
            title: "Rutas Integradas",
            content: "Te proporcionamos un sistema de rutas integradas que te permite planificar tus viajes de manera conveniente y sin complicaciones."
        },
        {
            title: "Paradas",
            content: "Puedes explorar la lista completa de paradas en Valledupar, junto con sus ubicaciones en el mapa."
        },
        {
            title: "Encuentra tu Ruta",
            content: "Utiliza nuestra función de búsqueda para encontrar la mejor ruta entre tu origen y destino. Nuestro filtro de búsqueda te ayudará a encontrar rápidamente la ruta que necesitas."
        },
        {
            title: "Detalle de las Rutas",
            content: "Obtén información detallada sobre las rutas disponibles, incluidas las paradas en el camino y un mapa interactivo para visualizarlas."
        },
        {
            title: "Información Actualizada",
            content: "Mantenemos nuestra base de datos actualizada para brindarte información precisa y confiable sobre las rutas y paradas."
        }
    ];

    return (
        <div className='about'>
            <div className='about_main_container'>
                <h2>¡Bienvenido a nuestra aplicación de transporte integrado de buses en Valledupar!</h2>
                <div className='about_button_container'>
                    {aboutItems.map((item, index) => (
                        <button
                            className={`btn btn-success about_button ${expandedIndex === index ? 'expanded' : ''}`}
                            key={index}
                            onClick={() => toggleExpand(index)}
                        >
                            <strong> {item.title} </strong>
                            {expandedIndex === index && <p>{item.content}</p>}
                        </button>
                    ))}
                </div>
                <div className='about_bottom_text_container'>
                    <p>
                        Nuestra misión es facilitar tu experiencia de transporte en Valledupar y ayudarte a moverte de manera eficiente por la ciudad. ¡Esperamos que disfrutes usando nuestra aplicación y que te sea de gran utilidad en tus viajes diarios!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;