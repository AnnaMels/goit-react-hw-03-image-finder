import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Component } from "react";

export default class Form extends Component {
    state = {
        inputValue: '',
    }


    inputHandler = (e) => {
        this.setState({ inputValue: e.currentTarget.value });
    }
 
    onSubmit = (e) => {
        e.preventDefault();

        if (this.state.inputValue.trim() === '') {
            toast.error("please enter a request!")
            return;
        }

        this.props.onSubmit(this.state.inputValue);
        this.setState({ inputValue: '' });
    }

    render() {
        return (
            <header className="searchbar">
                <form className="form" onSubmit={this.onSubmit}>
                    <button type="submit" className="button">
                        <span className="button-label">Search</span>
                    </button>
                    <ToastContainer />
                    <input
                        onChange={this.inputHandler}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.inputValue}
                    />
                </form>
            </header>
        );
    }
}

