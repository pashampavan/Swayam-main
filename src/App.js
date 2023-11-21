import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import TeamPage from './pages/TeamP';
import ContactUsPage from './pages/ContactUsPage';
import AboutUsPage from './pages/AboutUsPage';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogPage from './pages/BlogPage';
import Event from './pages/Event';
import GetInvolved from './pages/GetInvolved';
import IndividualBlog from './pages/individualBlog';
import Individualevent from './pages/Individualevent';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route  path='/' element={<HomePage/>}/>
        <Route  path='/swayam-main' element={<HomePage/>}/>
        <Route  path='/swayam-main/team' element={<TeamPage/>}/>
        <Route  path='/swayam-main/contact' element={<ContactUsPage/>}/>
        <Route  path='/swayam-main/about' element={<AboutUsPage/>}/>
        <Route  path='/swayam-main/blogs' element={<BlogPage/>}/>
        <Route  path='/swayam-main/events' element={<Event/>}/>
        <Route  path='/swayam-main/getinvolved' element={<GetInvolved/>}/>
        <Route  path='/swayam-main/blog/:id' element={<IndividualBlog />} />
        <Route  path='/swayam-main/event' element={<Individualevent />} />
      </Routes >
    </>
  );
}
export default App;
