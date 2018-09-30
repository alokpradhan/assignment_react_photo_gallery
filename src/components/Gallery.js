import React, {Component} from 'react'
import instagramResponse from '../photos'
import PhotoPanel from './elements/photoPanel'
import Filter from './elements/Filter'

const filters = ['View All', 'Normal', 'Lark', 'Inkwell', 'Ludwig', 'Reyes']

class Gallery extends Component {

  constructor(){
    super()
    this.state = {
      filter: "View All", 
      imageCount: null, 
      page: "1" 
    }
  }

  onChangeInput = (event, imagesRendered) => {
    this.setState({
      [event.target.name] : event.target.value,
      imageCount: imagesRendered
    })
  }

  render(){

    const {filter, page} = this.state
    let imagesRendered = 0

    // Need to add page numbers
    const panelDetails = instagramResponse.data.map((panel) => {
        if(filter === "View All" || panel.filter === filter){
          imagesRendered = imagesRendered + 1
          return <PhotoPanel panel={panel} key={panel.id} />
        }
      }
    )

    return(
      <div className="container-fluid">
        <Filter 
          name="filter"
          options={filters}
          value={filter}
          onChange={(event) => this.onChangeInput(event, imagesRendered)}
          imageCount={imagesRendered}
        />

        <div className="row">
          {panelDetails}
        </div>
        {/* Replace the row above w/ Page */}
        {/* <Page page={page}>
          {panelDetails}
        </Page> */}
      </div>
    )
  }

}

export default Gallery