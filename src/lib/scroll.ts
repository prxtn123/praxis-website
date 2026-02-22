// Utility function for smooth scrolling to elements
export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Click handler for anchor links
export const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, elementId: string) => {
  e.preventDefault();
  scrollToElement(elementId);
};
