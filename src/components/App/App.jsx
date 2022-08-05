import { Component } from "react";
import Form from '../Searchbar';
import ImageGallery from "../ImageGallery";
import Loader from '../Loader';
import Button from '../Button';
import Modal from '../Modal';
import fetchImages from '../../services';

export class App extends Component {
  state = {
    images: [],
    inputValue: '',
    page: 1,
    loading: false,
    showModal: false,
    modalImg: null,
    alt: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { inputValue, page } = this.state;
        if (prevState.inputValue !== inputValue || prevState.page !== page) {

          this.setState({ loading: true });

          fetchImages(inputValue, page)
            .then(images => {
              if (prevState.inputValue === inputValue) {
                this.setState({ images: [...prevState.images, ...images.hits] });
              } else {
                this.setState({ images: images.hits });
              }
            })
            .finally(() => this.setState({ loading: false }));
    };
  };
  
  submitHandler = (value) => {
    this.setState({ inputValue: value });
  }

  onLoadMoreClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    })
    );
  };

  showModal = (e) => {
    if (e.target.nodeName === 'IMG') {
      this.setState({
        showModal: true,
        modalImg: e.target.dataset.fullsize,
        alt: e.target.alt,
      });
    };
  };

  closeModal = () => {
    this.setState({ showModal: false });
  }

  render() {
    const { loading, images, inputValue, showModal, modalImg, alt } = this.state;
    return (
      <>
        <Form onSubmit={this.submitHandler}></Form>
        {loading && <Loader/>}  
        <ImageGallery onClick={this.showModal} inputValue={inputValue} images={images} />
        {images.length !== 0 && <Button onClick={this.onLoadMoreClick} />}
        {showModal && <Modal image={modalImg} alt={alt} onClose={this.closeModal}/>}
        </>
      )
    }
}


