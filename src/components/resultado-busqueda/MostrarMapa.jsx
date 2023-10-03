import React, { useEffect, useState } from 'react';
import { getListOfNodes } from '../../services/services';
import { Loader } from "@googlemaps/js-api-loader"
import { REACT_APP_API_KEY } from 'dotenv';

const MostrarMapa = ({ nodes }) => {
  const [coordenadas, setCoordenadas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getListOfNodes(nodes);
        setCoordenadas(response);
      } catch (error) {
        console.error("Error fetching nodes:", error);
      }
    };

    fetchData();
  }, [nodes]);

  useEffect(() => {
    if (coordenadas.length > 0) {
      loadMap();
    }
  }, [coordenadas]);

  const loadMap = async () => {
    const loader = new Loader({
      apiKey: API_KEY, 
      version: "weekly",
    });

    try {
      await loader.load();
      const { Map } = await google.maps.importLibrary("maps");

      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: coordenadas[0].latitud, lng: coordenadas[0].longitud },
        zoom: 12,
      });
  

      const directionsService = new google.maps.DirectionsService();
      const directionsRenderer = new google.maps.DirectionsRenderer({
        map: map,
      });

      // Preparar las coordenadas para la ruta
      const waypoints = coordenadas.map((coordenada) => ({
        location: new google.maps.LatLng(coordenada.latitud, coordenada.longitud),
      }));

      // Configurar la solicitud de ruta
      const request = {
        origin: waypoints[0].location,
        destination: waypoints[waypoints.length - 1].location,
        waypoints: waypoints.slice(1, -1),
        travelMode: google.maps.TravelMode.DRIVING,
      };

      // Obtener la ruta del servicio de direcciones
      directionsService.route(request, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          // Mostrar la ruta en el mapa
          directionsRenderer.setDirections(result);
        } else {
          console.error("Error al obtener la ruta:", status);
        }
      });
    } catch (error) {
      console.error("Error loading Google Maps:", error);
    }
  };

  return (
    <div className='mostrar_mapa'>
      <h3>Mapa</h3>
      <div id="map" className='mostrar_mapa_mapa'></div>
    </div>
  );
};

export default MostrarMapa;
