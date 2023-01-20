import { FunctionComponent } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Box, Typography, Link, Container } from "@mui/material";

import { Pathes } from "../AppRouter/interfaces";
import { HeaderProps } from "./interfaces";
import { styles } from "./styles";

export const Header: FunctionComponent<HeaderProps> = ({
  title = "Welcome to our cinema",
  subtitle = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, labore.",
}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isGoBackLink =
    pathname !== Pathes.MAIN &&
    pathname !== Pathes.ERROR &&
    pathname !== Pathes.NOTHING_FOUND;

  const isGoToMainLink =
    pathname === Pathes.NOTHING_FOUND || pathname === Pathes.ERROR;

  return (
    <Box sx={styles.header}>
      <Container maxWidth={false}>
        <Box sx={styles.headerWrapper}>
          <Box>
            <Typography variant="h2" sx={styles.headerTitle}>
              {title}
            </Typography>
            <Typography variant="h3">{subtitle}</Typography>
          </Box>
          {isGoBackLink && (
            <Link onClick={() => navigate(-1)} sx={styles.headerLink}>
              Go back
            </Link>
          )}
          {isGoToMainLink && (
            <Link href={Pathes.MAIN} sx={styles.headerLink}>
              Go to the main page
            </Link>
          )}
        </Box>
      </Container>
    </Box>
  );
};
