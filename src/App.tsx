import { Box, Card, CardMedia, Typography } from "@mui/material";
import { Layout } from "./ui/Layout";
import { useApp } from "./hook";

function App() {
  const hook = useApp();
  const TypographyTexts = [
    {
      text: " Marvel will execute its next evil plot to steal our money.",
      bold: `In ${hook.data?.days_until} days,`,
    },
    {
      text: "Their next project is",
      bold: "",
    },
  ];
  const TypographySecondaryTexts = [
    {
      text: `Their plain is going to be executed on ${hook.data?.release_date}  `,
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
          gap: "30px",
        }}
      >
        {TypographyTexts.map((text) => (
          <Typography variant="h5" sx={{ color: "#A8A8A8", fontWeight: 700 }}>
            {" "}
            <b>{text.bold}</b>
            {text.text}
          </Typography>
        ))}
        <Box sx={{}}>
          <Typography
            variant="h5"
            sx={{ color: "#ffff", fontWeight: 900 }}
            textAlign={"center"}
          >
            <b>{hook.data?.title}</b>
          </Typography>
          {hook.data && (
            <Card sx={{ maxWidth: "100%", width: 500 }}>
              <CardMedia
                image={hook.data.poster_url}
                sx={{ height: 750, maxWidth: "100%", width: 500 }}
              />
            </Card>
          )}
        </Box>
        {TypographySecondaryTexts.map((text) => (
          <Typography variant="h5" sx={{ color: "#A8A8A8", fontWeight: 700 }}>
            {" "}
            <b>{text.bold}</b>
            {text.text}
          </Typography>
        ))}

        {hook.data && (
          <Box>
            <Typography
              variant="h5"
              sx={{ color: "#ffff", fontWeight: 800 }}
              textAlign={"center"}
            >
              {hook.data.following_production.title}
            </Typography>
            <Card sx={{ maxWidth: "100%", width: 500 }}>
              <CardMedia
                image={hook.data.following_production.poster_url}
                sx={{ height: 750, maxWidth: "100%", width: 500 }}
              />
            </Card>
          </Box>
        )}
      </Box>
    </Layout>
  );
}

export default App;
