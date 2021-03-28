export const scrollIntoView = (
  viewID: string,
  behavior: 'auto' | 'smooth' | undefined,
): void => {
  document.getElementById(viewID)?.scrollIntoView({ behavior: behavior });
};