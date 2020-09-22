import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import { render } from '@testing-library/react';


class App extends React.Component{
   
    state={lat:null,errorMessage:''};

    componentDidMount()
    {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat:position.coords.latitude}),
            err => this.setState({errorMessage:err.message})
        );
    }

    renderContent(){
        
        if(this.state.errorMessage && ! this.state.errorMessage)
        {
        return<div>Error:{this.state.errorMessage}</div>;
        }

        if(!this.state.errorMessage && this.state.lat){
        return <SeasonDisplay lat={this.state.lat}/>
    }
        return <Spinner message="Please accept the request"/>;
    }
    render(){
        return (
            <div className="borfer red">
                {this.renderContent()}
            </div>
        );
    }
}




ReactDOM.render(<App /> ,document.querySelector('#root'));