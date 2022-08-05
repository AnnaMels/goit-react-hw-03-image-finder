import { Component } from "react";
import Form from '../Searchbar';
import ImageGallery from "../ImageGallery";
import Loader from '../Loader';
import Button from '../Button';
import Modal from '../Modal';


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
    const API_KEY = '22781965-6f9dce81fb9780324cf438200';
    const { inputValue, page } = this.state;

        if (prevState.inputValue !== inputValue || prevState.page !== page) {

            this.setState({ loading: true });

          fetch(`https://pixabay.com/api/?q=${this.state.inputValue}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
            .then(r => r.json())
            .then(images =>
            {
              if (prevState.inputValue === inputValue) {
              this.setState({ images: [...prevState.images, ...images.hits] });
              } else {
                this.setState({ images: images.hits });
              }
            })
            .finally(() => this.setState({ loading: false }));
        } 
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


