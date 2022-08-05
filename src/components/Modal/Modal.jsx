import PropTypes from 'prop-types';
import { Component } from "react";
import { Overlay, ModalW } from "./Modal.styled";


export default class Modal extends Component {
    static propTypes = {
        onClose: PropTypes.func,
        image: PropTypes.string,
        alt: PropTypes.string,
    }

    handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

    render() {
        const { image, alt } = this.props;
        return (
            <Overlay onClick={this.handleBackdropClick}>
                <ModalW>
                    <img src={image} alt={alt} />
                </ModalW>
            </Overlay>
        );
    };
}