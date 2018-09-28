import React, {Component} from 'react'
import instagramResponse from '../photos'
import PhotoPanel from './elements/photoPanel'

class Gallery extends Component {

  constructor(){
    super()
  }

  render(){

    const panelDetails = instagramResponse.data.map((panel) => (
        <PhotoPanel panel={panel} />
      )
    )

    return(
      <div className="container-fluid">
        <div className="row">
          {panelDetails}
        </div>
      </div>
    )
  }

}

export default Gallery