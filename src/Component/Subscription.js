// import { useState } from 'react';
import { useState } from 'react'
import SubscriptionDate from './SubscriptionDate.js'
import Container from './Contianer.js'

const Subscription =(props)=> { 

    const [name, setName] = useState(props.name)

    const nameHandler =(e)=>{
        // e.preventDefault()
        setName('abhishek mahajan')
    }

    return(
        <Container className ='navbar primary-bg'>
            <SubscriptionDate date={props.date}/>   
            <div>{name}</div>
            <div>{props.amount}</div>
            <button type='button' name='changeButton' id='changeButton' onClick={nameHandler}>Change</button>
        </Container>
    )
}
export default Subscription;