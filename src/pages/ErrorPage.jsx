import { Link } from "react-router-dom";
import left from "../assets/icons/chevron_left.svg";
const ErrorPage = () => {
  return (
    <>
      <div className='notfound-container'>404 Page not found</div>
      <Link to='/'>
        <div className='icon-back'>
          <img src={left} alt='left.svg' />
        </div>
      </Link>
    </>
  );
};
export default ErrorPage;
