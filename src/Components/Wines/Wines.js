import React, { Component } from "react";
import { connect } from "react-redux";
import { transformData } from "../../helpers/FormatData";
import "../../Stylesheets/Wines.css";

class Wines extends Component {
  getWineDetails(data) {
    if (data) {
      const _ = transformData(data[0]);
      const notAvailable = <li className='not-available'>not available</li>;
      return (
        <div className='wine-ui-card'>
          <header>
            <svg
              className='go-back'
              onClick={() => this.props.history.push("/")}
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M21.6875 9.6875V12.3125H5.4375L12.875 19.8125L11 21.6875L0.3125 11L11 0.3125L12.875 2.1875L5.4375 9.6875H21.6875Z'
                fill='#3A3B3B'
              />
            </svg>
            <h1 className='lot-code'>
              <span className='w-icon'>W</span>
              {_.lotCode}
            </h1>
            {_.description ? (
              <h3>{_.description}</h3>
            ) : (
              <h3 className='not-available'>Description not available</h3>
            )}
            <div className='edit-tool'>
              <svg
                onClick={() =>
                  window.alert("This feature will be available soon! :)")
                }
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M23.625 5.375L21.1875 7.8125L16.1875 2.8125L18.625 0.375C18.875 0.125 19.1875 0 19.5625 0C19.9375 0 20.25 0.125 20.5 0.375L23.625 3.5C23.875 3.75 24 4.0625 24 4.4375C24 4.8125 23.875 5.125 23.625 5.375ZM0 19L14.75 4.25L19.75 9.25L5 24H0V19Z'
                  fill='white'
                />
              </svg>
            </div>
          </header>
          <section className='wine-details'>
            <ul>
              <li>Volume</li>
              {_.volume ? <li>{_.volume} L</li> : notAvailable}
            </ul>
            <ul>
              <li>Tank code</li>
              {_.tankCode ? <li>{_.tankCode}</li> : notAvailable}
            </ul>
            <ul>
              <li>Product state</li>
              {_.productState ? <li>{_.productState}</li> : notAvailable}
            </ul>
            <ul>
              <li>Owner</li>
              {_.owner ? <li>{_.owner}</li> : notAvailable}
            </ul>
          </section>
          <div className='menu-border'></div>
        </div>
      );
    } else {
      return;
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.getWineDetails(this.props.wines[0])}
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ wines }) => ({ wines });

export default connect(mapStateToProps)(Wines);
