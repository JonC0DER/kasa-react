import { Routes, Route } from 'react-router-dom';
import Home from '../../page/Home';
import About from '../../page/About';
import Logement from '../../page/Logement';
import ErrorPage from '../../page/Error';

function MainChanges() {
    return (  
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apropos" element={<About />} />
            <Route path="/logement/:id" element={<Logement />} />
            <Route path="/*" element={<ErrorPage />} />
        </Routes>
    );
}

export default MainChanges;