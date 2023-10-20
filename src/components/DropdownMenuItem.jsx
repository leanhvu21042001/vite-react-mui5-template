import React from "react";
import PropTypes from "prop-types";

import { styled } from "@mui/material/styles";
import { Button, Menu, MenuItem } from "@mui/material";

const BlackOnWhiteButton = styled(Button)(() => ({
  color: "black",
  backgroundColor: "transparent",
  position: "relative",
  ":before": {
    content: "''",
    position: "absolute",
    width: "0%",
    height: "2px",
    backgroundColor: "red",
    bottom: "10px",
    left: 0,
    transition: "0.3s",
  },

  "&:hover": {
    backgroundColor: "transparent",
  },
  "&[aria-expanded='true']:before": {
    width: "100%",
  },
  "&:focus": {
    backgroundColor: "transparent",
  },
}));

const DropdownMenuItem = ({ text = "DropdownMenuItem", items = [] }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <BlackOnWhiteButton
        disableRipple
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{
          fontWeight: "normal",
          fontFamily: "'Lexend', Roboto, Arial",
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        {text}
      </BlackOnWhiteButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {items.map((item, index) => (
          <MenuItem key={`${item}-${index}`} onClick={handleClose}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

DropdownMenuItem.propTypes = {
  text: PropTypes.string,
  items: PropTypes.array,
};

export default DropdownMenuItem;
