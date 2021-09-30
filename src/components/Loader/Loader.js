import Loader from 'react-loader-spinner';
import css from '../Loader/Loader.mosule.css';

function loader() {
  return (
    <div className={css.block}>
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
}

export default loader;
