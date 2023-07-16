function List({id,layout='a', items=['alpha','beta']}){


    return(
        <ol   type={(layout=="alpha")?'a':(layout=="numeric")?'1':(layout=="roman")?'I':null}>
            {items.map(x=>{return <li key={id}>{x}</li>})}
        </ol>
    )
}

export default List;