import { useState } from 'react'
import Listing from './Listing'
import { listings as data } from './data'
import './App.css'
import Filters from './Filters'

const App = () => {
  const [listings, setListings] = useState(data)
  const [filters, setFilters] = useState([])

  const handleSelect = (value) => {
    const newFilters = [...filters, !filters.includes(value) && value]
      .filter(filter => filter)
    setFilters(newFilters)
  }

  return <div className='container'>
    {filters.length > 0
      && <Filters setFilters={setFilters} filters={filters} />}

    {listings.map(listing => {
      return <Listing
        key={listing.id}
        {...listing}
        handleSelect={handleSelect}
      />
    })}
  </div>
}

export default App