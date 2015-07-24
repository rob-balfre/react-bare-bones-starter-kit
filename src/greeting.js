import React from "react";


class Greeting extends React.Component {
    render() {
        return (
            <div className="greeting">
                <h1>Hello, {this.props.name}!</h1>
            </div>
        );
    }
}

module.exports = Greeting;