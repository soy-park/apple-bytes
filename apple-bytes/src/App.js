import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="App">
      <Header />
      {currentPage === 'home' && <AllArticles currentPage={currentPage} />}
      {currentPage === 'article' && <SingleArticle currentPage={currentPage} />}
    </div>
  );
}

export default App;
