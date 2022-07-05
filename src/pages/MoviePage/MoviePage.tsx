import React from 'react';

import { Box, CardContent, Typography, CardMedia, Card } from '@mui/material';
import { ButtonLink } from '../../components/ButtonLink';
import { MoviePageProps } from './interfaces';
import { motion } from 'framer-motion';

import { styles } from './styles';

export const MoviePage: React.FC<MoviePageProps> = ({
  id,
  actors,
  awards,
  boxOffice,
  director,
  genre,
  imdbRating,
  language,
  metaScore,
  plot,
  poster,
  released,
  title,
  year,
  country,
  addCurrentMovie,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box data-testid="card-details-page">
        <Card sx={styles.moviePageWrapper}>
          <Box sx={styles.moviePageHeader}>
            <CardMedia
              sx={styles.movieMainPoster}
              component="img"
              image={poster}
              alt="image"
              title={title}
            />
            <Box sx={styles.moviePageHeaderTitle}>
              <Typography variant="h2" sx={styles.movieTitle}>
                {title}
              </Typography>
              <ButtonLink
                path={`/reserve/${id}`}
                title="Buy a ticket"
                onClick={addCurrentMovie}
              />
            </Box>
            <Box sx={styles.movieRating}>
              <Typography variant="h3" sx={styles.movieRatingTitle}>
                Metascore: {metaScore}
              </Typography>
              <Typography variant="h3" sx={styles.movieRatingTitle}>
                Imdb rating: {imdbRating}
              </Typography>
            </Box>
          </Box>
          <CardContent sx={styles.movieContent}>
            <Box sx={styles.movieDescriptionWrapper}>
              <Typography variant="h3" sx={styles.movieDescriptionTitle}>
                Description:
              </Typography>
              <Typography variant="h3">{plot}</Typography>
              <Box sx={styles.movieInfoBox}>
                <Typography variant="h2">Country: {country}</Typography>
                <Typography variant="h2">Awards: {awards}</Typography>
                <Typography variant="h2">Actors: {actors}</Typography>
                <Typography variant="h2">Year: {year}</Typography>
                <Typography variant="h2">Director: {director} </Typography>
                <Typography variant="h2">Genre: {genre}</Typography>
                <Typography variant="h2">Language: {language}</Typography>
                <Typography variant="h2">Box office: {boxOffice}</Typography>
                <Typography variant="h2">Released: {released}</Typography>
              </Box>
            </Box>
            <Box sx={styles.moviePostersBox}>
              {[1, 2, 3, 4].map((item) => (
                <CardMedia
                  key={item}
                  sx={styles.moviePoster}
                  component="img"
                  image={poster}
                  alt="image"
                  title={title}
                />
              ))}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </motion.div>
  );
};
