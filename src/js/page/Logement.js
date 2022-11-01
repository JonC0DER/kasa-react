import React, { useState } from "react";
import Carrousel from '../component/Logement/carrousel';
import Details from '../component/Logement/details';
import Owner from '../component/Logement/owner';
import ContentTxt from '../component/Logement/contentText';
import GetParameters from "../component/Logement/GetParameters";
import { Navigate } from "react-router-dom";

function Logement(props){
    const [datas] = GetParameters();
    const [state] = useState({datas});

    return(
        <section className="content">
            {state.datas?
            <>
            <Carrousel  data={state.datas} />
            <Details    data={state.datas} />
            <Owner      data={state.datas} />
            <ContentTxt data={state.datas} />
            </>
            : <Navigate to="/*" />}
        </section>
    );
}

export default Logement;