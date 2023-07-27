import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import { getArticles } from './fetchAPI';
import AllArticles from './Components/AllArticles/AllArticles';
import { Route, Switch } from 'react-router-dom';
import SingleArticle from './Components/SingleArticle/SingleArticle';

const App = () => {
  // const [articles, setArticles] = useState([]);

  // useEffect(() => {
  //   getArticles()
  //     .then(data => setArticles(data.articles))
  //     .catch(error => {throw new Error(`Error fetchign data: ${error}`)})
  // })

  const mockArray = [{
    "source": {
        "id": null,
        "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Amanda Laskin)",
    "title": "B&H launches Mac mini sale with prices as low as $479",
    "description": "Trying to find a great deal on a desktop computer? B&H is currently having a sale on the popular and affordable Mac mini, with prices as low as $479.Mac mini: small but mighty\r\nThe Mac mini is a low-profile powerhouse computer that fits comfortably in any env…",
    "url": "https://appleinsider.com/articles/23/07/23/bh-launches-mac-mini-sale-with-prices-as-low-as-479",
    "urlToImage": "https://photos5.appleinsider.com/gallery/55513-112739-macmini-xl.jpg",
    "publishedAt": "2023-07-23T18:36:03Z",
    "content": "Trying to find a great deal on a desktop computer? B&amp;H is currently having a sale on the popular and affordable Mac mini, with prices as low as $479. \r\nMac mini: small but mighty\r\nThe Mac mini is… [+6425 chars]"
},
{
    "source": {
        "id": null,
        "name": "The A.V. Club"
    },
    "author": "Sam Barsanti",
    "title": "SAG-AFTRA is using the strike to push for more influencers and content creators to unionize",
    "description": "After the SAG-AFTRA strike began last week, the union released official guidelines for online influencers and content creators on how they can support those on strike and how they can manage existing contracts and sponsorship deals. It was a somewhat interest…",
    "url": "https://www.avclub.com/sag-aftra-influencers-content-creators-1850668557",
    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/f8db5cf4f35042ec7483f4cb2cb2612c.jpg",
    "publishedAt": "2023-07-23T18:32:00Z",
    "content": "After the SAG-AFTRA strike began last week, the union released official guidelines for online influencers and content creators on how they can support those on strike and how they can manage existing… [+2242 chars]"
},
{
    "source": {
        "id": null,
        "name": "Los Angeles Times"
    },
    "author": "Alex Wigglesworth",
    "title": "California forecasters warn of dangerous heat and isolated thunderstorms",
    "description": "Forecasters say much of California will experience hot weather Sunday, and thunderstorms will occur in some mountain and desert areas.",
    "url": "https://www.latimes.com/california/story/2023-07-23/california-forecasters-warn-of-dangerous-heat-and-isolated-thunderstorms",
    "urlToImage": "https://ca-times.brightspotcdn.com/dims4/default/1e82016/2147483647/strip/true/crop/3900x2048+0+344/resize/1200x630!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F1b%2F6a%2F3ec56d2a4016993ba8157766b5e3%2F1324580-me-weather-feature-01-ajs.jpg",
    "publishedAt": "2023-07-23T18:30:24Z",
    "content": "Forecasters were warning about dangerously hot conditions across much of California on Sunday, with triple-digit temperatures raising the risk of heat-related illnesses, as well as isolated thunderst… [+3409 chars]"
},
{
    "source": {
        "id": "usa-today",
        "name": "USA Today"
    },
    "author": "Cardinals Wire",
    "title": "PODCAST: What did the Cowboys do in the offseason?",
    "description": "In this opponent preview podcast, Jess Root speaks with Cowboys Wire managing editor KD Drummond.",
    "url": "https://cardswire.usatoday.com/2023/07/23/podcast-what-did-the-cowboys-do-in-the-offseason/",
    "urlToImage": "https://media.zenfs.com/en/arizona_cardinals_wire_usa_today_sports_articles_662/f2d082674fd604bd9f9003ffba540aba",
    "publishedAt": "2023-07-23T18:29:36Z",
    "content": "We have the second-to-last of our 14 opponent preview shows in 14 days. This show is about the Dallas Cowboys, whom the Arizona Cardinals face at home in Week 3.\r\nIn this edition of the show, I bring… [+847 chars]"
}
// {
//   "source": {
//       "id": null,
//       "name": "AppleInsider"
//   },
//   "author": "news@appleinsider.com (Amanda Laskin)",
//   "title": "B&H launches Mac mini sale with prices as low as $479",
//   "description": "Trying to find a great deal on a desktop computer? B&H is currently having a sale on the popular and affordable Mac mini, with prices as low as $479.Mac mini: small but mighty\r\nThe Mac mini is a low-profile powerhouse computer that fits comfortably in any env…",
//   "url": "https://appleinsider.com/articles/23/07/23/bh-launches-mac-mini-sale-with-prices-as-low-as-479",
//   "urlToImage": "https://photos5.appleinsider.com/gallery/55513-112739-macmini-xl.jpg",
//   "publishedAt": "2023-07-23T18:36:03Z",
//   "content": "Trying to find a great deal on a desktop computer? B&amp;H is currently having a sale on the popular and affordable Mac mini, with prices as low as $479. \r\nMac mini: small but mighty\r\nThe Mac mini is… [+6425 chars]"
// },
// {
//   "source": {
//       "id": null,
//       "name": "The A.V. Club"
//   },
//   "author": "Sam Barsanti",
//   "title": "SAG-AFTRA is using the strike to push for more influencers and content creators to unionize",
//   "description": "After the SAG-AFTRA strike began last week, the union released official guidelines for online influencers and content creators on how they can support those on strike and how they can manage existing contracts and sponsorship deals. It was a somewhat interest…",
//   "url": "https://www.avclub.com/sag-aftra-influencers-content-creators-1850668557",
//   "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/f8db5cf4f35042ec7483f4cb2cb2612c.jpg",
//   "publishedAt": "2023-07-23T18:32:00Z",
//   "content": "After the SAG-AFTRA strike began last week, the union released official guidelines for online influencers and content creators on how they can support those on strike and how they can manage existing… [+2242 chars]"
// },
// {
//   "source": {
//       "id": null,
//       "name": "Los Angeles Times"
//   },
//   "author": "Alex Wigglesworth",
//   "title": "California forecasters warn of dangerous heat and isolated thunderstorms",
//   "description": "Forecasters say much of California will experience hot weather Sunday, and thunderstorms will occur in some mountain and desert areas.",
//   "url": "https://www.latimes.com/california/story/2023-07-23/california-forecasters-warn-of-dangerous-heat-and-isolated-thunderstorms",
//   "urlToImage": "https://ca-times.brightspotcdn.com/dims4/default/1e82016/2147483647/strip/true/crop/3900x2048+0+344/resize/1200x630!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F1b%2F6a%2F3ec56d2a4016993ba8157766b5e3%2F1324580-me-weather-feature-01-ajs.jpg",
//   "publishedAt": "2023-07-23T18:30:24Z",
//   "content": "Forecasters were warning about dangerously hot conditions across much of California on Sunday, with triple-digit temperatures raising the risk of heat-related illnesses, as well as isolated thunderst… [+3409 chars]"
// },
// {
//   "source": {
//       "id": "usa-today",
//       "name": "USA Today"
//   },
//   "author": "Cardinals Wire",
//   "title": "PODCAST: What did the Cowboys do in the offseason?",
//   "description": "In this opponent preview podcast, Jess Root speaks with Cowboys Wire managing editor KD Drummond.",
//   "url": "https://cardswire.usatoday.com/2023/07/23/podcast-what-did-the-cowboys-do-in-the-offseason/",
//   "urlToImage": "https://media.zenfs.com/en/arizona_cardinals_wire_usa_today_sports_articles_662/f2d082674fd604bd9f9003ffba540aba",
//   "publishedAt": "2023-07-23T18:29:36Z",
//   "content": "We have the second-to-last of our 14 opponent preview shows in 14 days. This show is about the Dallas Cowboys, whom the Arizona Cardinals face at home in Week 3.\r\nIn this edition of the show, I bring… [+847 chars]"
// }
]

  const [articles, setArticles] = useState(mockArray)
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState('');

  const filterArticles = (search) => {
    const filteredArticles = articles.filter(article => (
      article.title.toLowerCase().includes(search.toLowerCase()) ||
      article.description.toLowerCase().includes(search.toLowerCase()) ||
      article.publishedAt.split('T')[0].toLowerCase().includes(search.toLowerCase())
    ));
    setFilteredArticles(filteredArticles);
    setSearchCriteria(search);
  }

  const clearFilteredArticles = () => {
    setFilteredArticles([]);
    setSearchCriteria('');
  }

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' render={() => <AllArticles articles={articles} setArticles={setArticles} />}/>
        <Route path='/:title' render={({match}) => {
          const chosenTitle = match.params.title;
          return <SingleArticle chosenTitle={chosenTitle} articles={articles} />
        }}/>
      </Switch>
    </div>
  );
}

export default App;
