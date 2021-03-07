/** @jsx jsx */
import { Box, Link, Flex, jsx } from "theme-ui"

const Footer = () => (
  <Box as="footer">
    <Flex
      sx={{
        justifyContent: `center`,
        alignItems: `center`,
        mt: 1,
        color: `text`,
        fontWeight: `semibold`,
        padding: `10px`,
        textAlign: `center`,
        fontSize: `14px`,
      }}
    >
      <img width="30" height="30" src="https://img.lekoarts.de/gatsby/logo_w30.png" alt="LekoArts Logo" />
      {`  `}
      &nbsp;Copyright &copy; {new Date().getFullYear()}. All rights reserved.
    </Flex>
  </Box>
)

export default Footer
