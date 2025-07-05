### 🚩🌍 COUNTRIES EXPLORER APP 🌍🚩
This Application is modern and responsive and built with React. It allows users to explore countries from around the world by providing
detailed information, search functinality, and light/dark theme switching capabilities. I deviated from the norm and made this with a 
desk-top first approach featuring large, readable fonts, and spacious layouts--as its what I like:).


_______________________________________________________________________________________________________________________________________________________________
__Live DEMO__
[Link to live Demo of Countries Explorer App](https://countries-explorerfrj.netlify.app/)

_Screenshots_
_Light Mode_
<img width="1280" alt="image" src="https://github.com/user-attachments/assets/7a7b5f89-81dc-4f6c-a55a-94b20f1a5b19" />

_Dark Mode_
<img width="1280" alt="image" src="https://github.com/user-attachments/assets/6fba669f-39cc-469b-9d62-9c225c8a3b92" />

-------------------------------------------------------------------------------------------------------------------------
_Region Dropdown_
<img width="228" alt="image" src="https://github.com/user-attachments/assets/a0116f30-f2aa-4112-bb9f-8bdf4fec142e" />
---------------------------------------------------------------------------------------------------------------------------

_Filtered Region to show only Oceania_
<img width="1280" alt="image" src="https://github.com/user-attachments/assets/e857e052-92a4-4723-8e59-b954ee1a7661" />
---------------------------------------------------------------------------------------------------------------------------

_Country Detail_
<img width="1280" alt="image" src="https://github.com/user-attachments/assets/b2a309a1-47d8-46e9-8e9d-9b6ed8b0bc23" />


_Responsive Design Examples_

<img width="388" alt="image" src="https://github.com/user-attachments/assets/acb6c4ae-bd2b-461f-ba1b-6409000dca5a" />

<img width="725" alt="image" src="https://github.com/user-attachments/assets/c139b1b7-95d2-446a-9088-2971d6abacfa" />

___________________________________________________________________________________________________________________________________


__⚡Quick Start__
*Prerequisites: Node.js, npm*

*Clone the repository:*
 -`git clone https://github.com/FrancesReagan/countries-explorer`
 `cd countries-explorer`

 *Install dependencies:*
  -`npm install`

 *Start the development server*
  -`npm run dev`

 *Open browser: navigate to `http://localhost:5173`*

 *Build for production*
  -`npm run build`

 ---------------------------------------------------------------------------------------------------------------------------------------

 __Project Structure__

 <img width="143" alt="image" src="https://github.com/user-attachments/assets/f6b5aeb2-ef57-4a40-95a3-649b951e6de4" />


 ---------------------------------------------------------------------------------------------------------------------------------------

 __Key Features Implementation__

_Large-scale design approach_

 *Desktop-first approach with emphasis on readbility*

 *Large font sizes throughout application*

 *Spacious Layouts with lots of padding and margins*

 *Large interactive elements for improved user experience*

_Modern UI components_
 -custom dropdown--with slide animations and hover effects
 -card hover effects--smooth transforms and shadows
 -loading animations with pro spinner design
 -responsive grid that adapts from 3 cols to 1 col

 _Theme Managment_
  -Context API for global theme state
  -CSS custom properties for dyanmic themes
  -persistent theme selection across browser sessions
  -smooth transitions between theme changes

 _API integration_
  -REST Countries API integration
  -Custom hook for data fetching and state management
  -Error handling with user friendly messages
  -Loading states with pro animations
  -optimized API calls with field selection for performance

 _Performance optimizations_
  -useMemo for filtered search results
  -efficient re-rendering with proper React keys
  -lazy loading of country detail views
  ___________________________________________________________________________________________________________________________________________________

  __Features__

*Browse the World's countries: view information on about 250 countries*

*Real-Time Search: search by country name with responsive filtering*

*Region Filtering: filter countries by continent--Africa, Americas, Asia, Europe, and Oceania).*

*Detailed Country View: click on a country flag to see detailed information about that country:

 -Native name and population statistics.
 
 -Region, sub-region, and captial city.
 
 -Languages and currencies.
 
 -Top-level domain information (i.e. each country's internet domain extension--United States--.us).
 
 -Border countries display (show neighboring countries by three letter country abbreviation).----planning to make this interactive in next interation.
 
*Light/Dark Theme: toggle between light or dark modes*

*Responsive Layout: responsive design that adapts from desktop to mobile.*

*Modern animations: on drop-drop menus--hover effects and subtle transitions-- and loading states*

__Tech Used__

*React 19-modern React with functional components and hooks*

*Vite 6-build tool and development server*

*REST Countries API-comprehensive country data (public--no API key required)*

*Lucide React- modern icon library*

*CSS grid & flexbox - advanced responsive layout techniques*

*CSS custom properties- dynamic theme switching implementation*

__React Concepts__

*Component Architecture: reusable components with clear functionalities*

*State Management: useState, useContext, and custom hooks (useCountries)*

*Side Effects: useEffect for API calls and lifecycle management*

*Performance optimization: useMemo for expensive filtering calculations (without useMemo--this amount of filtering and would be re-rendering would be costly in CPU intensive, time-consuming, and resource-heavy).*

*Conditional rendering: dynamic UI based on the application state*

*Event handling: complex user interactions and form controls*

*Error Boundaries: graceful error handling and loading states*


  __Development challenges__
  
   -CSS layout issues: grid layout displaying countries in a single column; solution: removed conflicting default Vite styles and fixed CSS class names
   
   -Theme integration: consistent light/dark mode across all components; solution: implemented proper CSS class management with Context API
 



 
https://emojis.wiki/

                                           









