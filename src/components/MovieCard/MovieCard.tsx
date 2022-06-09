import React from 'react';

import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Box,
} from '@mui/material';

import { styles } from './styles';
import { ButtonLink } from '../ButtonLink';
import { ButtonLinkColor } from '../ButtonLink/interfaces';
import { MovieCardProps } from './interfaces';

export const MovieCard: React.FC<MovieCardProps> = ({
  id,
  title,
  actors,
  genre,
  plot,
  poster,
  runtime,
  year,
}) => {
  return (
    <Card sx={styles.movieCard}>
      <CardMedia
        component="img"
        image={poster}
        alt="image"
        title={title}
        sx={styles.movieCardImg}
      />
      <Box sx={styles.movieCardContentWrapper}>
        <CardContent sx={styles.movieCardContent}>
          <Typography variant="h2" sx={styles.movieCardTitle}>
            {title}
          </Typography>
          <Typography variant="h3" sx={styles.movieCardDescription}>
            {actors}
          </Typography>
          <Typography variant="h3">{plot}</Typography>
        </CardContent>
        <CardActions sx={styles.movieCardActions}>
          <Box sx={styles.movieCardTagsWrapper}>
            {genre &&
              genre.map((item) => (
                <Typography variant="h4" sx={styles.movieCardTag} key={item}>
                  {item}
                </Typography>
              ))}
          </Box>
          <Box sx={styles.movieCardAdditionalInfo}>
            <Typography variant="h3" sx={styles.movieCardYear}>
              {year} year
            </Typography>
            <Typography variant="h3" sx={styles.movieCardDescription}>
              {runtime}
            </Typography>
          </Box>
          <ButtonLink
            className={styles.movieCardLinkButton}
            path={`/movie/${id}`}
            title="More info..."
            color={ButtonLinkColor.SECONDARY}
          />
        </CardActions>
      </Box>
    </Card>
  );
};
