## Setting up the Artwork Portfolio Project

This guide provides step-by-step instructions for setting up the artwork portfolio project from the provided GitHub repository. It covers cloning the repository, installing dependencies, and starting the development server.

### 1. Cloning the Repository

1. **Open your terminal:** This can be Command Prompt, PowerShell (Windows), Terminal (macOS/Linux), or any other terminal application.

2. **Navigate to your desired directory:** Use the `cd` command to navigate to the directory where you want to download the project. For example:

   ```bash
   cd $HOME
   ```

3. **Clone the repository:** Use the following command to clone the repository:

   ```bash
   git clone https://github.com/edmundo2009/artwork-portfolio.git
   ```

   This will download the project into a new directory named `artwork-portfolio`.


### 2. Installing Dependencies

1. **Navigate to the project directory:**

   ```bash
   cd artwork-portfolio
   ```

2. **Install dependencies:**  

   ```bash
   npm install
   ```

   This will install all the project's dependencies listed in `package.json`.

### 3. Starting the Development Server

1. **Start the server:** Run the following command:

   ```bash
   npm run dev
   ```

   This will start the development server, and your application should automatically open in your web browser.



### Technical Documentation for Artwork Portfolio App

#### Overview

The Artwork Portfolio App is a React-based application designed to showcase a collection of artworks. It provides a flexible and customizable way to display artwork images along with their descriptions, titles, and other metadata. 

#### Key Components

1. **ArtworkDisplay.tsx**
2. **TextOverlay.tsx**
3. **artwork.ts**
4. **artwork-description.ts**

### 1. **ArtworkDisplay.tsx**

This component is responsible for rendering the artwork based on its type and style. It fetches the artwork's description from a markdown file and applies the specified styles.

#### Usage

To use `ArtworkDisplay.tsx`, you need to pass an `Artwork` object as a prop. The `Artwork` object contains all the necessary information about the artwork, including its image URL, title, type, and optional style.

```typescript
import ArtworkDisplay from './components/ArtworkDisplay';
import { Artwork } from './types/artwork';

const artwork: Artwork = {
  id: '1',
  year: 2023,
  imageUrl: '/artwork/2023/2023-1.jpg',
  title: 'Artwork TITLE 1',
  type: 2, // ArtworkDisplayType.SplitScreenTextLeft
  descriptionPath: '/descriptions/3.md',
  style: {
    textPlacement: 'top-left',
    textColor: 'black',
    bgOpacity: 0.1,
    typography: {
      title: {
        size: '4xl',
        weight: 'bold',
        marginBottom: 6
      },
      description: {
        size: 'base',
        weight: 'bold',
        lineHeight: 'relaxed',
        marginBottom: 2
      }
    },
    spacing: {
      padding: {
        x: 4,
        y: 4
      },
      margin: {
        x: 4
      }
    }
  },
};

const MyComponent = () => {
  return (
    <div>
      <ArtworkDisplay artwork={artwork} />
    </div>
  );
};
```

#### Key Features

- **Fetching Markdown Content**: The component fetches the markdown content from the specified `descriptionPath` and renders it using `ReactMarkdown`.
- **Default Styles**: The component provides default styles for different `ArtworkDisplayType`s (e.g., `FullScreen`, `SplitScreenTextLeft`, `FullScreenWithOverlay`).
- **Custom Styling**: You can override the default styles by providing a `style` object in the `Artwork` prop.

### 2. **TextOverlay.tsx**

This component is used to overlay text on top of the artwork image. It applies the specified styles to the text, such as placement, color, and background opacity.

#### Usage

`TextOverlay.tsx` is used internally by `ArtworkDisplay.tsx` but can also be used independently if needed.

```typescript
import TextOverlay from './components/TextOverlay';

const MyComponent = () => {
  return (
    <div className="relative">
      <img src="/path/to/image.jpg" alt="Artwork" className="w-full h-full object-cover" />
      <TextOverlay style={{ textPlacement: 'bottom-left', textColor: 'white', bgOpacity: 0.5 }}>
        <h2 className="text-2xl font-bold">Artwork Title</h2>
        <p>Artwork description goes here.</p>
      </TextOverlay>
    </div>
  );
};
```

#### Key Features

- **Positioning**: The text can be positioned in various locations (e.g., `top-left`, `bottom-right`).
- **Text Color**: The text color can be customized.
- **Background Opacity**: The background behind the text can have varying levels of opacity.
- **Typography and Spacing**: You can specify the font size, weight, line height, and spacing for the text.

### 3. **artwork.ts**

This file defines the types and interfaces used throughout the application. It includes definitions for `Artwork`, `ArtworkDisplayType`, `ArtworkStyle`, and other related types.

#### Usage

This file is primarily used to define the structure of the data that the application works with. It ensures that all components adhere to a consistent data format.

#### Key Features

- **Artwork Interface**: Defines the structure of an artwork object.
- **ArtworkDisplayType Enum**: Specifies the different types of artwork displays.
- **ArtworkStyle Interface**: Defines the customizable styles for artwork display.

### 4. **artwork-description.ts**

This file contains data for artworks and a function to retrieve unique years from the artwork data.

#### Usage

This file is used to provide sample data for the application. You can replace the mock data with your own artwork data.

```typescript
import { mockArtworks, getUniqueYears } from './data/artwork-description';

const artworks = mockArtworks;
const uniqueYears = getUniqueYears(artworks);

console.log(uniqueYears); // Output: [2023, 2022, 2021]
```

#### Key Features

- **Mock Artworks**: Provides a list of sample artworks.
- **getUniqueYears Function**: Extracts and returns a sorted list of unique years from the artwork data.

### Workflow for Implementing the Portfolio App

1. **Set Up the Project**:
   - Clone the repository from GitHub: [Artwork Portfolio App](https://github.com/edmundo2009/artwork-portfolio).
   - Install the necessary dependencies using `npm install` or `yarn install`.

2. **Configure Artwork Data**:
   - Replace the mock data in `artwork-description.ts` with your own artwork data.
   - Ensure each artwork object includes the required fields (`id`, `year`, `imageUrl`, `title`, `type`, and optionally `descriptionPath` and `style`).

3. **Customize Styles**:
   - Modify the `style` object in each artwork to customize the text placement, color, background opacity, typography, and spacing.
   - Use the `ArtworkDisplayType` enum to specify the type of display for each artwork.

