import {useState} from 'react'
import './FormSubmition.css'
import DatePicker from 'react-datepicker'

const FormSubmition =(props)=>{
    // const [date, setDate] = useState('');
    // const [name, setName] = useState('');
    // const [amount, setAmount] = useState('');

    const [value, setValue] = useState({date:'', name:'Enter your name', amount:'127'})

    let dateHandler =(events)=> {   
        setValue((preventState)=>{
            return{...preventState, date:events.target.value}
        })
        console.log(value);
        // setValue({...value, date:events.target.value})
        // setDate('Set date :', events, events.target, events.value)
        // console.log(events.target.value);
    }

    let nameHandler =(events)=> {
        setValue((preventState)=>{
            return{...preventState, name:events.target.value}
        })
        // console.log(value);
        // setValue({...value, name:events.target.value})
        // setName('Set name :', events, events.target, events.value)
        // console.log(events.target.value);
    }

    const amountHandler=(events)=>{
        setValue((preventState)=>{
            return{...preventState, amount:events.target.value}
        })
        console.log(value);
    }

    const submitHandler =(events)=>{
        events.preventDefault()
        const Subscriber = {date:new Date(value.date), Name:value.name, amount:value.amount}
        // console.log(Subscriber);
        
        props.newFunction(Subscriber)
        // console.log('In FormSubmition : ',Subscriber);
    }    

    return(
        <> 
        {/* <div>{value}</div>  */}
        <form className='form' onSubmit={submitHandler}>
            <div className='division'>
                <label>Date</label><br/>
                <input type='date'  onChange={dateHandler}></input>

                {/* <div>
                <DatePicker
                    selected={ this.state.startDate }
                    onChange={ this.handleChange }
                    name="startDate"
                    dateFormat="MM/dd/yyyy"
                />
                <button className="btn btn-primary">Show Date</button>
                </div> */}
            </div>
            <div className='division'>
                <label >Name</label><br/>
                <input type='text' value={value.name} onChange={nameHandler}></input>
            </div>
            <div className='division'>
                <label>Amount</label><br/>
                <input type='text' value={value.amount} onChange={amountHandler}></input>  
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>            
        </form>
        </>
    )
}
export default FormSubmition;