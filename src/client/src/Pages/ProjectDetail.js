import React, { Component, useState, useEffect } from "react";

const PorjectIndex = () => {
  function saveMoney(user, amount) {
    console.log('start save money..')
  }
  return (
    <div>
      <h1>porjects name</h1>
      <p>project.summary</p>
      <p>project.targetAmount</p>
      <p>project.savingAmount</p>
      <button onClick="saveMoney">貯金する</button>
    </div>
  )
}
export default PorjectDetail;