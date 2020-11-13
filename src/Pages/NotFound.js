import React from "react";

export const NotFound = () => {
  const handleClick = () => {
    document.location.href = "/";
  };

  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "wine-pattern.jpg"})`,
        backgroundSize: "700px",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "white",
          width: "600px",
          height: "300px",
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.04)",
          border: "1px solid #00ada8",
          borderRadius: "2px",
        }}
      >
        <div>
          <svg
            value='RESET_STORE'
            onClick={() => handleClick()}
            width='22'
            height='22'
            viewBox='0 0 22 22'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            style={{ cursor: "pointer", marginBottom: "20px" }}
          >
            <path
              d='M21.6875 9.6875V12.3125H5.4375L12.875 19.8125L11 21.6875L0.3125 11L11 0.3125L12.875 2.1875L5.4375 9.6875H21.6875Z'
              fill='#3A3B3B'
            />
          </svg>
          <h1 style={{ color: "#00ada8" }}>Sorry, not found!</h1>
          <p>Please, return to the main page.</p>
        </div>
      </div>
    </div>
  );
};
