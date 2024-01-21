import './App.css';
import { Route, Routes} from 'react-router-dom';
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
      <Routes basename="/" >
        <Route  path='/' element={<HomePage/>}/>
        <Route  path='/swayam-main' element={<HomePage/>}/>
        <Route  path='/team' element={<TeamPage/>}/>
        <Route  path='/contact' element={<ContactUsPage/>}/>
        <Route  path='/about' element={<AboutUsPage/>}/>
        <Route  path='/blogs' element={<BlogPage/>}/>
        <Route  path='/events' element={<Event/>}/>
        <Route  path='/getinvolved' element={<GetInvolved/>}/>
        <Route  path='/blog/:id' element={<IndividualBlog />} />
        <Route  path='/event/' element={<Individualevent />} />
      </Routes >
    </>
  );
}
export default App;
