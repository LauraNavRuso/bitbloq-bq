import React from 'react';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.toogleFilter = this.toogleFilter.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleProjects = this.handleProjects.bind(this);
    this.handleBoards = this.handleBoards.bind(this);
    this.handleComponents = this.handleComponents.bind(this);

    this.state = {
      showFilter: false,
      components: []
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

    if (typeof query === "object"){
      filterQuery = JSON.stringify({...filterQuery, query});
    } else {
      filterQuery = JSON.stringify(filterQuery) + query;
    }
		this.props.handleFilter(filterQuery);
  }

  handleProjects(event){
    const projectValue = event.target.value;

    const filterQuery = '&project=' + projectValue;

    this.handleFilter(filterQuery);
  }

  handleBoards(event){
    const boardValue = event.target.value;

    const filterQuery = '&board=' + boardValue;

    this.handleFilter(filterQuery);
  }

  handleComponents(event){
    const componentValue = event.target.value;

    if (this.state.components.includes(componentValue)){
      this.setState.components = this.state.components.filter((element) => {
        return element !== componentValue
      });
    } else {
      this.state.components.push(componentValue);
    }
    const filterQuery = {
      "hardwareTags": {
        "$all": this.state.components
      }
    };

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
                <li className="filter--item"><input type="checkbox" className="checkbox" onChange={this.handleBoards} value="bqZum"/>BQ ZUM</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" onChange={this.handleBoards} value="FreaduinoUNO"/>Freaduino UNO</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" onChange={this.handleBoards} value="ArduinoUNO"/>Arduino UNO</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" onChange={this.handleBoards} value="zowi"/>Zowi</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" onChange={this.handleBoards} value="evolution"/>Evolution</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" onChange={this.handleBoards} value="mcore"/>mBot</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" onChange={this.handleBoards} value="meauriga"/>mRanger</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" onChange={this.handleBoards} value="meorion"/>starter Kit</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" onChange={this.handleBoards} value="Echidna"/>Echidna</li>
              </ul>
            </div>
            <div className="list">
              <h4 className="filter--title">Componentes</h4>
              <ul className="components">
                <li className="filter--item"><input type="checkbox" className="checkbox" onChange={this.handleComponents} value="without-components"/>Sin componentes</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" onChange={this.handleComponents} value="irs"/>Sensor infrarrojo</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" onChange={this.handleComponents} value="pot"/>Potenciometro</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" onChange={this.handleComponents} value="RGBled"/>Led RGB</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" onChange={this.handleComponents} value="limitswitch"/>Final de carrera</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" onChange={this.handleComponents} value="us"/>Sensor ultrasonidos</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" onChange={this.handleComponents} value="joystick"/>Joystick</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" onChange={this.handleComponents} value="sp"/>Puerto serie</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" onChange={this.handleComponents} value="bitbloqconnect"/>Bitbloq Connect</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" onChange={this.handleComponents} value="bt"/>BlueTooth</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" onChange={this.handleComponents} value="lcd"/>LCD</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" onChange={this.handleComponents} value="servo"/>Servo</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" onChange={this.handleComponents} value="rtc"/>Reloj de tiempo de real</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" onChange={this.handleComponents} value="button"/>Botón</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" onChange={this.handleComponents} value="led"/>LED</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" onChange={this.handleComponents} value="servocont"/>Servo Continuo</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" onChange={this.handleComponents} value="hts221"/>Sensor de humedad y temperatura</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" onChange={this.handleComponents} value="buttons"/>Botonera</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" onChange={this.handleComponents} value="ldrs"/>Sensor de luz</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" onChange={this.handleComponents} value="buzz"/>Zumbador</li>
                <li className="filter--item"><input type="checkbox" className="checkbox" onChange={this.handleComponents} value="encoder"/>Encoder</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
