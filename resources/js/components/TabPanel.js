import React from 'react'
import Box from '@material-ui/core/Box'

export default function TabPanel ({children, value, index, handleID, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={handleID(index)}
      aria-labelledby={handleID(index)}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}
