import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";

export default function ProfilePage() {
  return (
    <div>
      <Box
        sx={{
          minHeight: '500px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            height: '300px',
            width: '300px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: '#f5f5f5',
          }}
        >
          profile pic
        </Box>

      </Box>
      <Box
        sx={{
          minHeight: '500px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            height: '100px',
            width: '200px',
            borderRadius: '10%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: '#f5f5f5',
            marginRight: '20px',
          }}
        > name
        </Box>
        <Box
          sx={{
            height: '100px',
            width: '200px',
            borderRadius: '10%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: '#f5f5f5',
            marginRight: '20px',

          }}
        > age
        </Box>
        <Box
          sx={{
            height: '100px',
            width: '200px',
            borderRadius: '10%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: '#f5f5f5',
            marginRight: '20px',

          }}
        > yehida
        </Box>
            <Box
          sx={{
            height: '100px',
            width: '200px',
            borderRadius: '10%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: '#f5f5f5',
            marginRight: '20px',

          }}
        > base
        </Box>
      </Box>
      <Navbar />
    </div>
  )
}
