import Header from './header';
import MainChanges from "./mainChanges";
import Footer from './footer';
import { BrowserRouter } from 'react-router-dom';
import { Component } from 'react';

function AppRender() {
    return (
        <BrowserRouter>
            <Header />
            <MainChanges />
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