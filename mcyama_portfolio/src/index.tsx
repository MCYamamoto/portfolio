import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

//CSS
import './index.scss';
import 'semantic-ui-css/semantic.min.css'

//頁
import { BrowserRouter as Router, Route ,Switch} from "react-router-dom";  //SPA用
import TopPage from './components/pages/toppage/toppage';
import ProfilePage from './components/pages/profile/profile';
import FailPage from './components/pages/failpage/failpage';

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Switch>
          {/* トップページ */}
          <Route exact path="/" component={TopPage}></Route>
          {/* ログイン画面 */}
          <Route path="/profile" component={ProfilePage}></Route>
          {/* 指定外頁 */}
          <Route component={FailPage} />
        </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
