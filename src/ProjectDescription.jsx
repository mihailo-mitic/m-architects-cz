const ProjectDescription = (props) => {
  const { name, brief, year } = props;

  return (
    <div className='project-description-root'>
      <div className='project-description-container'>
        <div className='project-description-container-grid-left'>
          <h2>{name}</h2>
        </div>
        <div className='project-description-container-grid-center'>
          <h4>{brief}</h4>
        </div>
        <div className='project-description-container-grid-right'>
          <p>{year}</p>
        </div>
      </div>
    </div>
  );
};
export default ProjectDescription;
