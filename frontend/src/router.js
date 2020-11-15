import ReactDOM from 'react-dom';
import UniversalRouter from 'universal-router';
import routes from 'routes';
import { ReactQueryConfigProvider } from 'react-query';
import App from './App';

const router = new UniversalRouter(routes);

// const THREE_MINUTES = 180000;
// const reactQueryConfig = {
//   queries: {
//     staleTime: THREE_MINUTES,
//   },
// };

export const renderRoute = async (location) => {
  const page = await router.resolve(location.pathname);
  const rootElem = document.getElementById('root');
  ReactDOM.render(
    <ReactQueryConfigProvider>
      <App page={page} location={location} />
    </ReactQueryConfigProvider>,
    rootElem
  );
};
