import { Component } from "react";
import Form from './Searchbar';
import ImageGallery from "./ImageGallery";
import Loader from './Loader';
import Button from './Button';


export class App extends Component {
  state = {
    images: [],
    inputValue: '',
    page: 1,
    loading: false, 
  };

  componentDidUpdate(prevProps, prevState) {
    const API_KEY = '22781965-6f9dce81fb9780324cf438200';

        if (prevState.inputValue !== this.state.inputValue) {

            this.setState({ loading: true });

          fetch(`https://pixabay.com/api/?q=${this.state.inputValue}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
            .then(r => r.json())
            .then(images => { 
              this.setState({ images: images.hits });
            })
            .finally(() => this.setState({ loading: false }));
    };    
  };
  
  submitHandler = (value) => {
    this.setState({ inputValue: value, page: 1 });
  }

  onLoadMoreClick = () => {
    // console.log(this.state.page);
    this.setState(prevState => ({
      page: prevState.page + 1,
    })
    );

  };

  render() {
    // console.log(this.state.page)
    return (
      <>
        <Form onSubmit={this.submitHandler}></Form>
        {this.state.loading && <Loader/>}  
        <ImageGallery inputValue={this.state.inputValue} images={this.state.images} />
        {this.state.images.length !== 0 && <Button onClick={this.onLoadMoreClick}/>}
        </>
      )
    }
}


