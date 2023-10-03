import React from 'react';
import { Link } from 'react-router-dom';
import ruta100 from '../../assets/ruta100.png';
import ruta101 from '../../assets/ruta101.png';
import ruta214 from '../../assets/ruta214.png';
import ruta313 from '../../assets/ruta313.png';
import ruta316 from '../../assets/ruta316.png';
import ruta561 from '../../assets/ruta561.png';
import ruta562 from '../../assets/ruta562.png';
import ruta0 from '../../assets/ruta0.png';
import './ConsultarRutas.css';

const images = [ruta100, ruta101, ruta214, ruta313, ruta316, ruta561, ruta562, ruta0];

export default function ConsultarRutas() {
  return (
    <div className='consultar_rutas'>
      <div className='consultar_rutas_main_container'>
        <div className='consultar_rutas_h1'>
          <h1> <i className='bi-geo-fill'></i> Conoce las rutas</h1>
        </div>

        <table className='consultar_rutas_table'>
          <tbody>
            <tr>
              <td>
                <Link to="/ruta-detalle/100">
                  <img className='consultar_rutas_img' src={images[0]} alt="Imagen 1" />
                </Link>
              </td>
              <td>
                <Link to="/ruta-detalle/101">
                  <img className='consultar_rutas_img' src={images[1]} alt="Imagen 2" />
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link to="/ruta-detalle/214">
                  <img className='consultar_rutas_img' src={images[2]} alt="Imagen 3" />
                </Link>
              </td>
              <td>
                <Link to="/ruta-detalle/313">
                  <img className='consultar_rutas_img' src={images[3]} alt="Imagen 4" />
                </Link>
              </td>
            </tr>

            <tr>
              <td>
                <Link to="/ruta-detalle/316">
                  <img className='consultar_rutas_img' src={images[4]} alt="Imagen 5" />
                </Link>
              </td>
              <td>
                <Link to="/ruta-detalle/561">
                  <img className='consultar_rutas_img' src={images[5]} alt="Imagen 6" />
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link to="/ruta-detalle/562">
                  <img className='consultar_rutas_img' src={images[6]} alt="Imagen 7" />
                </Link>
              </td>
              <td>
                <img className='consultar_rutas_img' src={images[7]} alt="Imagen 8" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  );
}
