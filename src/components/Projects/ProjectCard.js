import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import style from './Projects.module.scss';

const ProjectCard = ({ project }) => {
  return (
    <Card className={style.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          className={style.cardMedia}
          image={project.image}
          alt='project img'
        />
        <CardContent>
          <Typography 
          className={style.cardTitle}>
            {project.title}
          </Typography>
          <Typography 
          className={style.cardTechStack}>
            {project.techStack}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions 
      className={style.cardActions}>
        <Button 
        className={style.cardButton} 
        href={project.link} 
        target="_blank" 
        rel="noopener noreferrer">
          OPEN
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;