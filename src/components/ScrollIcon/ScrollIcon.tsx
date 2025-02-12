import React from 'react'
import "./styles.css"

import downArrow from "../../assets/svg/down-arrow.svg"

export default function ScrollIcon() {
  return (
    <div className='scroll-container'>
      <img src={downArrow} alt="down arrow" className='floating' />
    </div>
  )
}
