import { ChildImageSharp } from "../types"
import { filterBySlug } from "./resolver-templates"
export interface IGridItem {
  slug: string
  title: string
  cover: ChildImageSharp
  __typename: "MdxProject" | "MdxPage"
}

function defaultResolver(data: IGridItem[]): IGridItem[] {
  return data
}

const modifyGrid = (data) => filterBySlug(data, ["/showcase","/music","/causes","/instagram"]);

/**
 * Examples:
 * 
 * You can import the onlyPages() function to filter out everything but pages:
 *
 * const modifyGrid = data => onlyPages(data)
 *
 * You can also do more sophisticated filtering, like the filterBySlug() function that also takes in a second parameter (an array of slugs)
 * You'll need to pass the data in the second argument:
 *
 * 
 */

export default modifyGrid
