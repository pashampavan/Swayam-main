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
      <Routes basename="/swayam-main">
        <Route exact path='/swayam-main' element={<HomePage/>}/>
        <Route exact path='/' element={<HomePage/>}/>
        <Route exact path='/team' element={<TeamPage/>}/>
        <Route exact path='/contact' element={<ContactUsPage/>}/>
        <Route exact path='/about' element={<AboutUsPage/>}/>
        <Route exact path='/blogs' element={<BlogPage/>}/>
        <Route exact path='/events' element={<Event/>}/>
        <Route exact path='/getinvolved' element={<GetInvolved/>}/>
        <Route exact path='/blog/:id' element={<IndividualBlog />} />
        <Route exact path='/event' element={<Individualevent />} />
      </Routes >
    </>
  );
}
export default App;
