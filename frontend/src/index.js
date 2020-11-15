import './index.css';
import history from 'historyInstance';
import reportWebVitals from './reportWebVitals';
import { renderRoute } from './router';

window.onload = () => {
  history.listen(({ location }) => renderRoute(location));
  renderRoute({ pathname: document.location.pathname });
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
