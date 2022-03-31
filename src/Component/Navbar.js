const Navbar =()=>{
    
    let date = 'Date'
    let title = 'Subscriber'
    let amount = 'Amount'

    return(
        <>
        <nav className="navbar bg-primary" >
            <div>{date}</div>
            <h2>{title}</h2>
            <div>{amount}</div>
            </nav>
        </>
    )
}
export default Navbar;

