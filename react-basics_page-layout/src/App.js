import "./Header.css"; // Import CSS file for Header component
import "./MainContent.css"; // Import CSS file for MainContent component
import "./Footer.css"; // Import CSS file for Footer component

function Header() {
  // Implement your JSX code here
  return <nav className="header">Navigation Pane</nav>;
}

function MainContent() {
  // Implement your JSX code here
  return (
    <div className="main-content">
      <h1>Title of the Page</h1>
      <p>main content of the page</p>
    </div>
  );
}

function Footer() {
  // Implement your JSX code here
  return (
    <ul className="footer">
      <li>Link 1</li>
      <li>Link 2</li>
      <li>Link 3</li>
    </ul>
  );
}

function App() {
  // Render components within App
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
