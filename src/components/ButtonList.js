import React from 'react'
import Button from './Button';

// const list=["All", "Gaming", "Songs", "Live"];
// const listItems = list.map((number) =>
//   <li>{number}</li>
// );

const ButtonList = () => {
  return (
    <div>
      <Button name="ALL"/>
      <Button name="Gaming"/>
      <Button name="Songs"/>
      <Button name="Live"/>
      <Button name="Soccer"/>
      <Button name="Cricket"/>
      <Button name="Cooking"/>
      <Button name="Valentines"/>
       <Button name="BigBoss"/>
      
    </div>
  )
}

export default ButtonList;