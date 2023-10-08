const Filters = ({ filters, setFilters }) => {
  return (
    <div className='filter'>
      <div className='filters'>
        {filters.map((filter, idx) => {
          return (
            <span key={idx}>{filter}</span>
          )
        })}
      </div>
      <span onClick={() => setFilters([])}>clear</span>
    </div>
  )
}

export default Filters;