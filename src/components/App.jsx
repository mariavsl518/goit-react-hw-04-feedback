import { useState } from "react";
import { FeedbackOptions } from "./feedback/FeedbackOptions";
import { Statistics } from "./statistics/Statistics";
import { Section } from "./section/Section";

import React from 'react'

export const App =()=> {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // }

  const [options, setOptions ] = useState({good:0, neutral:0, bad:0})
  const {good, neutral, bad} = options;


  const handleClick = evt => {
    const option = evt.target.id;

    setOptions((prevState)=>({...prevState, [option]:prevState[option]+1}))
  }

  const countTotalFeedback = () =>{
    const total = good+neutral+bad;
    return total
  }

  const countPositiveFeedbackPercentage = () =>{
    const total = countTotalFeedback();
    const percentage = (100*good)/total; 
    return Math.round(percentage)
  }

    return(
      <div>
      <Section title='Please leave a feedback'>
        
      <FeedbackOptions
      options={Object.keys(options)} 
      onLeaveFeedback={handleClick}>
      </FeedbackOptions>
      </Section>
      
      <Section title='Statistics'>
  
      <Statistics
      good={good} 
      neutral={neutral} 
      bad={bad} 
      total={countTotalFeedback()} 
      positivePercentage={countPositiveFeedbackPercentage}>
      </Statistics>
      </Section>
      </div>
    ); 
}

