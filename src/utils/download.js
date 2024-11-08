// download resume handler
export const handleDownloadResume = () => {
  const link = document.createElement("a");
  link.href =
    "https://docs.google.com/document/d/16c7T6GkG7dvxl6Y1dsjszAVZJ5tJpX2vADTbVr676tY/edit?usp=sharing";
  link.download = "Lukman_Asinmi_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
