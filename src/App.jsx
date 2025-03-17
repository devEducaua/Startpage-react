import Bookmark from "./Bookmarks"
import Search from "./Search"

function App() {

  return (
    <main className='h-screen bg-zinc-950 flex justify-center items-center'>

        <div className='bg-zinc-950 w-200 h-100 rounded-xl flex overflow-hidden'>

            <aside className='w-80 text-zinc-200 flex flex-col justify-center items-center'>
                    
                <img className='w-70 h-60 border border-zinc-200 rounded-lg' src='../public/green-leaf.jpg'/>
                <Search />

            </aside>

            <Bookmark />
        </div>
    </main>
  )
}

export default App
