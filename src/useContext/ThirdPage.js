import {React, useContext} from 'react'
import { Name,LastName } from '../App'

const ThirdPage = () => {
    const fname = useContext(Name);
    const lname = useContext(LastName);
  return (
    <>
    {/* <Name.Consumer>
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
    </Name.Consumer> */}

<h1>My Name is {fname} {lname}</h1>
                    
    </>
  )
}
//Here everything working fine in the usecase of CPC 
//C - createContext()  C - Provider  C - Consumer

// But now it's making a callback hell Like Structure so we
// have to implement useContext method insted of Consumer
export default ThirdPage