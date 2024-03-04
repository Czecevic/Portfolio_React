import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import {
  CastForEducation,
  Memory,
  MenuBook,
  MusicNote,
  School,
} from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export const LifeParcours = () => {
  const life = [
    {
      title: "2015",
      description:
        "Baccalaureate Science technique de l'ingénieur et du developpement durable (STI2D) obtenu",
      illu: MenuBook,
    },
    {
      title: "2015 - 2019",
      description:
        "étudie dans l'école des musiques actuelles du spectale vivant ALTA",
      illu: MusicNote,
    },
    {
      title: "2020 - 2021",
      description:
        "Formation Managememnt et développement de projets numériques Matrice",
      illu: Memory,
    },
    {
      title: "2022 - 2024",
      description:
        "alternance Openclassrooms spécialisé dans le JavaScript React / mentor full stack pour des gens en reconvertion professionnelle",
      illu: School,
    },
    {
      title: "2022 - 2024",
      description:
        "mentor full stack pour des gens en reconvertion professionnelle",
      illu: CastForEducation,
    },
  ];
  return (
    <Timeline position="alternate">
      {life.map((elemOfLife, index) => {
        return (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="warning">
                <elemOfLife.illu />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "20px", px: 2 }}>
              <Typography variant="h6" component="span">
                {elemOfLife.title}
              </Typography>
              <Typography>{elemOfLife.description}</Typography>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
};
