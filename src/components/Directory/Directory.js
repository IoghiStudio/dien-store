import React from 'react';
import './Directory.scss';

import MenuItem from '../Menu-Item/Menu-Item';
import sectitons from './DirectoryData';

class Directory extends React.Component {
  constructor() {
    super()
    this.state = {
      sections: sectitons
    }
  }
  render() {
    const {sections} = this.state;
    return(
      <div className="directory-menu">
        {
          sections.map(({id , ...otherSectionProps}) => (
            <MenuItem key={id} {...otherSectionProps} />
          ))
        }
      </div>
    )
  }
}

export default Directory;