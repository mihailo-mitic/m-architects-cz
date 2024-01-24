const ProjectDescription = (props) => {
  const { name, brief, year } = props;

  return (
    <div className='project-description-container'>
      <div className='project-description-container-grid-left'>{name}</div>
      <div className='project-description-container-grid-center'>{brief}</div>
      <div className='project-description-container-grid-right'>{year}</div>
    </div>
  );
};
export default ProjectDescription;
