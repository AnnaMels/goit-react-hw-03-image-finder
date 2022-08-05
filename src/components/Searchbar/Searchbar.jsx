import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Component } from "react";
import { Header } from './Searchbar.styled';
import { SearchForm } from './Searchbar.styled';
import { SearchBtn } from './Searchbar.styled';
import { ButtonLabel } from './Searchbar.styled';
import { Input } from './Searchbar.styled';

export default class Form extends Component {
    state = {
        inputValue: '',
    }

    static propTypes = {
        onSubmit: PropTypes.func,
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
            <Header>
                <SearchForm onSubmit={this.onSubmit}>
                    <SearchBtn type="submit" >
                        <ButtonLabel>Search</ButtonLabel>
                    </SearchBtn>
                    <ToastContainer />
                    <Input
                        onChange={this.inputHandler}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.inputValue}
                    />
                </SearchForm>
            </Header>
        );
    }
}

