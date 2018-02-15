import React from 'react';

class Filter extends React.Component {
  render(){
    return(
      <div className="filters">
        <div className="filter--container">
          <button className="filter--button">Filtrar por:</button>
          <div className="filter--options">
            <div className="list">
              <h4>Proyectos</h4>
              <ul className="projects">
                <li className="filter--item"><input type="checkbox" value="bq-projects"/>Proyectos de BQ</li>
                <li className="filter--item"><input type="checkbox" value="like"/>¡Me gustan!</li>
              </ul>
            </div>
            <div className="list">
              <h4>Placas y Robots</h4>
              <ul className="boards-robots">
                <li className="filter--item"><input type="checkbox" value="bq-zum"/>BQ ZUM</li>
                <li className="filter--item"><input type="checkbox" value="freaduino-uno"/>Freaduino UNO</li>
                <li className="filter--item"><input type="checkbox" value="arduino-uno"/>Arduino UNO</li>
                <li className="filter--item"><input type="checkbox" value="zowi"/>Zowi</li>
                <li className="filter--item"><input type="checkbox" value="evolution"/>Evolution</li>
                <li className="filter--item"><input type="checkbox" value="mBot"/>mBot</li>
                <li className="filter--item"><input type="checkbox" value="mRanger"/>mRanger</li>
                <li className="filter--item"><input type="checkbox" value="starter-kit"/>starter Kit</li>
                <li className="filter--item"><input type="checkbox" value="echidna"/>Echidna</li>
              </ul>
            </div>
            <div className="list">
              <h4>Componentes</h4>
              <ul className="components">
                <li className="filter--item"><input type="checkbox" value="sin-componentes"/>Sin componentes</li>
                <li className="filter--item"><input type="checkbox" value="sensor-infrarrojo"/>Sensor infrarrojo</li>
                <li className="filter--item"><input type="checkbox" value="potenciometro"/>Potenciometro</li>
                <li className="filter--item"><input type="checkbox" value="led-rgb"/>Led RGB</li>
                <li className="filter--item"><input type="checkbox" value="final-carrera"/>Final de carrera</li>
                <li className="filter--item"><input type="checkbox" value="sensor-ultrason"/>Sensor ultrason....</li>
                <li className="filter--item"><input type="checkbox" value="joystick"/>Joystick</li>
                <li className="filter--item"><input type="checkbox" value="puerto-serie"/>Puerto serie</li>
                <li className="filter--item"><input type="checkbox" value="sensor-sonido"/>Sensor de sonido</li>
                <li className="filter--item"><input type="checkbox" value="bitbloq-connect"/>Bitbloq Connect</li>
                <li className="filter--item"><input type="checkbox" value="bluetooth"/>BlueTooth</li>
                <li className="filter--item"><input type="checkbox" value="lcd"/>LCD</li>
                <li className="filter--item"><input type="checkbox" value="servo"/>Servo</li>
                <li className="filter--item"><input type="checkbox" value="reloj-tiempo"/>Reloj de tiempo...</li>
                <li className="filter--item"><input type="checkbox" value="boton"/>Botón</li>
                <li className="filter--item"><input type="checkbox" value="led"/>LED</li>
                <li className="filter--item"><input type="checkbox" value="servo-continuo"/>Servo Continuo</li>
                <li className="filter--item"><input type="checkbox" value="sensor-humo"/>Sensor de hum...</li>
                <li className="filter--item"><input type="checkbox" value="botonera"/>Botonera</li>
                <li className="filter--item"><input type="checkbox" value="sensor-luz"/>Sensor de luz</li>
                <li className="filter--item"><input type="checkbox" value="zumbador"/>Zumbador</li>
                <li className="filter--item"><input type="checkbox" value="encoder"/>Encoder</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
