import React from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"; 
import './newarr.css';

function NewAr() {
  const images = [
    {
      original: "./src/assets/img/New-Arr/gratia/1.png",
      thumbnail: "./src/assets/img/New-Arr/gratia/1.png",
    },
    {
      original: "./src/assets/img/New-Arr/gratia/2.png",
      thumbnail: "./src/assets/img/New-Arr/gratia/2.png",
    },
    {
      original: "./src/assets/img/New-Arr/gratia/3.png",
      thumbnail: "./src/assets/img/New-Arr/gratia/3.png",
    },
    {
      original: "./src/assets/img/New-Arr/gratia/4.png",
      thumbnail: "./src/assets/img/New-Arr/gratia/4.png",
    },
    {
      original: "./src/assets/img/myimage/Involve/1.png",
      thumbnail: "./src/assets/img/myimage/Involve/1.png",
    },
    {
      original: "./src/assets/img/myimage/Involve/2.png",
      thumbnail: "./src/assets/img/myimage/Involve/2.png",
    },
    {
      original: "./src/assets/img/myimage/Involve/3.png",
      thumbnail: "./src/assets/img/myimage/Involve/3.png",
    },
    {
      original: "./src/assets/img/myimage/Involve/4.png",
      thumbnail: "./src/assets/img/myimage/Involve/4.png",
    },
    {
      original: "./src/assets/img/myimage/Swiss%20military/1.png",
      thumbnail: "./src/assets/img/myimage/Swiss%20military/1.png",
    },
    {
      original: "./src/assets/img/myimage/Swiss%20military/2.png",
      thumbnail: "./src/assets/img/myimage/Swiss%20military/2.png",
    },
    {
      original: "./src/assets/img/myimage/Swiss%20military/3.png",
      thumbnail: "./src/assets/img/myimage/Swiss%20military/3.png",
    },
    {
      original: "./src/assets/img/myimage/Swiss%20military/4.png",
      thumbnail: "./src/assets/img/myimage/Swiss%20military/4.png",
    } 
  ];

  // Custom render function for thumbnails
  const renderThumbInner = (item) => {
    return (
      <div className="image-gallery-thumbnail-inner">
        <img src={item.thumbnail} alt={item.original} />
      </div>
    );
  };

  return (
    <div>
      <section className='product__details--section section--padding project__section--bg'>
        <div className='container'>
          <div className="product__details--inner">
            <div className='row row-cols-lg-1 row-cols-md-1'>
              <div className='col'>
                <div className='product__media--nav__items'>
                  <ImageGallery
                    items={images}
                    renderThumbInner={renderThumbInner} // Custom render function for thumbnails
                    showThumbnails={true} // Show thumbnails
                    thumbnailPosition="left" // Position thumbnails to the left
                    showNav={false}
                    lazyLoad={true}
                    showFullscreenButton={false}
                    autoPlay={true}

                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewAr;
