import React from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from "../../src";

import { envIs } from "../utils";

class PopoverItem extends React.Component {
  state = {
    popoverOpen: false
  };

  toggle = () => {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  };

  render() {
    return (
      <span>
        <Button
          className="mr-1"
          color="secondary"
          id={"Popover-" + this.props.id}
          onClick={this.toggle}
        >
          Popover {this.props.item.text}
        </Button>
        <Popover
          placement={this.props.item.placement}
          isOpen={this.state.popoverOpen}
          target={"Popover-" + this.props.id}
          toggle={this.toggle}
        >
          <PopoverBody>
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus
          </PopoverBody>
        </Popover>
      </span>
    );
  }
}

class PopoverPositionExample extends React.Component {
  state = {
    popovers: [
      { placement: "top", text: "in alto" },
      { placement: "bottom", text: "in basso" },
      { placement: "left", text: "a sinistra" },
      { placement: "right", text: "a destra" }
    ]
  };

  render() {
    if (envIs("test")) {
      // Current story has a dependency on the DOM, skip it for now
      return null;
    }

    return (
      <div style={{ padding: 200 }}>
        {this.state.popovers.map((popover, i) => {
          return <PopoverItem key={i} item={popover} id={i} />;
        })}
      </div>
    );
  }
}

export default PopoverPositionExample;
