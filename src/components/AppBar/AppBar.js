import { Navigation } from 'components/Navigation/Navigation';
import css from './style.module.css';

export const AppBar = () => {

  return (
    <header className={css.header}>
      <Navigation />
    </header>
  );
};
