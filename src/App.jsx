import { useState } from 'react'
import { Filters, Listing } from './components'
import { listings as data } from './utils/data'
import './App.css'

const App = () => {
  const [listings, setListings] = useState(data)
  const [filters, setFilters] = useState([])

  const handleSelect = (value, tags) => {
    const newFilters = [...filters, !filters.includes(value) && value]
      .filter(filter => filter)
    setFilters(newFilters)

    console.log(tags);
  }

  const removeFilter = (filter) => {
    const filtered = [...filters].filter(filter_ => filter_ !== filter)
    setFilters(filtered)
  }

  return (
    <div className='container'>
      {filters.length > 0
        && <Filters
          setFilters={setFilters}
          filters={filters}
          removeFilter={removeFilter}
        />}

      {listings.map(listing => {
        return <Listing
          key={listing.id}
          {...listing}
          handleSelect={handleSelect}
        />
      })}
    </div>
  )
}

export default App