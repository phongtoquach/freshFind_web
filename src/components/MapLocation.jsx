import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Fix icon marker bị lỗi bundle
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

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
      <MapContainer
        center={position}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='Powered by Esri | Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
        />
        <Marker position={position}>
          <Popup>
            <div style={{ textAlign: 'center', minWidth: '150px' }}>
              <strong>{popupText}</strong>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapLocation;