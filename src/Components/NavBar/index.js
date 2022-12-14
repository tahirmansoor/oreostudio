import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Logo from '../../Assets/Logo.png';
import { Style } from '@mui/icons-material';
import useStyles from "../../Assets/CustomStyles";
import ListIcon from '@mui/icons-material/List';


export default function TemporaryDrawer() {
    
    const Style = useStyles()
    
  const [state, setState] = React.useState({
 
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, }}  role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <List sx={{backgroundColor:'#ccc'}}>
      <span> </span>
       <img src={Logo} className={Style.LogoCenter} />
        {['Home', 'About', 'Services', 'Contact Us', 'Login', 'Register'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
               <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['menu'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>Menu</Button>
            <Drawer
              anchor={'right'}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}>
              {list(anchor)}
            </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}