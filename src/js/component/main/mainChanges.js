import { Routes, Route } from 'react-router-dom';
import Home from '../../page/Home';
import About from '../../page/About';
import Logement from '../../page/Logement';
import ErrorPage from '../../page/Error';

function MainChanges() {
    return (  
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kasa-react" element={<Home />} />
            <Route path="/kasa-react/apropos" element={<About />} />
            <Route path="/kasa-react/logement/:id" element={<Logement />} />
            <Route path="/*" element={<ErrorPage />}/>
            <Route path="/kasa-react/*" element={<ErrorPage />}/>
        </Routes>
    );
}

export default MainChanges;