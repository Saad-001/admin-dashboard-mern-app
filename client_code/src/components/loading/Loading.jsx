import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export default function CircularIndeterminate() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "75vh",
      }}
    >
      <CircularProgress />
    </Box>
  );
}
