import { Box, Card, Typography } from "@mui/material";
import { Layout } from "./ui/Layout";

function App() {
  const TypographyTexts = [
    {
      text: " Marvel will execute its next evil plot to steal our money.",
      bold: "In 63 days,",
    },
    {
      text: "Their next project is",
      bold: "",
    },
  ];
  const TypographySecondaryTexts = [
    {
      text: "Their plain is going to be executed on  2020-05-01",
      bold: "",
    },
    {
      text: "Failing or not, their next evil plan will be",
      bold: "",
    },
  ];
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "30px",
          gap: "24px",
        }}
      >
        {TypographyTexts.map((text) => (
          <Typography variant="h5" sx={{ color: "#A8A8A8", fontWeight: 700 }}>
            {" "}
            <b>{text.bold}</b>
            {text.text}
          </Typography>
        ))}
        <Box>
          <Typography variant="h5" sx={{ color: "#A8A8A8", fontWeight: 900 }}>
            <b>Movie name</b>
          </Typography>
          <Card sx={{ width: "100%" }}>aa</Card>
        </Box>
        {TypographySecondaryTexts.map((text) => (
          <Typography variant="h5" sx={{ color: "#A8A8A8", fontWeight: 700 }}>
            {" "}
            <b>{text.bold}</b>
            {text.text}
          </Typography>
        ))}
      </Box>
    </Layout>
  );
}

export default App;
