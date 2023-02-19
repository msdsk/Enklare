export default (s: string) => {
  return s.split(" ").slice(0, 3).join(" ") + "..."
}