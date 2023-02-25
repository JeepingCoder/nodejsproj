// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log("license: ", license);
  const arrayBadge = [
    {
      "Apache 2.0 License":
        "https://img.shields.io/badge/License-Apache_2.0-blue.svg",
    },
    {
      "BSD 3-Clause License":
        "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg",
    },
    {
      "Eclipse Public License 1.0":
        "https://img.shields.io/badge/License-EPL_1.0-red.svg",
    },
    {
      "GNU GPL v3": "https://img.shields.io/badge/License-GPLv3-blue.svg",
    },
  ];

  console.log("generatemark: ", arrayBadge[license]);
  if (arrayBadge[license] == undefined) {
    return "Not bage";
  } else {
    return arrayBadge[license];
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = [
    {
      "Apache 2.0 License": "https://opensource.org/licenses/Apache-2.0",
    },
    {
      "BSD 3-Clause License": "https://opensource.org/licenses/BSD-3-Clause",
    },
    {
      "Eclipse Public License 1.0": "https://opensource.org/licenses/EPL-1.0",
    },
    {
      "GNU GPL v3": "https://www.gnu.org/licenses/gpl-3.0",
    },
  ];
  if (licenseLink[license] == undefined) {
    return " ";
  } else {
    return licenseLink[license];
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
  generateMarkdown
};
