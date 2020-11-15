import ReactDOM from 'react-dom';
import './index.css';
import { ReactQueryConfigProvider } from 'react-query';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const THREE_MINUTES = 180000;
// const reactQueryConfig = {
//   queries: {
//     staleTime: THREE_MINUTES,
//   },
// };

ReactDOM.render(
  <ReactQueryConfigProvider>
    <App />
  </ReactQueryConfigProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
