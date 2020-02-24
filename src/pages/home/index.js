import React from "react";
import { Route } from "react-router-dom";
// 引入子组件
import Found from "./found/index.js";
import Index from "./index/index.js";
import News from "./news/index.js";
import My from "./my/index.js";
// 引入antdesign 的tababr
import { TabBar } from "antd-mobile";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    //   selectedTab: "blueTab",
      // hidden: false,
    //   fullScreen: true
    };
    //   console.log(this.props)
    // 如果页面只有/home/ 也默认是去首页的重定向一下
    if (this.props.match.url === "/Home") {
        this.props.history.push("/home/index");
      }
  }

  render() {
    return (
      <div
        style={{ position: "fixed", height: "100%", width: "100%", top: 0 } }
      >
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#21b97a"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={<i className="iconfont icon-ind"></i>}
            selectedIcon={<i className="iconfont icon-ind"></i>}
            selected={this.props.location.pathname==="/home/index"}
            onPress={() => {
              this.props.history.push("/home/index");
            }}
          >
            
            <Route path="/home/index" component={Index}></Route>
            
          </TabBar.Item>
          <TabBar.Item
            title="找房"
            key="found"
            icon={<i className="iconfont icon-findHouse"></i>}
            selectedIcon={<i className="iconfont icon-findHouse"></i>}
            selected={this.props.location.pathname==="/home/found"}
            onPress={() => {
                this.props.history.push("/home/found");
            }}
          >
            34
            <Route path="/home/found" component={Found}></Route>
            44
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-infom"></i>}
            selectedIcon={<i className="iconfont icon-infom"></i>}
            title="资讯"
            key="news"
            selected={this.props.location.pathname==="/home/news"}
            onPress={() => {
                this.props.history.push("/home/news");
            }}
          >
            66
            <Route path="/home/news" component={News}></Route>
            77
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-my"></i>}
            selectedIcon={<i className="iconfont icon-my"></i>}
            title="我的"
            key="my"
            selected={this.props.location.pathname==="/home/my"}
            onPress={() => {
                this.props.history.push("/home/my");
            }}
          >
            00
            <Route path="/home/my" component={My}></Route>
            00
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default Home;
