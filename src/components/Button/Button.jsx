import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

export default function Button({ onClick }) {
    return (
        <Btn type='submit' onClick={onClick}>LoadMore</Btn>
    );
}

Button.propTypes = {
    onClick: PropTypes.func,
}