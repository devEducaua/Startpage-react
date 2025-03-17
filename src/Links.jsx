
function Links(props) {

    return (
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-zinc-200 text-[1.2em] font-bold'>{props.title}</h1>
            <a href={props.url1}>{props.name1}</a>
            <a href={props.url2}>{props.name2}</a>
            <a href={props.url3}>{props.name3}</a>
            <a href={props.url4}>{props.name4}</a>
        </div>
    )
}

export default Links;
