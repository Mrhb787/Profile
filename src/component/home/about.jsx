import {Stack, Typography} from "@mui/material";
import Hyperlink from "../../assets/components/hyperlink";
import ContactCard from "../../assets/components/contactcard";

const About = () => {
  return (
    <Stack
      justifyContent="space-evenly"
      alignItems="center"
      direction="row"
      className="fadeIn section about"
    >
      <ContactCard />
      <Stack spacing={2} sx={{maxWidth: "500px"}}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography variant="h1" className="reveal">
            It's Intro
          </Typography>
        </Stack>
        <Typography variant="body1" className="reveal">
          Hi, I am Abhishek. A Software Engineer graduated from
          <Hyperlink
            url="https://iiitl.ac.in"
            text=" Indian Institue
          of Information Technology, Lucknow."
          />
        </Typography>
        <Typography variant="h6" className="reveal">
          Descipline defeats Talent!
        </Typography>
        <Typography className="reveal">
          Would be glad to work with you. I like anime, gym & playing minecraft.
          Find more about my hobbies <Hyperlink text="here" url="" />
        </Typography>
      </Stack>
    </Stack>
  );
};

export default About;
