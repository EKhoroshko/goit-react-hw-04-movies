import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import css from '../Navigation/Navigation.module.css';

const Navigation = () => {
  return (
    <div className={css.nav}>
      <NavLink to="/">
        <button className={css.button} type="button">
          Home
        </button>
      </NavLink>
      <NavLink to="/movies">
        <button className={cn(css.button, css.margin)} type="button">
          Movie
        </button>
      </NavLink>
    </div>
  );
};

export default Navigation;
