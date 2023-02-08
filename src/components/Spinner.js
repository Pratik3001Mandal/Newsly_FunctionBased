import React from 'react'

const Spinner = () => {
    return (
      <div className="text-center">
        <div className="spinner-border text-success m-5 justify-content-center" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
}

export default Spinner