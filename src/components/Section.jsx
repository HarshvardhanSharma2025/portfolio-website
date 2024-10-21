import React from 'react'

const Section = ({ bgClass, shadowClass, headline, subheading }) => {
  return (
    <div className={`${bgClass} me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden`}>
        <div className="my-3 p-3">
            <h2 className="display-5">{headline}</h2>
            <p className="lead">{subheading}</p>
        </div>
        <div
            className={`${shadowClass} shadow-sm mx-auto`}
            style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}
        ></div>
    </div>
  )
}

export default Section;