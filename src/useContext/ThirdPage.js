import React from 'react'
import { Name,LastName } from '../App'

const ThirdPage = () => {
  return (
    <>
    <Name.Consumer>
{(first_name)=>{
    
    return(
        <LastName.Consumer>
            {
                (LastName) =>{
                    return(
                        <h1>My Name is {first_name} {LastName}</h1>
                    )
                }
            }

        </LastName.Consumer>
    )
}}
    </Name.Consumer>
    </>
  )
}

export default ThirdPage