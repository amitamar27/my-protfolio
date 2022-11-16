import React from "react";

export function BlurPage({ isOpenMenu }) {
  return (
    <div
      className={isOpenMenu ? "blur-container show-blur" : "blur-container"}
    ></div>
  );
}
