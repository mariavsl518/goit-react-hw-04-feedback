import React from 'react'
import css from './Statistics.module.css'
import { Notification } from 'components/notification/Notification'


export const Statistics = ({
    good,
    neutral, 
    bad,
    total,
    positivePercentage,

}) => {

    if(good===0 && neutral===0 && bad===0)
    {return (<Notification message="There is no feedback 😕"></Notification>)}
    else{
    return (<ul className={css.statList}>
        <li>Good:{good}</li>
        <li>Neutral:{neutral}</li>
        <li>Bad:{bad}</li>
        <li>Total:{total}</li>
        <li>Positive feedback:{positivePercentage()||0}%</li>
    </ul>)}
}
