import { useParams } from 'react-router-dom';
import './ConsultarRutasDetalle.css';

export default function ConsultarRutasDetalle({ }) {
  const { id } = useParams();

  let respuesta;

  switch (id) {
    case "100":
      respuesta = <div className='consultar_ruta_detalle'>
        <div className='consultar_ruta_detalle_main_container'>
          <iframe src="https://www.google.com/maps/d/embed?mid=1XdErGmXUX9OIx6lUBMbkY2dzdDRg2r4&ehbc=2E312F" className='consultar_rutas_detalle_iframe'></iframe>
        </div>
      </div>

      break;
    case "101":
      respuesta = <div className='consultar_ruta_detalle'>
        <div className='consultar_ruta_detalle_main_container'>
          <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1-jghe3alS94pMQJULc3O68h-3IjI8Yg&ehbc=2E312F" className='consultar_rutas_detalle_iframe'></iframe>
        </div>
      </div>
      break;
    case "214":
      respuesta = <div className='consultar_ruta_detalle'>
        <div className='consultar_ruta_detalle_main_container'>
          <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1ufReTkuT2YJxloD3_S8_WRQGZMbFWzo&ehbc=2E312F" className='consultar_rutas_detalle_iframe'></iframe>
        </div>
      </div>
      break;
    case "313":
      respuesta = <div className='consultar_ruta_detalle'>
        <div className='consultar_ruta_detalle_main_container'>
          <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1Xrsvahfps5U0Fv5WmgT7UTbtnWIIZiU&ehbc=2E312F" className='consultar_rutas_detalle_iframe'></iframe>
        </div>
      </div>
      break;
    case "316":
      respuesta = <div className='consultar_ruta_detalle'>
        <div className='consultar_ruta_detalle_main_container'>
          <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1yVszPiAHESgevnxh8-0mwyf-ZiYmBoU&ehbc=2E312F" className='consultar_rutas_detalle_iframe'></iframe>
        </div>
      </div>
      break;
    case "561":
      respuesta = <div className='consultar_ruta_detalle'>
        <div className='consultar_ruta_detalle_main_container'>
          <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1kpwYuo3ABNAVFam00Uuo_W46iN_wQWc&ehbc=2E312F" className='consultar_rutas_detalle_iframe'></iframe>
        </div>
      </div>
      break;
    case "562":
      respuesta = <div className='consultar_ruta_detalle'>
        <div className='consultar_ruta_detalle_main_container'>
          <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1l-V7K4XqmVxxQKMw-ATq1QY0dEHtS_k&ehbc=2E312F" className='consultar_rutas_detalle_iframe'></iframe>
        </div>
      </div>
      break;
    default:
      respuesta = <div className='consultar_ruta_detalle'>
        <h1>Error: Ruta no encontrada</h1>;
      </div>
      break;
  }

  return (respuesta)

}