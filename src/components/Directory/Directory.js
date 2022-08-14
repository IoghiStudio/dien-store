import React from 'react';
import './Directory.scss';

import MenuItem from '../Menu-Item/Menu-Item';

class Directory extends React.Component {
  constructor() {
    super()
    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/554D/production/_118073812_234de97a-ea7e-4e62-80d5-ce1b9d267d01.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://images.unsplash.com/photo-1554457945-ba5df6648602?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
    }
  }
  render() {
    return(
      <div className="directory-menu">
        {
          this.state.sections.map(({title , imageUrl , id ,size , linkUrl}) => (
            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
          ))
        }
      </div>
    )
  }
}

export default Directory;