import React from 'react';

class Filter extends React.Component {
  render(){
    return(
      <div className="filter--container">
        <button className="filter">Filtrar por:
        </button>
      </div>
    );
  }
}

export default Filter;


// <div className="filter--options">
//   <div className="filter--options--projects">
//     <h4>Proyectos</h4>
//     <input type="checkbox" value="bq-projects"/> Proyectos de BQ
//   </div>
//   <div className="filter--options--robots">
//     <h4>Placas y Robots</h4>
//     <input type="checkbox" value="bq-zum"/> BQ ZUM
//     <input type="checkbox" value="freaduino-uno"/> Freaduino UNO
//     <input type="checkbox" value="arduino-uno"/> Arduino UNO
//     <input type="checkbox" value="zowi"/> Zowi
//     <input type="checkbox" value="evolution"/> Evolution
//     <input type="checkbox" value="mBot"/> mBot
//     <input type="checkbox" value="mRanger"/> mRanger
//     <input type="checkbox" value="starter-kit" /> starter Kit
//     <input type="checkbox" value="echidna"/> Echidna
//   </div>
//   <div className="filter--options--components">
//     <h4>Placas y Robots</h4>
//     <input type="checkbox" value="sin-componentes"/> Sin componentes
//     <input type="checkbox" value="sensor-infrarrojo"/> Sensor infrarrojo
//     <input type="checkbox" value="potenciometro"/> Potenciometro
//     <input type="checkbox" value="led-rgb"/> Led RGB
//     <input type="checkbox" value="final-carrera"/> Final de carrera
//     <input type="checkbox" value="sensor-ultrason"/> Sensor ultrason....
//     <input type="checkbox" value="joystick"/> Joystick
//     <input type="checkbox" value="sensor-sonido" /> Sensor de sonido
//     <input type="checkbox" value="bitbloq-connect"/> Bitbloq Connect
//     <input type="checkbox" value="bluetooth"/> BlueTooth
//     <input type="checkbox" value="lcd"/> LCD
//     <input type="checkbox" value="servo"/> Servo
//     <input type="checkbox" value="reloj-tiempo"/> Reloj de tiempo...
//     <input type="checkbox" value="boton"/> Botón
//     <input type="checkbox" value="led"/> LED
//     <input type="checkbox" value="servo-continuo"/> Servo Continuo
//     <input type="checkbox" value="sensor-humo" /> Sensor de hum...
//     <input type="checkbox" value="botonera"/> Botonera
//     <input type="checkbox" value="sensor-luz"/> Sensor de luz
//     <input type="checkbox" value="zumbador" /> Zumbador
//     <input type="checkbox" value="encoder"/> Encoder
//   </div>
// </div>
