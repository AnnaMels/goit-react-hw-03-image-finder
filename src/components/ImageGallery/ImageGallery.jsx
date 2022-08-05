import PropTypes from 'prop-types';
import { Component } from "react";
import ImageGalleryItem from '../ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export default class ImageGallery extends Component {
    static propTypes = {
        images: PropTypes.array,
        onClick: PropTypes.func,
    }

    render() {
        const { images, onClick } = this.props;
        return (
            <>                
                {<Gallery onClick={onClick} className="gallery"> 
                    {images.map(({ id, webformatURL, largeImageURL, tags }) => <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} tags={tags}/>)}
                </Gallery>}
            </>
        );
};
}

