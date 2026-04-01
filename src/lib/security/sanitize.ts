export function sanitizeText(value: string) {
  return value.replace(/[<>]/g, "").trim();
}

export function sanitizeMultilineText(value: string) {
  return value
    .replace(/[<>]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}
