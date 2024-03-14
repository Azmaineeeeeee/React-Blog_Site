import './App.css'
import Header from './header'
import Bookmarks from './components/Bookmarks/bookmarks'
import Blogs from './components/Blogs/blogs'


function App() {
  

  return (
    <div className='mx-20 my-10'>
      
      <Header></Header>
      <div className='flex flex-col lg:flex-row justify-between mt-10 gap-6'>
       <Blogs></Blogs>
       <div className='border border-black lg:w-1/3'><Bookmarks></Bookmarks></div>
      </div>
      
      
      </div>
  )
}

export default App
                                        