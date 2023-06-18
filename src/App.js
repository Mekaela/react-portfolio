import './App.css';
import Home from './containers/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './containers/blog/Blog';
import BlogPost from './containers/blogPost/BlogPost';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='' element={<Home />} />
            <Route index element={<Blog />} />
            <Route path='blog' element={<Blog />} />
            <Route path='/blog/:id' element={<BlogPost/>}  />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
