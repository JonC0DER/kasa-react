import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorPage extends Component{
    sleep(milliseconds){
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
	
    /*componentDidUpdate() {
        this.sleep(4000).then(() => {
            <Navigate to="/kasa-react/*"/>
      	})
    }*/

    render(){
        return(
            <section className="_404">
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/kasa-react">Retour à la page d'accueil</Link>
            </section>
        )
    }
}

export default ErrorPage;