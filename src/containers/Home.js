import React from 'react';
import Image from 'react-bootstrap/Image'

export const Home = () => {
  return (
    <div className="top-header">
      <Image src={require("../assets/logo/nemesi-logo.jpg")} alt="logo" fluid />
      <h1>Work in progress...</h1>
      <p>Per informazioni rivolgersi ai <a href="/contatti">contatti</a></p>
    </div>
  );
};
