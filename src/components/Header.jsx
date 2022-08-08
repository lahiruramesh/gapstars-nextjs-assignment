import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from './Header.module.css';


export default function Header() {
    return(
        // <AppBar>
        <Toolbar>
        <nav className={styles.nav}> 
            <Typography variant="h6" color="inherit" className={styles.navItem} noWrap>
                Fixico
            </Typography>
            <a href='/form' className={styles.navItem}>Create Damage Report</a>
            <a href='/status' className={styles.navItem}>Report Status</a>
            <a href='/overview' className={styles.navItem}>Overview</a>
        </nav>
        </Toolbar>
        // </AppBar> 
    )
}