import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import '../styles/pages/orphanages-map.css';

import mapMarkerImg from '../images/map-marker.svg'
import 'leaflet/dist/leaflet.css';

export default function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>

          <h2>Escolha um orfanato no mapa </h2>
          <p>Muitas crianças estão esperando sua visita :)</p >
        </header>

        <footer>
          <strong>Caruaru</strong>
          <span>Pernambuco</span>
        </footer>
      </aside>

      <Map
        center={[-8.2656295, -36.0132043]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}  
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  )
}