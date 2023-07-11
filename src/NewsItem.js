// import React, { Component } from 'react'
export default function NewsItem(props) {


   
    let { title, decription, imageurl, newsurl, author, date, source } = props
    return (
      <div className='my-3'>
        <div className="card" >
          <div className='d-flex justify-content-end position-absolute' style={{right:'0'}}>
            <span className=" badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>
              {source}
            </span>
          </div>
          <img src={imageurl === null ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzDO3EyMka8qZ4eMSO01zbMfE1zNnXWbCzIA&usqp=CAU' : imageurl} className="card-img-top" alt=".." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{decription}</p>
            <p className="card-text"><small className="text-body-secondary">By {!author ? 'unknown' : author}  on {new Date(date).toGMTString()}</small></p>
            <a rel='noreferrer' href={newsurl} target='_blank' className="btn btn-dark btn-sm">Read more</a>
          </div>
        </div>
      </div>
    )
  
}
