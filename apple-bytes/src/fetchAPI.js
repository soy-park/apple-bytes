export const getArticles = async () => {
  const response = await fetch("https://newsapi.org/v2/everything?q=apple&from=2023-07-01&sortBy=publishedAt&language=en&apiKey=fef2e30dad684485b3b86496aa5bfbff")
  
  if (!response.ok) {
    throw new Error(`${response.status}: ${response.statusText}`)
  }
  
  return await response.json()
}