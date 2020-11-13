import React from "react";
import { withRouter } from "react-router-dom";
import { WinesMenu } from "../Components/Wines/WinesMenu";
import Wines from "../Components/Wines/Wines";

const WinesPage = ({ history }) => {
  return (
    <React.Fragment>
      <Wines history={history} />
      <WinesMenu />
    </React.Fragment>
  );
};

export default withRouter(WinesPage);
