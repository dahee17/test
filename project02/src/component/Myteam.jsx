import React from 'react'

const Myteam = (props) => {
    // {
    //     tName:"교육운영부",
    //     name : "선영표"
    // }
    let myStyle={
        border : '10px solid'
    }
  return (
    <div style={{
        border : '10px solid'
    }}>
        <p>{props.tName}</p>
        <p>{props.name}</p>
    </div>
  )
}

export default Myteam