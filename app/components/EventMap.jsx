// // components/EventMap.js
// 'use client';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import { useEffect } from 'react';
// import L from 'leaflet';

// export default function EventMap({ lat, lng, location }) {
//   const position = [lat, lng];

//   return (
//     <div className="h-64 w-full rounded-xl overflow-hidden border border-border">
//       <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
//         <TileLayer
//           attribution='&copy; OpenStreetMap contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={position}>
//           <Popup>{location}</Popup>
//         </Marker>
//       </MapContainer>
//     </div>
//   );
// }
