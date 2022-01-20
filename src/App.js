import React, { Component } from "react";
import Draggable from "react-draggable";
import axios from "axios";
import "./App.css";
import Images from "./Images";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.toggleAspect = this.toggleAspect.bind(this);
    this.state = {
      urlImages: [""],
      toggleDefault: true
    };
  }

  async componentDidMount() {
    const res = await axios.get("https://picsum.photos/v2/list?limit=5");
    const urlImages = [...res.data];
    this.setState({ urlImages });
  }
  toggleAspect() {
    const currentState = this.state.toggleDefault;
    this.setState({ toggleDefault: !currentState });
  }
  handleDrag = (e, ui) => {
    const { x, y } = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY
      }
    });
  };

  render() {
    console.log(this.state.urlImages);
    const { urlImages } = this.state;

    return (
      <div>
        <button onClick={this.toggleAspect}>Toggle Aspect Ratio</button>
        <canvas
          className={` ${
            this.state.toggleDefault ? "canvasFrame" : "canvasFrame-2"
          }`}
        />

        {urlImages.map(data => (
          <Draggable>
            <Images key={data.id} download_url={data.download_url} />
          </Draggable>
        ))}
      </div>
    );
  }
}
