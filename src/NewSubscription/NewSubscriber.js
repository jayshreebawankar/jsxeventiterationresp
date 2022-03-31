import FormSubmition from './FormSubmition.js'

const NewSubscriber =(props)=> {

    let newFunctionHandler =(userData)=>{
        let pdf = {...userData, id:Math.random().toString()}
        // console.log('In NewSubcriber : ', userData);
        props.appFuncion(pdf)
    }

    return <FormSubmition newFunction = {newFunctionHandler}/>
}
export default NewSubscriber;