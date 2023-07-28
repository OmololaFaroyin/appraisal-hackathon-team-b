/**
 *
 * @param file the file blob ready for upload
 * @returns {Promise} - a promise that returns the File Buffer.. in base64
 */
export const convertToBase64 = (file: File | any) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = (e: any) => resolve(e.target.result);
    fileReader.onerror = (e: any) => reject(e);
  });
};
