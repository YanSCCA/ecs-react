/**
 * 
 * @param {EventTarget} form 
 * @returns The form data
 */
export function getFormData(form) {
  const formData = new FormData(form);
  return Object.fromEntries(formData);
}