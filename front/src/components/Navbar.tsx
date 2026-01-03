import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import { Link as RouterLink } from 'react-router-dom'
import { MdOutlineSwipe } from "react-icons/md"
import { CgProfile } from "react-icons/cg"
import { FaRegHeart } from "react-icons/fa";

export default function Navbar() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',

            }}
        >
            <AppBar
                position="static"
                sx={{
                    width: 'fit-content',
                    borderRadius: 999,
                    px: 2,

                }}
            >
                <Toolbar
                    disableGutters
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 2,
                    }}
                >
                    <IconButton component={RouterLink} to="/" color="inherit">
                        <MdOutlineSwipe />
                    </IconButton>

                    <IconButton component={RouterLink} to="/match" color="inherit">
                        <FaRegHeart />
                    </IconButton>

                    <IconButton component={RouterLink} to="/profile" color="inherit">
                        <CgProfile />
                    </IconButton>

                    <Button component={RouterLink} to="/login" color="inherit">
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
