/** @jsx jsx */
import { jsx, Link, useThemeUI } from "theme-ui"
import { readableColor } from "polished"
import useSiteMetadata from "../hooks/use-site-metadata"

const Footer = ({ bg }: { bg: string }) => {
  const { siteTitle } = useSiteMetadata()
  const { theme } = useThemeUI()

  const text = readableColor(
    bg,
    theme!.colors!.textMuted as string | undefined,
    theme!.colors!.textMutedLight as string | undefined
  )

  return (
    <footer
      sx={{
        position: [`relative`, `relative`, `relative`, `fixed`],
        width: (t: any): any => [`100%`, `100%`, `100%`, t.sidebar.normal, t.sidebar.wide],
        bottom: 0,
        color: text,
        fontSize: 0,
        p: [3, 3, 4],
        background: bg,
        a: {
          color: readableColor(bg),
          "&:hover,&:focus": {
            color: readableColor(bg, `primary`, `primaryLight`, false),
          },
        },
        variant: `footer`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} by {siteTitle}.
      </div>
    </footer>
  )
}

export default Footer
