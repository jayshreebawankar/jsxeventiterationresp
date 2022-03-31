import './Container.css'

const Container =(props)=> {
    const classes = 'container '+ props.className;
    // console.log(props.children);
    return <div className={classes}>{props.children}</div>
}   
export default Container;