import React from 'react';
import ReactDOM from 'react-dom';

//CSS
import './index.css';

import * as serviceWorker from './serviceWorker';

//頁
import { BrowserRouter as Router, Route ,Switch} from "react-router-dom";  //SPA用
import TopPage from './pages/toppage/toppage';
import ProfilePage from './pages/profile/profile';
import FailPage from './pages/failpage/failpage';

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Switch>
          {/* トップページ */}
          <Route exact path="/" component={TopPage}></Route>
          {/* ログイン画面 */}
          <Route path="/profile" component={ProfilePage}></Route>
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
