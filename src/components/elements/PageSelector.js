import React from 'react'

const PageSelector = (props) => {

  const {pageCount, ...otherProps} = props

  const pageNumbers = pageCount.map((pageNumber) => {
    return <button className="btn btn-default" value={pageNumber} key={pageNumber} >{pageNumber}</button>
  })

  return (
    <div {...otherProps}>
      {pageNumbers}
    </div>
  )

}

export default PageSelector