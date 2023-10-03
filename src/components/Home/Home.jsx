import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
    return (<div className='home_background'>
        <div className='home_main_container'>
            <h1 className='home_slogan'>Descubre Valledupar</h1>
            <h1 className='home_slogan_downtext'>Conectando Culturas, Creando Recuerdos</h1>
            <Link to="/about">
                <button className='btn btn-success home_btn'>Inicia tu Viaje</button>
            </Link>
        </div>
    </div>
    )
}