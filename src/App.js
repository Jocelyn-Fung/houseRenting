import React from "react";
// 使用antdesign库的组件
// import {Button} from "antd-mobile";
// 引入路由
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
// 引入子组件
import Home from "./pages/home/index.js";
import Index from "./pages/home/index/index.js"
class App extends React.Component {
  render() {
    return (
      <>
        <div className="app">
          <Router>
            <div className="content">
              <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/map">别的页面</Route>
                <Route exact path="/">
                  <Redirect to="/home/index"></Redirect>
                </Route>
              </Switch>
            </div>
          </Router>
        </div>
      </>
    );
  }
}

export default App;
