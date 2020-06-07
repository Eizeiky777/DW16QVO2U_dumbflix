import React, { Component } from 'react';

import Admin from './admin';
import List from './list';
import ListFilm from './listfilm';
import MovieList from './movielist';

class App extends Component {

    constructor(){
        super()
        this.state = {
            choose: true,
            color: true,
            color2: false
        }

    }

    // componentDidMount() {
    //     this.setState({choose: this.state.choose});
    // }

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
        <div style={{background: 'black'}}>
            <Admin choose={choose} userX={user} pathX={() => this.test(color)} pathY={() => this.test2(color2)}/>
            {
                choose ? (<List />) : (
                    <div> 
                        <div className="pb-5">
                            <ListFilm />
                        </div>
                        <div>
                            <MovieList />
                        </div>
                    </div>
                )
            }
        </div>
        );
    }
}

export default App;
