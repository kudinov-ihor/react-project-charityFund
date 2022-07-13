import React from 'react';
import './gallery.scss';
import Gallery from 'react-grid-gallery';
import galleryPhoto1 from '../../assets/img/project_castle/project_castle_contant_photo1.jpg';
import galleryPhoto2 from '../../assets/img/project_castle/project_castle_contant_photo2.webp';
import galleryPhoto3 from '../../assets/img/project_castle/project_castle_contant_photo3.webp';
import galleryPhoto4 from '../../assets/img/project_castle/project_castle_contant_photo4.webp';


function GalleryCastle() {
    const images =
    [{
            src: galleryPhoto1,
            alt: 'galleryPhoto1',
            thumbnail: galleryPhoto1,
            thumbnailWidth: 320,
            thumbnailHeight: 174
    },
    {
            src: galleryPhoto2,
            thumbnail: galleryPhoto2,
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    
    {
            src: galleryPhoto3 ,
            thumbnail: galleryPhoto3,
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
        src: galleryPhoto4,
        thumbnail: galleryPhoto4,
        thumbnailWidth: 320,
        thumbnailHeight: 212
    }]
  return (
    <section class="project-gallery">
        <div class="container">
                <Gallery enableImageSelection={false} images={images}/>
        </div>
    </section>
  );
}

export default GalleryCastle