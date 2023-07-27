export const getArticles = () => {
  return fetch("https://newsapi.org/v2/everything?q=apple&from=2023-07-01&sortBy=publishedAt&language=en&apiKey=fef2e30dad684485b3b86496aa5bfbff")
  .then(response => {
    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`)
    }
    return response.json()
  })
}