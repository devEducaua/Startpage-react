
function Search() {

    return (
        <form action="https://duckduckgo.com/" method="GET" className=' mt-10 rounded-lg'>
                <input className='text-[1.3em] outline-none p-2' placeholder='Search...' type="text" name="q"/>
        </form>
    )
}

export default Search;
