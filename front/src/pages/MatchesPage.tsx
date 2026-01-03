import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

export default function MatchesPage() {
    const [matches, setMatches] = useState<string[]>([]);
    useEffect(() => {

        setMatches([]);
    }, []);
    return (
        <div>


   <Box
  sx={{
    minHeight: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    
    <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
{matches.length>0?matches.map((match, index) => (
    <li key={index}>
        <Box
    sx={{
      height: '300px',
      width: '300px',
      borderRadius: '10%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      bgcolor: '#f5f5f5',
    }}
  >
      {match}
  </Box>
    </li>
)): <p>No matches found</p>}
</ul>
</Box>
            <Navbar  />
        </div>
    )
}