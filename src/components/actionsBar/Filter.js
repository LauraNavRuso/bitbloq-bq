import React from 'react';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.toogleFilter = this.toogleFilter.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleProjects = this.handleProjects.bind(this);
    this.state = {
      showFilter: false
    }
  }

  toogleFilter() {
    this.setState({showFilter: !this.state.showFilter})
  }

  handleFilter(query) {

		let filterQuery = {
				"creator":{
					"_id":this.props.currentUserId
				}
		}

		this.props.handleFilter(JSON.stringify(filterQuery) + query);
  }
  
  handleProjects(event){
    const projectValue = event.target.value;

    const filterQuery = '&project=' + projectValue;
    console.log(filterQuery);

    this.handleFilter(filterQuery);
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
                <li className="filter--item"><input type="checkbox" className="checkbox" value="bq" onChange={this.handleProjects}/>Proyectos de BQ</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="like"/>¡Me gustan!</li>
              </ul>
            </div>
            <div className="list">
              <h4 className="filter--title">Placas y Robots</h4>
              <ul className="boards-robots">
                <li className="filter--item"><input type="checkbox" className="checkbox" value="bqZum"/>BQ ZUM</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="freaduinoUNO"/>Freaduino UNO</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="arduino-uno"/>Arduino UNO</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="zowi"/>Zowi</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="evolution"/>Evolution</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="mcore"/>mBot</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="meauriga"/>mRanger</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="meorion"/>starter Kit</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="Echidna"/>Echidna</li>
              </ul>
            </div>
            <div className="list">
              <h4 className="filter--title">Componentes</h4>
              <ul className="components">
                <li className="filter--item"><input type="checkbox" className="checkbox"  value="without-components"/>Sin componentes</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="irs"/>Sensor infrarrojo</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="pot"/>Potenciometro</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="RGBled"/>Led RGB</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="limitswitch"/>Final de carrera</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="us"/>Sensor ultrasonidos</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="joystick"/>Joystick</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="sp"/>Puerto serie</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="sound"/>Sensor de sonido</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="bitbloqconnect"/>Bitbloq Connect</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="bt"/>BlueTooth</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="lcd"/>LCD</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="servo"/>Servo</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="rtc"/>Reloj de tiempo de real</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="button"/>Botón</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="led"/>LED</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="servocont"/>Servo Continuo</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="hts221"/>Sensor de humedad y temperatura</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="buttons"/>Botonera</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="ldrs"/>Sensor de luz</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" value="buzz"/>Zumbador</li>
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
