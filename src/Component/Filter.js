const Filter =(props)=> {
    const onSelectHandler=(events)=>{
        console.log('onSelectHandler: ',events.target.value);
        props.onFilter(events.target.value)
    }
    
    return(
        <>
        <label>Select Year</label>
        <select value={props.filterData} onChange={onSelectHandler}>
            <option value='2022'>2022</option>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
            <option value='2019'>2019</option>
            <option value='2018'>2018</option>
        </select>
        </>
    )
}
export default Filter;