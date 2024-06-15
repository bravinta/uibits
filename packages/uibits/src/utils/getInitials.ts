export function getInitials(name: string): string {
  if (!name) return "";

  const parts = name.trim().split(/\s+/);
  let initials = parts[0].charAt(0).toUpperCase();

  if (parts.length > 1) {
    initials += parts[parts.length - 1].charAt(0).toUpperCase();
  } else if (parts[0].length > 1) {
    initials += parts[0].charAt(1).toUpperCase();
  }

  return initials;
}
