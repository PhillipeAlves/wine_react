import React from "react";

export const getHighlightedText = (text, highlight) => {
  const parts = text.split(new RegExp(`(${highlight})`, "gi"));
  return (
    <span>
      {parts.map((part, i) => (
        <span
          key={i}
          style={
            part.toLowerCase() === highlight.toLowerCase()
              ? { color: "#00ada8" }
              : {}
          }
        >
          {part}
        </span>
      ))}
    </span>
  );
};

export const formatNumber = (num) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const capitalize = (str) => {
  let result = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
};

export const transformData = (data) => {
  const _ = data;
  const lotCode = _.lotCode;
  const description = _.description;
  const volume = formatNumber(_.volume);
  const tankCode = _.tankCode;
  const productState = _.productState;
  const owner = _.ownerName;

  return {
    lotCode,
    description,
    volume,
    tankCode,
    productState,
    owner,
  };
};

export const getPercentage = (wines, type, items) => {
  return wines
    .sort((a, b) => {
      return parseFloat(b.percentage) - parseFloat(a.percentage);
    })
    .slice(0, items)
    .map((wine, i) => (
      <tr key={i}>
        {type.length > 1 ? (
          <td>
            {wine[type[0]]} - {wine[type[1]]}
          </td>
        ) : (
          <td>{wine[type]}</td>
        )}
        <td>{wine.percentage}%</td>
      </tr>
    ));
};
