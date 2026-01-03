import "../pagesStyle/HomePage.css";
import Navbar from "../components/Navbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { FaHeart } from "react-icons/fa";
import { VscClose } from "react-icons/vsc";

export default function Home() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
          marginTop: "50px",
          marginBottom: "70px",
        }}
      >
        {/* Left card */}
        <Box
          sx={{
            height: "600px",
            width: "400px",
            borderRadius: "16px",
            bgcolor: "#ff4d4d",
            position: "relative",
            display: "flex",
          justifyContent: "center",
          alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            color="error"
            sx={{
              position: "absolute",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "#ff4d4d",
            }}
          >
            <VscClose size={24} />
          </Button>
        </Box>

        {/* Center card */}
        <Box
          sx={{
            height: "900px",
            width: "800px",
            borderRadius: "16px",
            bgcolor: "#f5f5f5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "32px",
            fontWeight: "bold",
          }}
        >
          Match?
        </Box>

        {/* Right card */}
        <Box
          sx={{
            height: "600px",
            width: "400px",
            borderRadius: "16px",
            bgcolor: "#f5f5f5",
            position: "relative",
          }}
        >
          <Button
            variant="contained"
            color="success"
            sx={{
              position: "absolute",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <FaHeart size={22} />
          </Button>
        </Box>
      </Box>

      <Navbar />
    </div>
  );
}
