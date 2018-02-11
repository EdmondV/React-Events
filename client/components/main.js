import React, { Component } from 'react'
import { connect } from 'react-redux'
import EventList from './event-list'
import { sortPrice } from '../helpers/sort-helper'
import Header from './header'
import Aside from './aside'
import '../style/main.css'

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedFilter: localStorage.getItem(`/filter-${props.location}`),
      selectedSorting: localStorage.getItem(`/sort-${props.location}`),
      sortedEvents: undefined,
    }
  }
  componentWillReceiveProps (nextProps) {
    const { location } = this.props
    if (nextProps.location !== location) {
      this.setState({
        sortedEvents: undefined,
        selectedFilter: localStorage.getItem(`/filter-${nextProps.location}`),
        selectedSorting: localStorage.getItem(`/sort-${nextProps.location}`),
      })
    }
  }
  render() {
    const {
      events,
      location,
      updateState,
      addToFavorites } = this.props
    const {
      sortedEvents,
      selectedFilter,
      selectedSorting } = this.state
    let eventsList = sortedEvents || events
    if (selectedSorting) eventsList.sort(sortPrice(selectedSorting))
    if (selectedFilter) eventsList = eventsList.filter(event => event.type === selectedFilter)
    return (
      <div className="app">
        <div className='reducer'>
          <Header updateState={updateState} location={location} />
          <Aside
            selectedSorting={selectedSorting}
            selectedFilter={selectedFilter}
            addFilter={({ data }) => {
              this.setState({ selectedFilter: data })
              localStorage.setItem(`/filter-${location}`, data)
            }}
            addSort={({ data }) => {
              this.setState({ selectedSorting: data })
              localStorage.setItem(`/sort-${location}`, data)
            }}
            searchInfo={
              ({ data }) => this.setState({
                sortedEvents: events.filter((event) =>
                  event.title.toLowerCase().includes(data.toLowerCase()) ||
                  event.description.toLowerCase().includes(data.toLowerCase())
                )
              })
            }
          />
          <EventList
            events={eventsList}
            addToFavorites={addToFavorites}
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    events: state.req.location === 'Events'
            ? state.req.events
            : state.req.events.filter((event, i) => event.favorite === true),
    location: state.req.location,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateState: (data) => dispatch({ type: 'UPDATE_STATE', data: data }),
    addToFavorites: (data) => dispatch({ type: 'ADD_TO_FAVORITES', data: data })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
