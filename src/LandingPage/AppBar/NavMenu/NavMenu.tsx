import { Menu, IconButton, MenuItem } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useState } from "react";

export const NavMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);
  const handleMenuClick = (newHash: string) => {
    window.location.hash = newHash;
    handleClose();
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => handleMenuClick("#home")}>Home</MenuItem>
        <MenuItem onClick={() => handleMenuClick("#about")}>About</MenuItem>
        <MenuItem onClick={() => handleMenuClick("#resume")}>Resume</MenuItem>
        <MenuItem onClick={() => handleMenuClick("#contact")}>Contact</MenuItem>
      </Menu>
    </>
  );
};
