import React, { Component } from 'react';
import Fetch from 'react-fetch';
import Project from '../Components/Project';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = { data: [] }
    }
    componentDidMount() {
        this.getProjects();
    }
    getProjects() {
        fetch('./projects.json')
        .then(response => response.json())
        .then(json => { 
            //re-order array by oldest added to newest
            let objAddedKeys = [];
            for (var i = 0; i < json.projects.length; i++) {
                objAddedKeys.push(json.projects[i]['added']);
            }
            objAddedKeys.sort().reverse();
            
            let sortedData = [];
            for (var m = 0; m < objAddedKeys.length; m++) {
                for (var k = 0; k < json.projects.length; k++) {
                    if (objAddedKeys[m] === json.projects[k]['added']) {
                        sortedData.push(json.projects[k]);
                        break;
                    }
                }
            }
            this.setState({
                data: sortedData
            });
        });
    }
    render() {
        return (
            <div className="app">
                <div className="header">
                    <h1>Projects</h1>
                </div>
                <div className="projects">
                {
                    this.state.data !== undefined &&
                	this.state.data.map(function(project, i) {
                        return (
                            <Project key={ i } project={ project } />
                		)
                	})
                }
                </div>
            </div>
        );
    }
}

export default App;
