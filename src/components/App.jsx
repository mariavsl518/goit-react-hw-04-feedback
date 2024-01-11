import { Component, useEffect, useState } from "react";
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

  const [good, setGoodState ] = useState(0)
  const [neutral, setNeutralState ] = useState(0)
  const [bad, setBadState ] = useState(0)

  const handleClick = evt => {
    const name = evt.target.id;
    console.log(this.state);
    switch(name){
      case 'good':
        setGoodState((prevState)=> prevState+1);
        break;
      case 'neutral':
        setNeutralState((prevState)=> prevState+1)
        break;
      case 'bad':
        setBadState((prevState)=> prevState+1)
        break;
    }
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
      options={[good, neutral, bad]} 
      onLeaveFeedback={handleClick}>
      </FeedbackOptions>
      </Section>
      
      <Section title='Statistics'>
  
      <Statistics
      good={goodState} 
      neutral={neutralState} 
      bad={badState} 
      total={countTotalFeedback()} 
      positivePercentage={countPositiveFeedbackPercentage}>
      </Statistics>
      </Section>
      </div>
    ); 
}

