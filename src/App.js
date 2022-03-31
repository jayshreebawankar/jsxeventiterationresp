import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/react-datepicker/dist/react-datepicker.css'
import Subscription from './Component/Subscription.js'
import Navbar from './Component/Navbar.js'
import Container from './Component/Contianer';
import NewSubscriber from './NewSubscription/NewSubscriber';
import Filter from './Component/Filter.js'
import {useState} from 'react';

const Initial_State = [
  {
    id : "01",
    date : (new Date('2022','03', '01')),
    Name : 'Jayshree Bawankar',
    amount : "34.44$"
  },
  {
    id : "02",
    date : (new Date('2018','12', '11')),
    Name : 'Roshan Tambe',
    amount : "39.78 $"
  },
  {
    id : "03",
    date : (new Date('2011','06', '02')),
    Name : 'Saurabh Jagthap',
    amount : "68.324 $"
  }
]

const App = () => {
  const [database, setDatabase] = useState(Initial_State)
  const [onFilter, setFilter] = useState('2000')

  const appFuncionHandler =(newUser)=>{
    // Subscriber.push(newUser)
    setDatabase((preventState)=>{return[newUser,...preventState]})
    console.log('Updated Database : ',database);
    // console.log('In App:',newUser, Subscriber);
  }
  
  const onFilterHandler=(option)=>{
    setFilter(option)
    // console.log('selected year : ',option);
  }

  // console.log(Subscriber[0].date);
  return(<>
    <Filter onFilter={onFilterHandler} filterData = {onFilter}/>
    <NewSubscriber appFuncion = {appFuncionHandler}/>
    <Container>
      <Navbar/>
      {database.map(prevent=><Subscription key={prevent.id} date={prevent.date} name={prevent.Name} amount={prevent.amount}/>)}
      
      {/* <Subscription date = {Subscriber[0].date} name = {Subscriber[0].Name} amount = {Subscriber[0].amount}/>
      <Subscription date = {Subscriber[1].date} name = {Subscriber[1].Name} amount = {Subscriber[1].amount}/>
      <Subscription date = {Subscriber[2].date} name = {Subscriber[2].Name} amount = {Subscriber[2].amount}/> */}
    </Container>    
  </>
  );
}

export default App;
