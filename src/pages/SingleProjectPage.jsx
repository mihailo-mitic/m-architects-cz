import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
import left from "../assets/icons/chevron_left.svg";

const SingleProjectPage = () => {
  const context = useContext(AppContext);
  const { description } = context.projectData;

  const [mainImage, setMainImage] = useState(
    context.projectData.images[0].image
  );
  const [sideImages, setSideImages] = useState(
    context.projectData.images.slice(1)
  );

  const handleClick = (id) => {
    setMainImage(context.projectData.images[id].image);
    setSideImages(
      context.projectData.images.filter((image) => image.id !== id)
    );
  };

  return (
    <>
      <div className='single-project-root'>
        <div className='single-project-container'>
          <div className='single-project-img-big'>
            <img src={mainImage} className='single-project-img-big' />
          </div>
          {sideImages.map((image) => {
            return (
              <div className='single-project-img-small' key={image.id}>
                <img
                  src={image.image}
                  className='single-project-img-small'
                  onClick={() => handleClick(image.id)}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className='description-root'>
        <div className='description-container'>
          <p>{description}</p>
        </div>
      </div>
      <Link to='/'>
        <div className='icon-back'>
          <img src={left} alt='left.svg' />
        </div>
      </Link>
    </>
  );
};
export default SingleProjectPage;
