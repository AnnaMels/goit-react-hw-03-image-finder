export default async function fetchImages(searchQuery, page) {
const API_KEY = '22781965-6f9dce81fb9780324cf438200';

  return await fetch(`https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(r => r.json())
        .then(images => { return images });

}          
