import { NavLink } from 'react-router-dom';
import css from './style.module.css';

export const Navigation = () => {
  return (
    <nav>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      <NavLink className={css.link} to="/tweets">
        Tweets
      </NavLink>
    </nav>
  );
};
