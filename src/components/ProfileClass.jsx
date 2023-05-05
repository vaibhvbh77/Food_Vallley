import React from "react";
class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
    };
    console.log("Constructor");
  }
  componentDidMount() {
    console.log("DID MOUNT  ");
  }
  render() {
    console.log("render");
    return (
      <>
        <h1>
          Hi from class based components.{this.props.name} is of age{" "}
          {this.props.age}
        </h1>
        <h2>count is {this.state.count}</h2>;
        <button
          onClick={() => {
            this.setState({ count: 1 });
          }}
        >
          Increase
        </button>
      </>
    );
  }
}
export default ProfileClass;
