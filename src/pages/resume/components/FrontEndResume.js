import React from "react";
import ResumeImage from "@/assets/images/resume-img.jpg";
import {
  CalendarMonth,
  Email,
  Phone,
  Place,
  LinkedIn,
  BookmarkBorder,
} from "@mui/icons-material";
import { Box, Stack, Grid, Typography, Link } from "@mui/material";
import "./FrontEndResume.scss";

function ImageSession() {
  return (
    <Box className="avatar-session">
      <img width="100%" src={ResumeImage} alt="" />
    </Box>
  );
}

function HeaderSession() {
  return (
    <Box className="header-session">
      <h2>LE PHAM LAN ANH</h2>
      <h3>Front-end Engineer</h3>
    </Box>
  );
}

function InfoSession() {
  return (
    <Grid container className="info-container">
      <Grid item xs={6} className="info-item">
        <CalendarMonth width="1.5rem" />
        <Typography>17/09/2001</Typography>
      </Grid>
      <Grid item xs={6} className="info-item">
        <Phone width="1.5rem" />
        <Typography>0945334981</Typography>
      </Grid>
      <Grid item xs={6} className="info-item">
        <Email width="1.5rem" />
        <Typography>lephamlananh1709@gmail.com</Typography>
      </Grid>
      <Grid item xs={6} className="info-item">
        <Place width="1.5rem" />
        <Typography>District 1, HCMC, Vietnam</Typography>
      </Grid>
      <Grid item xs={12} className="info-item">
        <LinkedIn width="1.5rem" />
        <Link
          href="https://www.linkedin.com/in/anniele09"
          sx={{
            textDecoration: "none",
            color: "black",
          }}
        >
          anniele09
        </Link>
      </Grid>
    </Grid>
  );
}

function HeaderDivider({ headerText }) {
  return (
    <Stack direction="row" alignItems="center" className="header-divider">
      <Box className="header-divider-left" />
      <Typography className="header-divider-text">{headerText}</Typography>
      <Box className="header-divider-right" />
    </Stack>
  );
}

function EducationSession() {
  return (
    <Box>
      <HeaderDivider headerText="Education" />
      <Stack direction="row">
        <Typography>
          <b>University of Science</b> | Bachelor's Degree in Information
          Technology | <i>Honors Program (2019 - 2023)</i> | GPA: 9.09
        </Typography>
      </Stack>
    </Box>
  );
}

function SkillSession() {
  return (
    <Box>
      <HeaderDivider headerText="Skills" />
      <Box>
        <Typography className="normal-text">
          <LineStartIcon /> Programming languages: C/C++, Javascript,
          Typescript, Elixir, Java, Python
        </Typography>
        <Typography className="normal-text">
          <LineStartIcon /> Front-end frameworks/libraries: ReactJS, Redux,
          Bootstrap, Material UI, Ant Design, Cocos2dx-JS
        </Typography>
        <Typography className="normal-text">
          <LineStartIcon /> Back-end frameworks/libraries: Phoenix, Spring boot,
          FastAPI, Flask
        </Typography>
        <Typography className="normal-text">
          <LineStartIcon /> Databases: PostgresSQL, MongoDB, ElasticSearch,
          Firebase, Redis
        </Typography>
        <Typography className="normal-text">
          <LineStartIcon /> Communication Protocols: Rest API, Socket, Webhook
        </Typography>
        <Typography className="normal-text">
          <LineStartIcon /> Others: English communication, Git, Computer Science
          Fundamentals, Agile/Scrum
        </Typography>
      </Box>
    </Box>
  );
}

function AchievementSession() {
  return (
    <Box>
      <HeaderDivider headerText="Achievements" />
      <Box>
        <Typography className="normal-text">
          <LineStartIcon /> Winner of the Euréka Prize contest for Information
          Technology in 2023
        </Typography>
        <Typography className="normal-text">
          <LineStartIcon /> Rank #40 in the ICPC Vietnam Southern Provincial
          Programming Contest in 2020
        </Typography>
        <Typography className="normal-text">
          <LineStartIcon /> 2nd place in Thach Thuc Contest in 2021
        </Typography>
        <Typography className="normal-text">
          <LineStartIcon /> Accepted Paper at SOICT 2023: Combining Deep
          Learning and Medical Knowledge to Detect Cardiomegaly and Pleural
          Effusion in Chest X-rays Diagnosis
        </Typography>
      </Box>
    </Box>
  );
}

function LineStartIcon() {
  return (
    <Typography variant="span" className="line-start-icon">
      {">"}
    </Typography>
  );
}

