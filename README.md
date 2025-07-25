# Khaathwik.live Website

A responsive single-page website for Khaathwik, covering food, cooking, exploring places, traveling, real estate, business, technology, arts, blogs, and contact sections.

## Project Structure
- `index.html`: Main HTML file
- `src/input.css`: Tailwind CSS input file
- `css/styles.css`: Generated CSS file
- `js/main.js`: JavaScript for interactivity
- `assets/`: Folder for images, GIFs, and videos
- `package.json`: Node.js configuration for dependencies and scripts
- `tailwind.config.js`: Tailwind CSS configuration
- `.gitignore`: Git ignore file for unnecessary files

## Prerequisites
- **Node.js**: Install Node.js (v16 or higher) from https://nodejs.org/
- **npm**: Comes with Node.js
- **AWS CLI**: Install and configure for deployment (optional) from https://aws.amazon.com/cli/

## Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone <your-repo-url>
   cd khaathwik-live
2. **Install Dependencies**:
   npm install
3. **Build Tailwind CSS**:
   #### Generate the CSS file:
   npm run build:css
   #### For development with live reloading:
   npm run watch:css
4. **Add Assets**:
   Place your images in assets/images/.
   Place your GIFs in assets/gifs/.
   Place your videos in assets/.
   Update the src attributes in index.html to point to your actual files.
   Local Testing:
   #### Use a local server (e.g., Live Server in VS Code) to test:
   npx http-server
   
   #### Open http://localhost:8080 in a browser.
