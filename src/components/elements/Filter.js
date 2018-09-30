import React from 'react'
import Alert from './Alert'

const Filter = (props) => {

  const {options, imageCount, ...otherProps} = props

  const filterOptions = options.map(option => (
      <option key={option} value={option} >
        {option}
      </option>
    )
  )

  return (
    <div className="row">
      <div className="col-sm-2 col-sm-offset-0" >
        <select className="form-control" {...otherProps} >
          {filterOptions}
        </select>
      </div>
      <div className="col-md-4 col-md-offset-6 ml-auto" >
        <Alert>You are currently viewing {imageCount} images</Alert>
      </div>
    </div>
  )

}

export default Filter