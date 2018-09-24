import React, {Component} from 'react'
import instagramResponse from '../photos';

class Gallery extends Component {

  constructor(){
    super()
  }

  render(){

    const panelDetails = instagramResponse.data.map((panel) => (
        <div className="photo">
          <img src={panel.images.standard_resolution.url} />
        </div>
      )
    )

    return(
      <div>
        <p>Photo panel go here</p> 
        {panelDetails}
      </div>
    )
  }

}

export default Gallery