function WorkExperienceSession() {
  return (
    <Box>
      <HeaderDivider headerText="Work Experience" />
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography className="header-2">
            VNG ZingPlay Game Studios
          </Typography>
          <Typography fontWeight="300" mb={1}>
            Associate Software Engineer | May 2022 - March 2023
          </Typography>
          <Typography textAlign="justify" className="normal-text">
            As a software engineer, I work with the Team Lead, Game Designers,
            and the Quality Control (QC) team, following Agile methodology to
            build and maintain a multiplayer game. I write Java and JavaScript
            code, applying design patterns to develop both the front-end and
            back-end server. Additionally, I deploy code to the development and
            production environments using Jenkins and address bugs when they
            arise in Jira.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography className="header-2">OnPoint E-commerce</Typography>
          <Typography fontWeight="300" mb={1}>
            Junior Fullstack Engineer | Sep 2023 - Current
          </Typography>
          <Typography textAlign="justify" className="normal-text">
            At Onpoint, I have worked on multiple e-commerce projects, including
            Opollo, Octopos, and LVN. As a full-stack engineer, I build
            responsive web UIs and back-end servers using Elixir, ReactJS,
            PostgreSQL, and other technologies. Additionally, I write unit tests
            and review code for my team. I manage code using Git, track tasks
            with ClickUp, and investigate bugs using Sentry and Kibana logs.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

function ProjectSession() {
  return (
    <Box>
      <HeaderDivider headerText="Projects" />
      <Stack>
        <Box mb={2}>
          <Typography className="header-2">Opollo</Typography>
          <Typography textAlign="justify" className="normal-text">
            Opollo is an intelligent e-commerce solution that allows brands to
            manage all aspects of their business. It offers a unified interface
            for managing B2B/B2C orders, products, chats, and pickup locations
            across platforms like Shopee, Lazada, and TikTok Shop. My
            responsibilities include:
          </Typography>
          <Typography textAlign="justify" className="normal-text">
            <LineStartIcon /> Developing reusable components and responsive
            pages using ReactJS, Redux, Bootstrap, and Material UI.
          </Typography>
          <Typography textAlign="justify" className="normal-text">
            <LineStartIcon /> Building Order, Product, Group Brand,
            Reconciliation Management System and other features like sending
            emails, exporting and pulling data.
          </Typography>
          <Typography textAlign="justify" className="normal-text">
            <LineStartIcon /> Writing REST APIs, designing data schemas, and
            implementing business logic based on Domain-Driven Design (DDD).
          </Typography>
          <Typography textAlign="justify" className="normal-text">
            <LineStartIcon /> Utilizing technologies and tools such as Elixir,
            PostgreSQL, MongoDB, S3, Elasticsearch, Redis, Cron Jobs, and
            RabbitMQ to develop the back-end system.
          </Typography>
          <Typography textAlign="justify" className="normal-text">
            <LineStartIcon /> Writing unit tests, testing APIs with Postman,
            tracking tasks with ClickUp, and investigating issues using Sentry
            and Kibana logs.
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography className="header-2">
            Crystal Guardians (Sinh Tu Mon)
          </Typography>
          <Typography textAlign="justify" className="normal-text">
            It is a cross-platform 2D game featuring tower defense battles
            between two players, regulated by intricate and engaging rules.
            Players must strategically use their cards, which can represent
            towers, monsters, or spells, each with distinct properties and uses,
            to defeat their opponent across multiple rounds. This leads to a
            variety of strategic approaches during matches. My responsibilities
            include:
          </Typography>
          <Typography textAlign="justify" className="normal-text">
            <LineStartIcon /> Developing cross-platform UIs and beautiful
            animations for towers, monsters, and more using Cocos2dx-JS
          </Typography>
          <Typography textAlign="justify" className="normal-text">
            <LineStartIcon /> Implementing main game flow and features such as
            the Card Inventory, Lobby Screen, Matchmaking, and Clan events.
          </Typography>
          <Typography textAlign="justify" className="normal-text">
            <LineStartIcon /> Designing class and sequence diagrams, and using
            design patterns like Factory, Observer, and Object Pool to make the
            code cleaner and more reusable.
          </Typography>
          <Typography textAlign="justify" className="normal-text">
            <LineStartIcon /> Writing APIs and managing data with Java, NoSQL,
            and Redis.
          </Typography>
          <Typography textAlign="justify" className="normal-text">
            <LineStartIcon /> Handling multiplayer game synchronization between
            the server and clients.
          </Typography>
        </Box>
        <Box>
          <Typography className="header-2">
            Chest X-Rays Abnormality Detection
          </Typography>
          <Typography textAlign="justify" className="normal-text">
            This system automatically detects 14 abnormalities in uploaded chest
            X-ray images. Detected abnormalities are highlighted with bounding
            boxes on the image using AI models that my friend and I trained,
            combined with medical expertise.
          </Typography>
          <Typography textAlign="justify" className="normal-text">
            <LineStartIcon /> Training the YOLO model using K-fold Cross
            Validation to detect 14 abnormalities in chest X-ray images.
          </Typography>
          <Typography textAlign="justify" className="normal-text">
            <LineStartIcon /> Collecting and creating custom datasets to train
            the U-Net model for segmenting the heart, lungs, and diaphragm.
          </Typography>
          <Typography textAlign="justify" className="normal-text">
            <LineStartIcon /> Leveraging medical expertise to enhance the YOLO
            model's performance in detecting signs of cardiomegaly and pleural
            effusion.
          </Typography>
          <Typography textAlign="justify" className="normal-text">
            <LineStartIcon /> Developing user interfaces with JavaScript and
            Flask that enable users to upload images and view results from the
            trained models.
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

const FrontEndResume = () => {
  return (
    <Box width="fit-content" height="fit-content">
      <Box className="resume-container">
        <Box className="session">
          <Grid container>
            <Grid item xs={3.5}>
              <ImageSession />
            </Grid>
            <Grid item xs={8.5}>
              <Stack>
                <HeaderSession />
                <InfoSession />
              </Stack>
            </Grid>
          </Grid>
        </Box>
        <Box className="session">
          <EducationSession />
        </Box>
        <Box className="session">
          <SkillSession />
        </Box>
        <Box className="session">
          <AchievementSession />
        </Box>
        <Box className="session">
          <WorkExperienceSession />
        </Box>
      </Box>
      <Box className="resume-container">
        <Box>
          <ProjectSession />
        </Box>
      </Box>
    </Box>
  );
};

export default FrontEndResume;
