export function classNames(...classes: any[]) {
  // Join all classes with a space and return it.
  return classes.filter(Boolean).join(" ");
}
