import React from 'react';

import { Box, CardContent, Typography, CardMedia, Card } from '@mui/material';

import { styles } from './styles';
import { ButtonLink } from '../../components/ButtonLink';

export const MoviePage: React.FC = () => {
  return (
    <Box>
      <Card sx={styles.moviePageWrapper}>
        <Box sx={styles.moviePageHeader}>
          <CardMedia
            sx={styles.movieMainPoster}
            component="img"
            image="https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="image"
            title="batman"
          />
          <Box sx={styles.moviePageHeaderTitle}>
            <Typography variant="h2" sx={styles.movieTitle}>
              Film name
            </Typography>
            <ButtonLink href="/reserve/:id" title="Buy a ticket" />
          </Box>
          <Box sx={styles.movieRating}>
            <Typography variant="h3" sx={styles.movieRatingTitle}>
              Metascore: 12
            </Typography>
            <Typography variant="h3" sx={styles.movieRatingTitle}>
              Imdb rating: 12
            </Typography>
          </Box>
        </Box>
        <CardContent sx={styles.movieContent}>
          <Box sx={styles.movieDescriptionWrapper}>
            <Typography variant="h3" sx={styles.movieDescriptionTitle}>
              Description:
            </Typography>
            <Typography variant="h3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Expedita, labore. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Expedita, labore. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Expedita, labore.
            </Typography>
            <Box sx={styles.movieInfoBox}>
              <Typography variant="h2">Country: </Typography>
              <Typography variant="h2">Awards:</Typography>
              <Typography variant="h2">Actors:</Typography>
              <Typography variant="h2">Year: </Typography>
              <Typography variant="h2">Director: </Typography>
              <Typography variant="h2">Genre: </Typography>
              <Typography variant="h2">Language: </Typography>
              <Typography variant="h2">Box office: </Typography>
              <Typography variant="h2">Released: </Typography>
            </Box>
          </Box>
          <Box sx={styles.moviePostersBox}>
            <CardMedia
              sx={styles.moviePoster}
              component="img"
              image="https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="image"
              title="batman"
            />
            <CardMedia
              sx={styles.moviePoster}
              component="img"
              image="https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="image"
              title="batman"
            />
            <CardMedia
              sx={styles.moviePoster}
              component="img"
              image="https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="image"
              title="batman"
            />
            <CardMedia
              sx={styles.moviePoster}
              component="img"
              image="https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="image"
              title="batman"
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
