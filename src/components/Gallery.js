import React, {Component} from 'react'
import instagramResponse from '../photos'
import PhotoPanel from './elements/photoPanel'
import Filter from './elements/Filter'
import PageSelector from './elements/PageSelector'

const filters = ['View All', 'Normal', 'Lark', 'Inkwell', 'Ludwig', 'Reyes']

class Gallery extends Component {

  constructor(){
    super()
    this.state = {
      filter: "View All", 
      imageCount: null, 
      page: 1 
    }
  }

  onChangeInput = (event, imagesRendered, populatePages) => {
    this.setState({
      [event.target.name] : event.target.value,
      imageCount: imagesRendered,
      page: populatePages[0]
    })
  }

  onPageSelection = (event) => {
    this.setState({
      page: event.target.value
    })
  }

  render(){

    const {filter, page} = this.state
    const imagesRendered = {count: 0}
    const pages = {}

    // Need to add page numbers
    const panelDetails = instagramResponse.data.map((panel) => {
        if(filter === "View All" || panel.filter === filter){
          imagesRendered.count = imagesRendered.count + 1
          return <PhotoPanel panel={panel} key={panel.id} />
        }
      }
    )

    const populatePages = (() => {

      let pageNumber = 0

      if(pages !== {}){ Object.keys(pages).forEach(function(key) { delete pages[key] }) }

      for(let photoPanelCount = 0; photoPanelCount < panelDetails.length; photoPanelCount++){

        if(photoPanelCount % 12 == 0){
          pageNumber+=1
          pages[pageNumber] = []
          imagesRendered.count = 12
        } else {
          imagesRendered.count = photoPanelCount
        }

        pages[pageNumber].push(panelDetails[photoPanelCount])
      }

      return pages
    })()

    return(
      <div className="container-fluid">
        <Filter 
          name="filter"
          options={filters}
          value={filter}
          onChange={(event) => {
              this.onChangeInput(event, imagesRendered.count, populatePages)
            }
          }
          imageCount={imagesRendered.count}
        />

        <PageSelector 
          name="page"
          pageCount={Object.keys(pages)} 
          value={page}
          onClick={this.onPageSelection}
        />

        <div className="row">
          {pages[page]}
        </div>

      </div>
    )
  }

}

export default Gallery