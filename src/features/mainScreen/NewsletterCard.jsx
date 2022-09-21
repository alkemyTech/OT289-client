import React from 'react'

const NewsletterCard = () => {
  return (
    <div className='card-container'>
        <div className='img-container'>
            <img  src="images/campaign-big-item.jpg" alt="Not found" width="150" height="150"/>
        </div>
        <div className='info-container'>
            <div className='preview-container'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci accusantium animi quasi nulla obcaecati vero id, quo voluptates necessitatibus. Mollitia eum necessitatibus harum laborum repudiandae doloremque veniam commodi. Obcaecati, ipsa?</p>
            </div>
            <div className='button-card'>
                <button>View More</button>
            </div>
        </div>

    </div>
  )
}

export default NewsletterCard