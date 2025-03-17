import Links from './Links'

function Bookmark() {

    return (
        <div className='text-zinc-200 rounded-xl w-120 px-4 p-2'>
            <h1 className='text-[1.2em] font-bold text-center mb-7'>Bookmarks</h1>
            <div className='grid grid-cols-2 items-center justify-center gap-10'>
               <Links title="Reddit" url1='' url2='' url3='' url4='' name1='reddit' name2='r/unixporn' name3='r/startpages' name4='r/linuxbrasil'/> 
               <Links title="Social" url1='' url2='' url3='' url4='' name1='youtube' name2='instagram' name3='myanimelist' name4='pinterest'/> 
               <Links title="Piracy" url1='' url2='' url3='' url4='' name1='piracy.link' name2='fmhy' name3='redAnimes' name4='betteranimes'/> 
               <Links title="More" url1='' url2='' url3='' url4='' name1='chatgpt' name2='wikipedia' name3='tailwind' name4='w3schoolsunixporn'/> 
            </div>
        </div>
    )
}

export default Bookmark;
