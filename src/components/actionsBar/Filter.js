import React from 'react';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.toogleFilter = this.toogleFilter.bind(this);
    this.state = {
      showFilter: false
    }
  }

  toogleFilter() {
    this.setState({showFilter: !this.state.showFilter})
  }

  render() {
    let filterClassName = (this.state.showFilter) ? 'filter--options' : 'filter--options filter--off';

    return(
      <div className="filters">
        <div className="filter--container">
          <button className="filter--button" onClick={this.toogleFilter}>Filtrar por:</button>
          <div className={filterClassName}>
            <div className="list">
              <h4 className="filter--title">Proyectos</h4>
              <ul className="projects">
                <li className="filter--item"><input type="checkbox" className="checkbox" value="bq-projects"/>Proyectos de BQ</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="like"/>¡Me gustan!</li>
              </ul>
            </div>
            <div className="list">
              <h4 className="filter--title">Placas y Robots</h4>
              <ul className="boards-robots">
                <li className="filter--item"><input type="checkbox" className="checkbox" value="bq-zum"/>BQ ZUM</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="freaduino-uno"/>Freaduino UNO</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="arduino-uno"/>Arduino UNO</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="zowi"/>Zowi</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="evolution"/>Evolution</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="mBot"/>mBot</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="mRanger"/>mRanger</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="starter-kit"/>starter Kit</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="echidna"/>Echidna</li>
              </ul>
            </div>
            <div className="list">
              <h4 className="filter--title">Componentes</h4>
              <ul className="components">
                <li className="filter--item"><input type="checkbox" className="checkbox"  value="sin-componentes"/>Sin componentes</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="sensor-infrarrojo"/>Sensor infrarrojo</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="potenciometro"/>Potenciometro</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="led-rgb"/>Led RGB</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="final-carrera"/>Final de carrera</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="sensor-ultrason"/>Sensor ultrasonidos</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="joystick"/>Joystick</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="puerto-serie"/>Puerto serie</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="sensor-sonido"/>Sensor de sonido</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="bitbloq-connect"/>Bitbloq Connect</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="bluetooth"/>BlueTooth</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="lcd"/>LCD</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="servo"/>Servo</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="reloj-tiempo"/>Reloj de tiempo de real</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="boton"/>Botón</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="led"/>LED</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="servo-continuo"/>Servo Continuo</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="sensor-humo"/>Sensor de humedad y temperatura</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="botonera"/>Botonera</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="sensor-luz"/>Sensor de luz</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="zumbador"/>Zumbador</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="encoder"/>Encoder</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
