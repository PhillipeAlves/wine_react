import React, { Component } from "react";
import { connect } from "react-redux";
import { capitalize, getPercentage } from "../../helpers/FormatData";

class WineSpecs extends Component {
  state = {
    itemsToShow: 5,
    expanded: false,
  };

  showMore = () => {
    this.state.itemsToShow === 5
      ? this.setState({
          itemsToShow: this.props.wines[0][0].components.length,
          expanded: true,
        })
      : this.setState({ itemsToShow: 5, expanded: false });
  };

  createShowMore = (wines) => {
    return wines.length > 5 ? (
      <div className='show-more'>
        <span onClick={this.showMore}>
          {this.state.expanded ? (
            <span>
              Show less
              <svg
                style={{ transform: "rotate(180deg)" }}
                width='8'
                height='6'
                viewBox='0 0 8 6'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M7.0625 0.71875L8 1.65625L4 5.65625L0 1.65625L0.9375 0.71875L4 3.78125L7.0625 0.71875Z'
                  fill='#00928D'
                />
              </svg>
            </span>
          ) : (
            <span>
              Show more
              <svg
                width='8'
                height='6'
                viewBox='0 0 8 6'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M7.0625 0.71875L8 1.65625L4 5.65625L0 1.65625L0.9375 0.71875L4 3.78125L7.0625 0.71875Z'
                  fill='#00928D'
                />
              </svg>
            </span>
          )}
        </span>
      </div>
    ) : (
      ""
    );
  };

  render() {
    const type = this.props.type;
    const { itemsToShow } = this.state;
    const wines =
      this.props.wines.length > 0 ? this.props.wines[0][0].components : "";
    return wines ? (
      <div className='menu-options'>
        <tr>
          <th>{capitalize(type.join(" & "))}</th>
          <th>Percentage</th>
        </tr>
        {getPercentage(wines, type, itemsToShow)}
        {this.createShowMore(wines)}
      </div>
    ) : (
      ""
    );
  }
}

const mapStateToProps = ({ wines }) => ({ wines });

export default connect(mapStateToProps)(WineSpecs);
