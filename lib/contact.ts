/**
 * Contact information for Beacon Digital Health
 */

export const CONTACT_EMAIL = "izabela@beacondh.co.uk";

export const getMailtoLink = (
  subject?: string,
  body?: string
): string => {
  let mailto = `mailto:${CONTACT_EMAIL}`;
  const params = [];
  
  if (subject) {
    params.push(`subject=${encodeURIComponent(subject)}`);
  }
  
  if (body) {
    params.push(`body=${encodeURIComponent(body)}`);
  }
  
  if (params.length > 0) {
    mailto += "?" + params.join("&");
  }
  
  return mailto;
};
