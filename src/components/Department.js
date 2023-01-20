import React from "react";
import { useState } from "react";
import data2 from "../data2.json";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { Tooltip, Typography } from "@mui/material";


function Department({ data }) {
  console.log(data);
  const [state, setState] = useState(false);
  const expand = () => {
    setState(!state);
  };
  console.log("state", state);
  return (
    //reeot element
    <div style={{ marginTop: "15px" }} className="tree">
      <div style={{ display: "flex", alignItems: "center" }}>
        <Tooltip title={(data?.first_name + " " + data?.last_name) || data.Department_name}>
          {/* node elements */}
          <Stack direction="row" spacing={1} width={280}>
            <Chip
              avatar={<Avatar sx={{ width: 40, height: 40, filter: state ? "" : "grayscale(100%)" }} src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"></Avatar>}
              label={<div><div style={{ color: state ? "" : "gray",fontSize:"15px" }}>{data?.name || data?.first_name}</div><div style={{ fontSize: "12px", paddingLeft: "5px", color: state ? "" : "black" }}>{data.title || "-"}</div></div>}
              onClick={data.children && expand}
              sx={{
                width: "280px",
                height: "45px",
                justifyContent: "flex-start",
                fontSize: "20px",
                border: state ? "2px solid blue" : "1px solid gray",
              }}
              variant="outlined"
              color="primary"
            />
          </Stack>
        </Tooltip>
        {/* horizontal Line from node element to avatar showing no. of child  */}
        {data.children&&<div style={{ border: data.children && state ? "1px solid blue" : "1px solid gray", width: "20px" }}></div>}
        {/* avatr containg count of children */}
        {(data.children && data.children.length >0)&&<Avatar
          variant="rounded"
          sx={{ width: 24, height: 24, bgcolor: data.children? "#3c71ff":"gray", fontSize: "0.8rem" }}
        >
          {data.children?data.children.length:""}
        </Avatar>}

        {/* horizontal and vertical line from count node if state is true and contains children */}
        {state && (
          <div style={{ position: "relative" }}>
            {/* horizontal line */}
            <div style={{ border: state && "1px solid blue", width: "30px" }}></div>
            {/* vertical line */}
            <div
              style={{
                border: state && data.children.length ? "1px solid blue" : "",
                width: "68px",
                transform: "rotate(90deg)",
                position: "absolute",
                top: "33px",
                left: "-5px",
              }}
            ></div>
          </div>
        )}
      </div>
      {/* recursin call for each parent having child when state is true */}
      {state ? (
        data?.children?.map((child) => {
          return (
            <div
              style={{
                marginLeft: "22.123rem",
                marginTop: "2rem",
                position: "relative",
              }}
            >
              {/* vertical line for each child node */}
              <div
                style={{
                  border: state && "1px solid blue",
                  width: "68px",
                  transform: "rotate(90deg)",
                  position: "absolute",
                  top: "47px",
                  left: "-33.6px",
                }}
              ></div>
              {/* horizontal line for each child node */}
              <div style={{ display: "flex" }}>
                <div style={{ position: "relative", marginLeft: "31px" }}>
                  <div
                    style={{ border: state && "1px solid blue", width: "29.8px", position: "absolute", top: "38px", left: "-30.5px" }}
                  ></div>
                </div>
                <Department data={child} />
              </div>
            </div>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}

export default Department;
