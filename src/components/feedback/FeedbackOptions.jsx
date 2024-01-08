import React from 'react'
import css from './Feedback.module.css'

export const FeedbackOptions = ({
  onLeaveFeedback, options
    }) => {
  return (
    <ul className={css.buttonList}>
      {options.map(key=>{
        return(
          <li><button id={key} className={css.buttonItem} onClick={onLeaveFeedback}>{key}</button></li>
        )
      })}
    </ul>
  )
}

