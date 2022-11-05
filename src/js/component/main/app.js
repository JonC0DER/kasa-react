import Header from './header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './footer';
import { Component } from 'react';
import Home from '../../page/Home';
import About from '../../page/About';
import Logement from '../../page/Logement';
import ErrorPage from '../../page/Error';

function AppRender() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/kasa-react" element={<Home />} />
                <Route path="/kasa-react/apropos" element={<About />} />
                <Route path="/kasa-react/logement/:id" element={<Logement />} />
                <Route path="/*" element={<ErrorPage />}/>
                <Route path="/kasa-react/*" element={<ErrorPage />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

class App extends Component{

    render(){
        return(
            <AppRender />
        );
    }
}

export default App;