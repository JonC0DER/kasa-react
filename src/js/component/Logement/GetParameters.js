import { useParams } from "react-router-dom";
import LocationData from "../../../assets/datas/logements.json";

function GetParameters(){
    const datas = LocationData;
    const {id} = useParams();
    const params = datas.filter(logement => (logement.id === id)?logement:null);
    return params;
}
//const OptGetParameters = React.memo(GetParameters);

export default GetParameters;