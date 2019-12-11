import React from 'react'

const StorySearch = (props) => {


  return(

    <form>
    <input
    type="text"
    placeholder="Search for story"
    onChange={props.handleInput}/>
    </form>

  )
}


export default StorySearch
