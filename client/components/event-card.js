import React from 'react'
import Button from '../common/button'

const EventCard = ({ card, updateState, isModalOpen, addToFavorites }) => {
  return (
    <div className='event-card'>
      <div className='event-card_content'>
        <h1 className='event-name'>{card.title}</h1>
        <span className='event-price'>&#8381; {card.price}</span>
        <Button
          className={card.favorite ? 'favorites-button fav' : 'favorites-button'}
          onClick={() => addToFavorites(card)}>
          Избранное
        </Button>
      </div>
      <div className='event-description'>{card.description}</div>
    </div>
  )
}

export default EventCard
