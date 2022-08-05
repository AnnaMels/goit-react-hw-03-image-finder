import PropTypes from 'prop-types';
import { Item } from './ImageGalleryItem.styled';
import { Image } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({ webformatURL, largeImageURL, tags }) {
    return (
        <Item >
            <Image src={webformatURL} alt={tags} data-fullsize={largeImageURL}/>
        </Item>
    );
}

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string,
    tags: PropTypes.string, 
};