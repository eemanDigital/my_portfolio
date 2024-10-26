// download resume handler
export const handleDownloadResume = () => {
  const link = document.createElement("a");
  link.href =
    "https://drive.google.com/uc?export=download&id=18wSQrl4i4jTecuyTprp-yvBRH6X9UWfU";
  link.download = "Lukman_Asinmi_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
