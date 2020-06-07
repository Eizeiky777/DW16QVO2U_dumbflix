import React, { Component } from 'react';

import HeaderMdetail from "./header";

class Detail extends Component {


    render(){
        let { id, genre, status }  = this.props.match.params;

        return (
            <div>
                ID : {id} {genre} {status}
                <HeaderMdetail id={id} genre={genre} status={status}/>
            </div>        
        );
    }
}

export default Detail;
