import React, { Component } from "react";
import { Link } from "react-router-dom";
import LocationData from "../../../assets/datas/logements.json";

/*function LinkToLogement(params){
    const navigate = useNavigate();
    navigate("/logement", params);
}*/

class ArticleThumb extends Component{
    constructor(props){
        super(props);
        this.datas = LocationData;
        //this.linkToLogement = LinkToLogement;
    }
   
    render(){
        return (
            this.datas.map((logement, key) => 
                <article key={key}
                 data-id={logement.id} 
                 className="thumb"
                 /*onClick={this.linkToLogement(logement.id)}*/>
                    <Link to={`/logement/${logement.id}`}>
                    <figure>
                        <img src={logement.cover} alt="logement cover" />
                        <figcaption>
                            <h3>{logement.title}</h3>
                        </figcaption>
                    </figure>
                    </Link>
                </article>
            )
        ); 
    }
}

export default ArticleThumb;