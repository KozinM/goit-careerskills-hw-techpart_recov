import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Layout } from './Layout/Layout';
import { Tweets } from './Pages/Tweets';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
        <Route path="/*" redirectTo="/" />
      </Route>
    </Routes>
  );
};
