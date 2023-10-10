import iconRmv from '../assets/images/icon-remove.svg'

const Filters = ({ filters, setFilters, removeFilter }) => {
  return (
    <div className='filter'>
      <div className='filters'>
        {filters.map((fil, idx) => {
          return (
            <div key={idx} className="tag">
              <span>{fil}</span>
              <img src={iconRmv} alt="icon-remove" onClick={() => removeFilter(fil)} />
            </div>
          )
        })}
      </div>
      <span onClick={() => setFilters([])}>clear</span>
    </div>
  )
}

export default Filters;