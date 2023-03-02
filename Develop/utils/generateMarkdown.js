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
      "The MIT License":
        "https://img.shields.io/badge/License-MIT-yellow.svg",
    },
    {
      "Eclipse Public License 1.0":
        "https://img.shields.io/badge/License-EPL_1.0-red.svg",
    },
    {
      "GNU GPL v3": "https://img.shields.io/badge/License-GPLv3-blue.svg",
    },
  ];

  // console.log("generatemark: ", arrayBadge[license]);
  let selectedLicense = arrayBadge.filter((badge) => {
    return badge[license]
  })

  if (selectedLicense[0] == undefined) {
    return "Not badge";
  } else {
    
    return selectedLicense[0];
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
      "The MIT License": "https://opensource.org/license/mit",
    },
    {
      "Eclipse Public License 1.0": "https://opensource.org/licenses/EPL-1.0",
    },
    {
      "GNU GPL v3": "https://www.gnu.org/licenses/gpl-3.0",
    },
  ];

  let selectedLink = licenseLink.filter((link) => {
    return link[license]
  })
  
  if (selectedLink[0] == undefined) {
    return " ";
  } else {
    console.log("link", selectedLink[0])
    return selectedLink[0];
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  const licenseSection = [
    {
      "Apache 2.0 License": `  Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`
    },
    {
    "The MIT License": `Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
    },
    {
      "Eclipse Public License 1.0":`Everyone is permitted to copy and distribute copies of this Agreement, but in order to avoid inconsistency the Agreement is copyrighted and may only be modified in the following manner. The Agreement Steward reserves the right to publish new versions (including revisions) of this Agreement from time to time. No one other than the Agreement Steward has the right to modify this Agreement. The Eclipse Foundation is the initial Agreement Steward. The Eclipse Foundation may assign the responsibility to serve as the Agreement Steward to a suitable separate entity. Each new version of the Agreement will be given a distinguishing version number. The Program (including Contributions) may always be distributed subject to the version of the Agreement under which it was received. In addition, after a new version of the Agreement is published, Contributor may elect to distribute the Program (including its Contributions) under the new version. Except as expressly stated in Sections 2(a) and 2(b) above, Recipient receives no rights or licenses to the intellectual property of any Contributor under this Agreement, whether expressly, by implication, estoppel or otherwise. All rights in the Program not expressly granted under this Agreement are reserved.`
    },
    {
      "GNU GPL v3":` This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
`
    }

  ]

  let selectedSection = licenseSection.filter((link) => {
    return link[license]
  })
  
  if (selectedSection[0] == undefined) {
    return " ";
  } else {
    return selectedSection[0];
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const license = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

 return readmeFile`
  # ${data.title}
 [![image alt text](${license})](${licenseLink}})

## Table of Contents
- [Introduction](#introduction)
- [Description](#description)
- [Usage](#usage)
- [Installation](#installation)
- [Testing Utilities](#testing-utilities)
- [Contributors](#contributors)
- [LICENSE](#license)



## Introduction <a id="introduction"></a>

## Description <a id="description"></a>
${data.description}

## Usage <a id="usage"></a>
${data.usage}

## Installation <a id="installation"></a>
${data.installation}

## Testing Utilities <a id="testing-utilities"></a>
${data.testing}

## Contributors <a id="contributors"></a>
${data.contributors}

## LICENSE <a id="license"></a>
${data.license}
  `

  return `# ${data.title}

`;
//   return `# ${data.title}

// `;
}

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
  generateMarkdown
};
