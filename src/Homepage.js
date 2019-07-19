import React from 'react';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
class Homepage extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Home/>
            </div>
        );
    }
}
export default Homepage;