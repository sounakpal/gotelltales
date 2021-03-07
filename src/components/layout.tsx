import React from "react"
import { Global } from "@emotion/core"
import { Box } from "theme-ui"
import useSiteMetadata from "../hooks/use-site-metadata"
import useNavigation from "../hooks/use-navigation"
import Footer from "./footer"
import Header from "./header"
import SEO from "./seo"

type LayoutProps = { children: React.ReactNode; className?: string }

const Layout = ({ children, className = `` }: LayoutProps) => {
  const meta = useSiteMetadata()
  const nav = useNavigation()

  return (
    <React.Fragment>
      <Global
        styles={(theme) => ({
          "*": {
            boxSizing: `inherit`,
          },
          html: {
            WebkitTextSizeAdjust: `100%`,
          },
          img: {
            borderStyle: `none`,
          },
          pre: {
            fontFamily: `monospace`,
            fontSize: `1em`,
          },
          "[hidden]": {
            display: `none`,
          },
          "::selection": {
            backgroundColor: theme.colors.text,
            color: theme.colors.background,
          },
          a: {
            transition: `all 0.3s ease-in-out`,
          },
          ".mainLayout": {
              display: `grid`,
              gridGap: `10px`,
              gridTemplateColumns: `[col1-start] 250px  [col2-start] auto [col2-end]`,
              gridTemplateRows: `[row1-start] auto [row2-start] 72px [row2-end]`,
              height: `100vh`,
              overflow: `hidden`,
            },
          
            "header": {
              gridColumn: `col1-start / col2-start`,
              gridRow: `row1-start / row2-start`,
            },
            "main": {
              gridColumn: `col2-start / col2-end`,
              gridRow: `row1-start / row2-end`,
              overflow: `auto`,
            },
          "footer":{
            gridColumn: `col1-start / col2-start`,
            gridRow: `row2-start / row2-end`,
          },
        })}
      />
      <SEO />
      <Box className="mainLayout">
        <Header meta={meta} nav={nav} />
        <Box as="main" variant="layout.main" className={className}>
          {children}
        </Box>
        <Footer />
      </Box>
    </React.Fragment>
  )
}

export default Layout
