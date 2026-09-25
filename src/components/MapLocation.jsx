import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { useEffect, useState } from 'react';

// Fix icon marker bị lỗi bundle
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Component chỉ render map phía client (tránh SSR issues)
function MapContent({ position, zoom, popupText }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div
        style={{
          height: '400px',
          width: '100%',
          backgroundColor: '#f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '12px',
        }}
      >
        <p>Loading map...</p>
      </div>
    );
  }

  return (
    <MapContainer
      center={position}
      zoom={zoom}
      style={{ height: '100%', width: '100%' }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      <Marker position={position}>
        <Popup>
          <div style={{ textAlign: 'center', minWidth: '150px' }}>
            <strong>{popupText}</strong>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

function MapLocation({
  position = [45.5122, -122.6587], // Portland, OR
  zoom = 15,
  height = '400px',
  popupText = 'FreshFind Market',
}) {
  return (
    <div
      style={{ height, width: '100%', borderRadius: '12px', overflow: 'hidden' }}
      className="map-wrapper"
    >
      <MapContent position={position} zoom={zoom} popupText={popupText} />
    </div>
  );
}

export default MapLocation;
