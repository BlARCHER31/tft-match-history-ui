import React from 'react'

const NotFound = () => {
  return (
    <div>
      <React.Fragment className='content'>
        <div className='bg-dark text-secondary px-4 py-5'>
          <div className='py-5'>
            <div className='api-info'>
              <h1 className='display-5 fw-bold ui-heading'>Page Not Found</h1>
            </div>
          </div>
        </div>
      </React.Fragment>
    </div>
  )
}

export default NotFound
