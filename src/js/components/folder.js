/**
 * Created by zoltanincze on 08/08/2016.
 */
import React, {Component} from 'react';

class Folder extends Component {
  render() {
    if(this.props.item.expanded === false) {
      return (
        <div>
          <button type="submit" onClick={this.props.handleChangeExpand} className="btnExpCol"/>
          <li className="folder-item">{this.props.item.name}</li>
        </div>
      );
    }
    else    {
      return (
        <div>
          <button type="submit" onClick={this.props.handleChangeExpand} className="btnExpCol"/>
          <li className="folder-item">{this.props.item.name}</li>
        </div>
      );
    }
  }
}

export default Folder;

//<img src="../../src/img/up.png" className="imgExpCol" alt="Submit"/>
//<img src="../../img/down.png" className="imgExpCol" alt="Submit"/>
