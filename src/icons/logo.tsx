import * as React from "react"
type SidebarProps = { bg: string }

const Logo = ({ bg }: SidebarProps) => (
  <img src={bg==='white'? './logo.png':'./logo-inv.png' } />
)

export default Logo
