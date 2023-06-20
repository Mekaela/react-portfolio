import './App.css';
import Home from './containers/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './containers/blog/Blog';
import BlogPost from './containers/blogPost/BlogPost';
import Faq from './containers/faq/Faq';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='' element={<Home />} />
            <Route index element={<Blog />} />
            <Route path='blog' element={<Blog />} />
            <Route path='/blog/:id' element={<BlogPost/>}  />
            <Route path='faq' element={<Faq />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
