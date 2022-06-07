import React from 'react';

import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Box,
  Link,
} from '@mui/material';

import { styles } from './styles';
import { ButtonLink } from '../ButtonLink';
import { ButtonLinkColor } from '../ButtonLink/interfaces';

export const MovieCard: React.FC = () => {
  return (
    <Card sx={styles.movieCard}>
      <CardMedia
        component="img"
        image="https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt="image"
        title="batman"
        sx={styles.movieCardImg}
      />
      <Box sx={styles.movieCardContentWrapper}>
        <CardContent sx={styles.movieCardContent}>
          <Link sx={styles.movieCardTitleLink} href="/movie/:id">
            <Typography variant="h2">Film name</Typography>
          </Link>
          <Typography variant="h3" sx={styles.movieCardDescription}>
            actor, actor
          </Typography>
          <Typography variant="h3">Description</Typography>
        </CardContent>
        <CardActions sx={styles.movieCardActions}>
          <Box sx={styles.movieCardTagsWrapper}>
            <Typography variant="h4" sx={styles.movieCardTag}>
              tag
            </Typography>
            <Typography variant="h4" sx={styles.movieCardTag}>
              tag
            </Typography>
            <Typography variant="h4" sx={styles.movieCardTag}>
              tag
            </Typography>
          </Box>
          <Box sx={styles.movieCardAdditionalInfo}>
            <Typography variant="h3" sx={styles.movieCardYear}>
              year
            </Typography>
            <Typography variant="h3" sx={styles.movieCardDescription}>
              runtime
            </Typography>
          </Box>
          <ButtonLink
            className={styles.movieCardLinkButton}
            href="/movie/:id"
            title="More info..."
            color={ButtonLinkColor.SECONDARY}
          />
        </CardActions>
      </Box>
    </Card>
  );
};
