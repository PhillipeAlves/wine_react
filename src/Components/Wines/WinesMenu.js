import React from "react";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import { Year, Variety, Region, YearVariety } from "../";
import "../../Stylesheets/Wines.css";

export const WinesMenu = () => {
  return (
    <BrowserRouter>
      <div className='wine-menu'>
        <ul>
          <li>
            <NavLink className='wine-label' to='/wines/year' exact>
              Year
            </NavLink>
          </li>
          <li>
            <NavLink className='wine-label' to='/wines/variety' exact>
              Variety
            </NavLink>
          </li>
          <li>
            <NavLink className='wine-label' to='/wines/Region' exact>
              Region
            </NavLink>
          </li>
          <li>
            <NavLink className='wine-label' to='/wines/yearVariety' exact>
              Year & Variety
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route path='/wines/year' component={Year} />
          <Route path='/wines/variety' component={Variety} />
          <Route path='/wines/region' component={Region} />
          <Route path='/wines/yearVariety' component={YearVariety} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
