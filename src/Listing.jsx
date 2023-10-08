/* eslint-disable react/prop-types */
import { createTags } from "./createTags"

const Listing = (props) => {
  const {
    company, logo, featured, new_, position, level, postedAt, contract, location, languages, tools, handleSelect, role
  } = props

  const tags = createTags(languages, tools, role, level)

  return <article className="listing">
    <div className="wrapper">
      <img src={logo} alt={company} />
    </div>

    <div className="job-information">
      <div>
        <span className="company">{company}</span>
        {new_ && <span className="new">new!</span>}
        {featured && <span className="featured">featured</span>}
      </div>

      <div>
        <h3 className="job-title">{position}</h3>
      </div>

      <div className="">
        <span>{postedAt}</span>
        <span>&middot;</span>
        <span>{contract}</span>
        <span>&middot;</span>
        <span>{location}</span>
      </div>
    </div>

    <div className="tags">
      {tags.map((tag, idx) => <span
        key={idx}
        onClick={() => handleSelect(tag)}
      >{tag}</span>)}
    </div>
  </article>
}

export default Listing;