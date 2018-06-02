import React, {Component} from 'react';
import './App.css';
import Projects from './components/Projects/Projects';
import Header from './components/Header/Header';
import ToolsList from './components/ToolsList/ToolsList';
import Footer from './components/Footer/Footer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Projects/>
                <ToolsList />
                <Footer />
            </div>
        );
    }
}

export default App;
