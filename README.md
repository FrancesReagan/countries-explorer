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

<img width="228" alt="image" src="https://github.com/user-attachments/assets/a0116f30-f2aa-4112-bb9f-8bdf4fec142e" />_Region Dropdown_
---------------------------------------------------------------------------------------------------------------------------


<img width="1280" alt="image" src="https://github.com/user-attachments/assets/e857e052-92a4-4723-8e59-b954ee1a7661" />_Filtered Region to show only Oceania_

---------------------------------------------------------------------------------------------------------------------------


<img width="1280" alt="image" src="https://github.com/user-attachments/assets/b2a309a1-47d8-46e9-8e9d-9b6ed8b0bc23" />_Country Detail_



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
   
   -Component Structure: JSX syntax errors and improper nesting; solution: refactored components with proper parent-child relationships
   
   -Large-scale UI design: balancing large fonts with responsive design; solution: created scalable typography system with breakpoint-specific sizing
   
   -Modern dropdown styles: first take on drop-down button was dull; solution: built better dropdown menu with animations and hover effects.
   

__Potential Improvements__
   *Typescript implementatoin--that may be a future practice run of mine--to do this project again using Typescript and Tailwinds.* 
    Will read up on this site for next take on it--- [Mastering Tailwind CSS and Typescript: A comprehensive guide](https://www.xjavascript.com/blog/tailwind-and-typescript/)

 __Test__
   -Run test suite:
   `npm test`

__Deployment__
 -Netlify: build the project `npm run build`; drag and drop the `dist` folder to Netlify; get instant live URL with auto deployments

_______________________________________________________________________________________________________________________________________________________________
__Acknowledgements__
 -My 2025-RTT-23 instructors and cohort classmates--thank you for this amazing journey together; REST Countries API, Lucide React, Vite, Nunito Sans, React Community

 ____________________________________________________________________________________________________________________________________________________________________________

 __Reflections__
 Project Reflection: Countries Explorer App:
 Development Process: building this countries explorer applicatoin was long and involved:). It gave me a taste of adding many styles for many components and gave me a taste of modern React development with Context API.  
 I started by planning the architecture of the components--determining the reusable ones--like CountryCard, SearchBar, and RegionFilter. The project evolved greatly during the development--particularly in terms of 
 scale and user experience. What started as a standard-sized application transformed into a large-scale desktop first design focused on readability and user interaction---probably because my eyes now need larger everything:)!.

 Tech challenges and solutions:
 CSS layout and styling issues--funnily enough it was the styling that was the biggest challenge;)--solving layout problems due to forgetting to delete old styles from the Vite default project, missing spaces in CSS class names, typos,
 incorrect CSS class naming between components---forgetting if singular country or countries:).
 Solution: removed vite styles, fixed className template literals, and ensured consistent naming across CSS files.

 Theme implementation challenges: 
 implementing consistent light/dark modes across all components was a bit more challenging then I had anticipated. The issues were: purple search boxes in dark mode due to missing theme-specific CSS, inconsistent sytling across different components, 
 Context API integration requiring careful prop management.
 Solution: created comprehensive theme classes for every component and used React Context API effectively to share theme state globablly.

 Component Structure and JSX issues:
  I had to correct many syntax errors that prevented complilation:
  -missing closing braces in useEffect dependencies
  -incorrect JSX nesting (input inside of Search component)
  -malformed onClick handlers with the wrong bracket placement
  -missing semicolons in CSS causing parsing errors
 Solution: methodical debugging and code review, ensuring proper JSX structure and CSS syntax throughout the app.

 Large-scale design implementation:
 I changed from normal sized--to larger sized design--which presented unique challenges:
 -balance large fonts with responive design 
 -maintain proporitions across different screen sizes
 -creating modern UI elements like custom dropdown menus with subtle animations
 Solution: I developed a scalable typography system with breakpoint-specific sizing and implemented modern CSS techniques for animations and hover effects.

 __Learning Outcomes__
  This project deepened my understanding of:
  *React Hooks--useEffect for API calls, useContext for global state management, and useMemo for performance optimization.*
  *CSS architecture: I learned the importance of consistent naming conventions and avoiding conflicts with framework defaults*
  *Debugging skills: I developed a more systematic approach to identifying and fixing syntax errors, layout issues, and styling conflicts*
  *Modern CSS: I gained experience with CSS Grid, flexbox, custom properties, and animation techniques*
  *API integration: I learned proper error handling, loading states, and data structure management*
  *Component design: I developed a better understanding of proper JSX structure, parent-child relationships, and reusable component patterns.*

  __Potential Improvements__
   *Typescript implementatoin--that may be a future practice run of mine--to do this project again using Typescript and Tailwinds.* 
    Will read up on this site for next take on it--- [Mastering Tailwind CSS and Typescript: A comprehensive guide](https://www.xjavascript.com/blog/tailwind-and-typescript/)

__Conclusion__
The challenges faced on the project reminded me that I needed to refresh my CSS learning and keep it on par with the other subjects I am learning. The biggest challenge I have found in this and all my 
past projects is lessening typos, mismatched names, and other basic human errors. It also reinforced the necessity of consistent running and checking the browswer to see how what was coded actually looks like--do 
do this more frequently --it seems like it would take longer--but in fact constant checking the browser speeds up the development process for sure.🌀
 
 



 

                                           









