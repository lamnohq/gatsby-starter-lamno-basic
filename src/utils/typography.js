import Typography from "typography"
import theme from "typography-theme-github"
import CodePlugin from "typography-plugin-code"

theme.plugins = [new CodePlugin()]
const typography = new Typography(theme)

export const { scale, rhythm, options } = typography
export default typography
