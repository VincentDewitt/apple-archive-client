import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
     <div class="container">
		<div class="SideBar">
			<nav class="fullnav" role="navigation">
        <ul>
          <li>1997</li>
          <a href="https://applearchivewireframe.vincentcataldo.repl.co/productpage.html">
           <li>iMac</li>
          </a>
        </ul>
    </nav>
    </div>
    <div class="content">
    <main role="main">
      <a href='https://applearchivewireframe.vincentcataldo.repl.co/searchpage.html'>
      <button class="fullsearchbutton">
      Search
      </button>
      </a>
      <header role="banner">
        <h1>AppleArchive</h1>
      </header>
      <section>
        <header>
            <h2>What is AppleArchive?</h2>
        </header>
        <p>
          Place Holder text on what the app is. 
          Praesent sagittis a mi sit amet dictum. Donec orci nibh, dignissim in leo et, congue semper mauris. Donec elit lacus, dictum et placerat eget, rhoncus sodales erat. Curabitur sit amet placerat neque, a tempus mi. Suspendisse a tempus dolor. Nullam porttitor nisi sed justo dictum consequat. Etiam sed congue felis.</p>
      </section>
      <section>
        <header>
            <h2>About the Developer</h2>
            <p>Placeholder image and text about me</p>
        </header>
      </section>
    </main>
    </div>
    </div>
    <footer role="content-info">Footer</footer>
    </div>
  );
}

export default App;
