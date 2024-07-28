import React from 'react';
import { useParams } from 'react-router-dom';

function ArtistProfile() {
  const { id } = useParams();
  return (
    <div>
      <h1>Artist Profile for {id}</h1>
      {/* Add artist profile details here */}
    </div>
  );
}

export default ArtistProfile;
