import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CelebrityList from "./components/CelebrityList";
import CelebrityCreate from "./components/CelebrityCreate";
import Modal from 'react-modal';

class App extends Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false
        };
    }

    openModal = () => {
        this.setState({modalIsOpen: true});
    }
    closeModal = () => {
        this.setState({modalIsOpen: false});
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <button onClick={this.openModal}>Add new celebrity</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal"
                >

                    <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
                    <button onClick={this.closeModal}>close</button>
                    <div>I am a modal</div>
                    <CelebrityCreate />
                </Modal>
                <CelebrityList/>
            </div>
        );
    }
}

export default App;
