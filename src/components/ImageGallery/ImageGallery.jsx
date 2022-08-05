import { Component } from "react";
import ImageGalleryItem from '../ImageGalleryItem';
// import Button from "../Button";
// import Loader from "../Loader";

export default class ImageGallery extends Component {
    state = {
        // images: [],
        // page: 1, 
    }


    render() {
        const { images } = this.props;
        return (
            <>                
                {<ul className="gallery">
                    {images.map(({ id, webformatURL, largeImageURL, tags }) => <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} tags={tags}/>)}
                </ul>}
            </>
        );
};
}

