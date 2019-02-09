<h1>Interactive Resume Website Built With React.js</h1>

<h2>Still Under Construction</h2>

<h3>How to run (requires npm)</h3>

<ul>
  <li>clone this repo to your desktop</li>
  <li>cd to its directory in your terminal</li>
  <li>type 'npm install' while in the directory</li>
  <li>type 'npm start' to host a live-updating test-build</li>
  </ul>
  
<h3>Languages / Tools Used</h3
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>Javascript</li>
  <li>Create-react-app</li>
  <li>React</li>
  <li>React Router</li>
  <li>VSCode w/ Prettier and ESLint</li>
</ul>

<h3>What I Learned</h3>
Starting a project based off my own design was an intimidating but exciting adventure. It was a great opportunity to practice many of my front end web development skills, while getting familair with create-react-app, Github, Git, and React. The most challenging aspect was learning how to manage state throughout the app. To solve this, I created an arrow-function (locally bound) called toggleDropdown() in the main App.js which was responsible for managing the state of the dropdown menu. I passed that function and App.js' dropdown state as props to the child components. Whenever a child component called the toggleDropdown() function, it would update App.js, triggering a re-render of the direction the nav bar arrow indicator and reveal the dropdown menu. Another challenge I faced was routing my app. I installed React Router from npm and created a Router Switch to determine which component should render depending on the URL.
