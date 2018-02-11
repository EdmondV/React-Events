import React from 'react'
import EventCard from './event-card'


const EventList = ({ events, updateState, isModalOpen, addToFavorites }) => {
  const list = events.map((event, i) => {
    return (
      <EventCard addToFavorites={addToFavorites} key={i} card={event} />
    )
  })
  return (
    <div className='event-list'>
      {list}
    </div>
  )
}

export default EventList
