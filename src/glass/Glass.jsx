import React, { Component } from "react";
import glassList from "./dataGlasses.json";

export default class Glass extends Component {
  state = {
    index: 0,
  };

  handleChangeGlass = (index) => {
    this.setState({
      index, // imgName: imgName
    });
  };

  render() {
    const { index } = this.state;
    return (
      <div
        style={{
          backgroundImage: `url("./glassesImage/background.jpg")`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="header"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "white",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          TRY GLASS APP ONLINE
        </div>
        <div
          className="body"
          style={{
            backgroundColor: "rgba(60, 60, 60, 0.7)",
            paddingBottom: "20px",
          }}
        >
          <div className="container">
            <div
              className="row"
              style={{ paddingTop: "50px", paddingBottom: "50px" }}
            >
              <div className="col-6">
                <div
                  style={{
                    backgroundImage: `url("./glassesImage/model.jpg")`,
                    backgroundSize: "cover",
                    width: "50%",
                    height: "90%",
                    display: "inline-block",
                  }}
                >
                  <img
                    src={`${glassList[index].url}`}
                    width="60%"
                    style={{ marginTop: "85px", marginBottom: "75px" }}
                  />
                  <div
                    style={{
                      backgroundColor: "rgba(255, 153, 0, 0.7)",
                      height: "28.5%",
                    }}
                  >
                    <div
                      style={{
                        textAlign: "left",
                        color: "blue",
                        marginLeft: "2px",
                      }}
                    >
                      {glassList[index].name}
                    </div>
                    <div
                      style={{
                        textAlign: "left",
                        color: "white",
                        marginLeft: "2px",
                        fontSize: "13px",
                      }}
                    >
                      {glassList[index].desc}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <img src="./glassesImage/model.jpg" width="50%" height="90%" />
              </div>
            </div>
            <table style={{ backgroundColor: "white", paddingBottom: "20px" }}>
              <tr style={{ height: "50px" }}>
                {glassList.map((item, key) => (
                  <th
                    onClick={() => this.handleChangeGlass(item.id)}
                    key={key + item.url}
                  >
                    <img
                      src={`./glassesImage/g${item.id}.jpg`}
                      style={{ width: "100%" }}
                    />
                  </th>
                ))}
                {/* nên sử dụng hàm map để giảm code lại */}
                {/* <th onClick={() => this.handleChangeGlass(0)}>
                  <img src="./glassesImage/g1.jpg" style={{ width: "100%" }} />
                </th>
                <th onClick={() => this.handleChangeGlass(1)}>
                  <img src="./glassesImage/g2.jpg" style={{ width: "100%" }} />
                </th>
                <th onClick={() => this.handleChangeGlass(2)}>
                  <img src="./glassesImage/g3.jpg" style={{ width: "100%" }} />
                </th>
                <th onClick={() => this.handleChangeGlass(3)}>
                  <img src="./glassesImage/g4.jpg" style={{ width: "100%" }} />
                </th>
                <th onClick={() => this.handleChangeGlass(4)}>
                  <img src="./glassesImage/g5.jpg" style={{ width: "100%" }} />
                </th>
                <th onClick={() => this.handleChangeGlass(5)}>
                  <img src="./glassesImage/g6.jpg" style={{ width: "100%" }} />
                </th>
              </tr>
              <tr>
                <th onClick={() => this.handleChangeGlass(6)}>
                  <img src="./glassesImage/g7.jpg" style={{ width: "100%" }} />
                </th>
                <th onClick={() => this.handleChangeGlass(7)}>
                  <img src="./glassesImage/g8.jpg" style={{ width: "100%" }} />
                </th>
                <th onClick={() => this.handleChangeGlass(8)}>
                  <img src="./glassesImage/g9.jpg" style={{ width: "100%" }} />
                </th> */}
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
