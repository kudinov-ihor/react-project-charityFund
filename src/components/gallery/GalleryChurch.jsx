import React from 'react';
import './gallery.scss';
import Gallery from 'react-grid-gallery';
import galleryPhoto1 from '../../assets/img/project_church/project_church_contant_photo1.webp';
import galleryPhoto2 from '../../assets/img/project_church/project_church_contant_photo2.webp';
import galleryPhoto3 from '../../assets/img/project_church/project_church_contant_photo3.webp';
import galleryPhoto4 from '../../assets/img/project_church/project_church_contant_photo4.webp';
import galleryPhoto5 from '../../assets/img/project_church/project_church_contant_photo5.webp';
export default function GalleryChurch() {
    const images =
    [{
            src: galleryPhoto1,
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
    },
    {
        src: galleryPhoto5,
        thumbnail: galleryPhoto5,
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
