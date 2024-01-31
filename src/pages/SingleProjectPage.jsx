import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
import left from "../assets/icons/chevron_left.svg";
import ProjectDescription from "../ProjectDescription";

const SingleProjectPage = () => {
  const context = useContext(AppContext);
  const { name, brief, year, description } = context.projectData;

  const [mainImage, setMainImage] = useState(
    context.projectData.images[0].image
  );
  const [sideImages, setSideImages] = useState(
    context.projectData.images.slice(1)
  );

  const handleClick = (id) => {
    /* if id===trenutnoj slici, prikazi sledecu */
    setMainImage(context.projectData.images[id].image);
    setSideImages(
      context.projectData.images.filter((image) => image.id !== id)
    );
  };

  return (
    <>
      <div className='root-container'>
        <div className='page-container'>
          <div className='top-container'>
            <ProjectDescription
              name={name}
              brief={brief}
              description={description}
              year={year}
            />
          </div>

          <div className='middle-container'>
            <div className='grid-container-details-page'>
              <img src={mainImage} className='single-project-img-big' />

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

          <div className='bottom-container'>
            <div className='project-description-bottom-container'>
              {description}
            </div>
          </div>
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
