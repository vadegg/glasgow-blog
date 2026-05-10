export const META_DESCRIPTION_MIN_LENGTH = 150;
export const META_DESCRIPTION_MAX_LENGTH = 160;

export function normalizeMetaDescription(value: string): string {
  return value.trim().replace(/\s+/g, ' ');
}

export function isMetaDescriptionLengthValid(value: string): boolean {
  const normalized = normalizeMetaDescription(value);
  return (
    normalized.length >= META_DESCRIPTION_MIN_LENGTH &&
    normalized.length <= META_DESCRIPTION_MAX_LENGTH
  );
}

export function ensureMetaDescription(value: string, label = 'Meta description'): string {
  const normalized = normalizeMetaDescription(value);

  if (!isMetaDescriptionLengthValid(normalized)) {
    throw new Error(
      `${label} must be ${META_DESCRIPTION_MIN_LENGTH}-${META_DESCRIPTION_MAX_LENGTH} characters. Received ${normalized.length}.`
    );
  }

  return normalized;
}
