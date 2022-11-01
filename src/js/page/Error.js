import { Component } from "react";
import {Link, Navigate} from "react-router-dom";

class ErrorPage extends Component{
    sleep(milliseconds){
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
	
    componentDidUpdate() {
        this.sleep(4000).then(() => {
            <Navigate to="/"/>
      	})
    }
    render(){
        return(
            <section className="_404">
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/">Retour à la page d'accueil</Link>
            </section>
        )
    }
}

export default ErrorPage;