/**
 * Created by zoltanincze on 08/08/2016.
 */
import React, {Component} from 'react';
import context, { actions, getters } from '../application-context';
import FolderContainer from "./folderContainer.js";
import Input from "./input.js";

class Container extends Component {
  //static displayName: 'Container';

  handleChange(event) {
    actions.myModule.setFilter({value: event.target.value});
  }

  static getDataBindings() {
    return{
      data: getters.myModule.data,
      value: getters.myModule.value
    }
  }

  render()  {
    return(
      <div className="widget">
        <Input value={this.props.data.value} handleChange={this.handleChange}/>
        <FolderContainer data={this.props.data.directories}/>
      </div>
    )
  }
}

export default context.connect(Container);
