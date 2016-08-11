/**
 * Created by zoltanincze on 08/08/2016.
 */
import React, {Component} from 'react';

class File extends Component {
  render() {
    return (
      <li className = "file-item" >{this.props.name}</li>
    );
  }
}

export default File;
