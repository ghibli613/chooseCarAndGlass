import React, { Component } from "react";
import CarList from "./arrayFeatures.json";
import WheelList from "./wheels.json";
import Tridi from "react-tridi";
import "react-tridi/dist/index.css";

export default class Car extends Component {
  state = {
    indexCar: 0,
    indexWheel: 0,
  };

  handleChangeColor = (indexCar) => {
    this.setState({
      indexCar, // imgName: imgName
    });
  };

  handleChangeWheel = (indexWheel) => {
    this.setState({
      indexWheel, // imgName: imgName
    });
  };

  render() {
    const { indexCar, indexWheel } = this.state;

    const srcImg = `./images/${CarList[indexCar].wheels[indexWheel].srcImg}`;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-7">
            <Tridi
              location={srcImg}
              format="jpg"
              count="8"
              dragInterval={10}
              inverse={true}
            />
          </div>
          <div className="col-5">
            <div className="card">
              <div className="card-header">Exterior Color</div>
              <ul className="list-group list-group-flush">
                {CarList.map((item, key) => {
                  return (
                    <li
                      key={key + "a"} // dùng như vậy để key k bị trùng
                      className="list-group-item"
                      onClick={() => this.handleChangeColor(item.id)}
                    >
                      <div className="row">
                        <div className="col-2">
                          <img src={item.img} width="60px" />
                        </div>
                        <div className="col-10 d-flex align-items-center">
                          {item.title}
                        </div>
                      </div>
                    </li>
                  );
                })}
                {/* <li
                  className="list-group-item"
                  onClick={() => this.handleChangeColor(0)}
                >
                  <div className="row">
                    <div className="col-2">
                      <img src={`${CarList[0].img}`} width="60px" />
                    </div>
                    <div className="col-10 d-flex align-items-center">
                      Crystal Black
                    </div>
                  </div>
                </li>
                <li
                  className="list-group-item"
                  onClick={() => this.handleChangeColor(1)}
                >
                  <div className="row">
                    <div className="col-2">
                      <img src={`${CarList[1].img}`} width="60px" />
                    </div>
                    <div className="col-10 d-flex align-items-center">
                      Modern Steel
                    </div>
                  </div>
                </li>
                <li
                  className="list-group-item"
                  onClick={() => this.handleChangeColor(2)}
                >
                  <div className="row">
                    <div className="col-2">
                      <img src={`${CarList[2].img}`} width="60px" />
                    </div>
                    <div className="col-10 d-flex align-items-center">
                      Lunar Silver
                    </div>
                  </div>
                </li>
                <li
                  className="list-group-item"
                  onClick={() => this.handleChangeColor(3)}
                >
                  <div className="row">
                    <div className="col-2">
                      <img src={`${CarList[3].img}`} width="60px" />
                    </div>
                    <div className="col-10 d-flex align-items-center">
                      Lunar Silver
                    </div>
                  </div>
                </li> */}
              </ul>
            </div>
            <div className="card">
              <div className="card-header">Wheels</div>
              <ul className="list-group list-group-flush">
                {WheelList.map((item, key) => (
                  <li
                    key={key + "b"}
                    className="list-group-item"
                    onClick={() => this.handleChangeWheel(item.idWheel)}
                  >
                    <div className="row">
                      <div className="col-2">
                        <img src={item.img} width="60px" />
                      </div>
                      <div className="col-10 d-flex align-items-center">
                        {item.title}
                      </div>
                    </div>
                  </li>
                ))}
                {/* <li
                  className="list-group-item"
                  onClick={() => this.handleChangeWheel(0)}
                >
                  <div className="row">
                    <div className="col-2">
                      <img src={`${WheelList[0].img}`} width="60px" />
                    </div>
                    <div className="col-10 d-flex align-items-center">
                      Crystal Black
                    </div>
                  </div>
                </li>
                <li
                  className="list-group-item"
                  onClick={() => this.handleChangeWheel(1)}
                >
                  <div className="row">
                    <div className="col-2">
                      <img src={`${WheelList[1].img}`} width="60px" />
                    </div>
                    <div className="col-10 d-flex align-items-center">
                      Modern Steel
                    </div>
                  </div>
                </li>
                <li
                  className="list-group-item"
                  onClick={() => this.handleChangeWheel(2)}
                >
                  <div className="row">
                    <div className="col-2">
                      <img src={`${WheelList[2].img}`} width="60px" />
                    </div>
                    <div className="col-10 d-flex align-items-center">
                      Lunar Silver
                    </div>
                  </div>
                </li>
               */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
