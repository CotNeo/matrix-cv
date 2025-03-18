// Format date to human-readable string
export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// Truncate text to a specific length
export const truncateText = (text: string, maxLength: number = 100): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

// Validate email format
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Generate a random ID
export const generateId = (prefix: string = 'id'): string => {
  return `${prefix}_${Math.random().toString(36).substring(2, 9)}`;
};

// Scroll to a section with smooth animation
export const scrollToSection = (id: string): void => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Debounce function
export const debounce = <T extends unknown[]>(
  func: (...args: T) => unknown, 
  waitFor: number
): ((...args: T) => void) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return (...args: T): void => {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => func(...args), waitFor);
  };
};

// Get contrast color (black or white) based on background color
export const getContrastColor = (hexColor: string): string => {
  // Remove the # if present
  const color = hexColor.startsWith('#') ? hexColor.slice(1) : hexColor;
  
  // Convert to RGB
  const r = parseInt(color.substr(0, 2), 16);
  const g = parseInt(color.substr(2, 2), 16);
  const b = parseInt(color.substr(4, 2), 16);
  
  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
  // Return black for bright colors and white for dark colors
  return luminance > 0.5 ? '#000000' : '#FFFFFF';
}; 