import React, { Component } from 'react';

import Admin from './admin';
import List from './list';
import ListFilm from './listfilm';
// import MovieList from './movielist';




class AppAdmin extends Component {

    constructor(){
        super()
        this.state = {
            choose: true,
            color: true,
            color2: false
        }

    }

    // componentWillUnmount(){
    //     this.setState({choose: !this.state.choose});
    // }
    
    test(x){
        console.log(x);
        this.setState({choose: false});
    }

    
    test2(y){
        console.log(y);
        this.setState({choose: true});
    }

    

    render(){
        let { user }  = this.props.match.params;
        const { choose, color, color2 } = this.state;
    

        return (
        <div style={{background: 'black', height: '100vh'}}>
            <Admin 
                userX={user} pathX={() => this.test(color)} 
                pathY={() => this.test2(color2)}
            />
            {
                choose ? (<List />) : (
                    <div>
                        <ListFilm choose={choose}/>
                    </div>
                )
            }
        </div>
        );
    }
}


export default AppAdmin;