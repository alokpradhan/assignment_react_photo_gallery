import React from 'react'

const PhotoPanel = ({panel}) => {

  return (
    <div className="photo-panel col-sm-4" key={panel.id}>
        
      <div className="photo-panel-header">
        <p>
          <span className="glyphicon glyphicon-user"></span>
          {" " + panel.user.username} at {new Date(panel.created_time*1000).toDateString()} 
        </p>
      </div>

      <img src={panel.images.standard_resolution.url}
          className="img-fluid photo"
          alt="Posted"
      />

      <div className="photo-panel-footer">
        <p>
          <span className="glyphicon glyphicon-fire"></span>
          {" " + panel.likes.count}
        </p>

        { panel.tags[0] !== undefined && 
          <p>
              <span className="glyphicon glyphicon-tags"></span>
              {" " + panel.tags.join(", ")}
          </p> 
        } 

        <p>
          <span className="glyphicon glyphicon-filter"></span>
          {" " + panel.filter}
        </p>
      </div>

    </div>

  )
}

export default PhotoPanel