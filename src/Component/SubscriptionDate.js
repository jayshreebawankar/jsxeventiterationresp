const SubscriptionDate =(props)=>{

    let day = props.date.toLocaleString('default', {day : '2-digit'});
    let month = props.date.toLocaleString('default', {month: 'long'});
    let year = props.date.getFullYear();

    return(
        <>
        <div>
            <div>{day}</div>
            <div>{month}</div>
            <div>{year}</div>
        </div>
        </>
    )
}
export default SubscriptionDate;