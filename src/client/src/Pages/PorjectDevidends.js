import React, { useState, useEffect } from "react";
import getWeb3 from "../getWeb3";
import SimpleStorageContract from "../contracts/SimpleStorage.json";
import projects from "../consts/projects.json"

const PorjectDevidends=()=>{
  return (
    <div>
      <h1>porjects</h1>
      {projects.projectcs.map((row, i)=>{
        return (
          <div id={i}>
            <h2>{row.projectName}</h2>
            <h3>発起人：{row.founderUser}</h3>
            <p>{row.projectSummary}</p>
            <p>目標金額：{row.targetAmount}</p>
            <p>配当開始％：{row.matchingStartPercentage}</p>
            {row.dividends.map(person=>{
              return(
                <div>
                  <p>配当受取人:{person.address}</p>
                  <p>金額:{person.value}</p>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
export default PorjectDevidends;