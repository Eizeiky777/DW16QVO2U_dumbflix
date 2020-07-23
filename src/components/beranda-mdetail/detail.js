import React from 'react';
import { useHistory } from "react-router-dom";
import HeaderMdetail from "./header";
import Header from "../beranda/header";



const Detail = ({ match }) => {

    const history = useHistory();
    const { id, genre, status }  = match.params;
    const token = localStorage.getItem("token");

    let posted = false;
    if( (status === "admin" || status === "user") &&  token !== null ){
        posted = true;
    }else{

        history.push('/');
    }

    return (
        <div>
            { !posted && ( <Header /> )}
            { posted && ( <HeaderMdetail id={id} genre={genre} status={status}/> )}
        </div>        
    );
}

export default Detail;

// END of Modal function

// let tokens = localStorage.getItem('token');
// if(tokens === null ){
//     const history = useHistory();
//     let path = `/`; 
//     history.replace(path);
// }