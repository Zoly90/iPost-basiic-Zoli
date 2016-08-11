/**
 * Created by zoltanincze on 08/08/2016.
 */
import React, {Component} from 'react';

class Input extends Component {

  static getDataBindings(getters) {
    return {
      data: getters.myModule.data,
      value: getters.myModule.value
    }
  }

  render() {
    let string;
    if(this.props.value != "")
      string = "Searching for: " + this.props.value;
    else
      string = "";
    return (
      <div>
        <div className = "widget">

          <input
            id="enteredValue"
            type="text"
            placeholder="filter..."
            onChange={this.props.handleChange}
            value={this.props.value}
          />
        </div>
        <div className="searching">
          {string}
        </div>
      </div>)
  }
}

export default Input;

//<img src="./src/img/magnifying-glass.png" className="magnifyingGlass" alt="Magnifying Glass"/>

