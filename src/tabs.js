import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
export default function ViewTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', width: 900 }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          height="80%"
        >
          <Tab label="Refer" />
          <Tab label="Benefits" />
          <Tab label="FAQs" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <Link to="/refer">
          <img
            src='https://i.postimg.cc/G2dhg4wx/Screenshot-from-2024-07-05-18-14-31.png'
            alt='refer'
            className='w-screen object-cover'
          />
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
          <div className='m-5'>
          <Button variant='contained'>Refer now</Button>
          </div>
          </Box>
        </Link>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <Link to="/refer">
          <img
            src='https://i.postimg.cc/c49PqRdD/Screenshot-from-2024-07-05-14-11-27.png'
            alt='benefits'
            className='w-screen object-cover'
          />
        </Link>
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <Link to="/refer">
          <img
            src='https://i.postimg.cc/L6VRgMrD/Screenshot-from-2024-07-05-14-13-51.png'
            alt='FAQs'
            className='w-screen object-cover'
          />
        </Link>
      </TabPanel>
    </Box>
  );
}