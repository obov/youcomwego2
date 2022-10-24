export const cls = (...classes) =>
  classes.filter((cls) => typeof cls !== "boolean").join(" ");
