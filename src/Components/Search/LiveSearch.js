import React, { Component } from "react";
import { Redirect } from "react-router";
import { getHighlightedText, transformData } from "../../helpers/FormatData";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWines, resetStore } from "../../actions";

class LiveSearch extends Component {
  state = {
    redirect: false,
  };

  handleReduxState = async (lotCode) => {
    this.props.resetStore();
    await this.props.fetchWines(lotCode);
    this.setState({
      redirect: true,
    });
  };

  getLiveSearch = () => {
    let { liveSearch, search } = this.props;
    if (liveSearch) {
      return Object.keys(liveSearch).reduce((results, content, i) => {
        const { lotCode, description, volume, tankCode } = transformData(
          liveSearch[content]
        );
        results.push(
          <div
            key={i}
            onClick={() => this.handleReduxState(lotCode)}
            className='live-search'
          >
            <div className='live-search-title'>
              <h3>{getHighlightedText(lotCode, search)}</h3>
              {description ? (
                <p>{getHighlightedText(description, search)}</p>
              ) : (
                <p className='not-available'>Description not available</p>
              )}
            </div>
            <div className='live-search-extra'>
              <p>{volume} L</p>
              <p>{tankCode}</p>
            </div>
          </div>
        );
        return results;
      }, []);
    }
  };

  render() {
    return (
      <div className='live-search-box'>
        {this.getLiveSearch()}
        {this.state.redirect ? <Redirect to={"/wines/year"} /> : ""}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchWines, resetStore }, dispatch);
};

export default connect(null, mapDispatchToProps)(LiveSearch);
