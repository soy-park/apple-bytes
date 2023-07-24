import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="App">
      <Header />
      {currentPage === 'home' && <AllArticles />}
      {currentPage === 'article' && <SingleArticle />}
    </div>
  );
}

export default App;
