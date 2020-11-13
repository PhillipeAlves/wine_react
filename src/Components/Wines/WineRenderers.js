import React from "react";
import WineSpecs from "./WineSpecs";

export const Year = () => <WineSpecs type={["year"]} />;

export const Variety = () => <WineSpecs type={["variety"]} />;

export const Region = () => <WineSpecs type={["region"]} />;

export const YearVariety = () => <WineSpecs type={["year", "variety"]} />;
