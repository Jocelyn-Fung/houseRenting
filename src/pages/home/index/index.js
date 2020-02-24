import React from "react";
import { Carousel } from "antd-mobile";
import axios from "axios";
class Index extends React.Component {
  state = {
    // data: ['1', '2', '3'],
    SwiperList: [],
    imgHeight: 176,
    isLoaded: false
  };
  componentDidMount() {
    // simulate img loading
    this.getSwiperList();
  }
  getSwiperList = async () => {
    let res1 = axios.get("http://157.122.54.189:9060/home/swiper");
    res1.then(res => {
    //   console.log(res);
      this.setState({
        SwiperList: res.data.body,
        isLoaded: true
      });
    });
  };

  render() {
    //   return <></>;
    let { SwiperList, isLoaded } = this.state;
    // console.log(SwiperList, isLoaded)
    return (
      <div className="Swiper">
        {isLoaded && (
          <Carousel
            autoplay
            infinite
            // beforeChange={(from, to) =>
            //   console.log(`slide from ${from} to ${to}`)
            // }
            // afterChange={index => console.log("slide to", index)}
          >
            {SwiperList.map(val => (
              <a
                key={val.id}
                href="http://www.alipay.com"
                style={{
                  display: "inline-block",
                  width: "100%",
                  height: this.state.imgHeight
                }}
              >
                <img
                  src={"http://157.122.54.189:9060" + val.imgSrc}
                  alt=""
                  style={{ width: "100%", verticalAlign: "top" }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event("resize"));
                    this.setState({ imgHeight: "auto" });
                  }}
                />
              </a>
            ))}
          </Carousel>
        )}
      </div>
    );
  }
}
export default Index;
