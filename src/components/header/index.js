import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 offset-2">
            <div className="page-header">
              <h1>
                People <span className="badge badge-pill badge-success ">{this.props.noPersons}</span>
                Places <span className="badge badge-pill badge-success ">{this.props.noPlaces}</span>
                Things <span className="badge badge-pill badge-success ">{this.props.noThings}</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
