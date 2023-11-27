import React from "react";



const Searcbox = ({ searchChange }) => {
  console.log('SearchBox')
  return (
    <div className="pa2">
      <input
        className="bg-light-blue dib tc br3 pa3 ma2 grow"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  )
}

export default Searcbox