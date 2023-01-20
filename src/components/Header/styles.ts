import { palette } from "../../styles/theme/theme";

export const styles = {
  header: {
    width: "100%",
    height: "160px",
    background: palette.background.primary,
    padding: "42px 0px",
    marginBottom: "24px",
  },
  headerWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    cursor: "pointer",
  },
  headerTitle: {
    marginBottom: "30px",
  },
  headerLink: {
    paddingTop: "5px",
    cursor: "pointer",
  },
};
