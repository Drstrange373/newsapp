import React, { useEffect, useState } from 'react'
import NewsItem from '../NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

export default function News(props) {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(1)

  
  
  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }
  
  document.title = `${capitalize(props.category)} -NewsMonkey`

  const updateNews = async () => {

    props.setProgress(10)
    // console.log('cdm')
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`
    let data = await fetch(url)
    let parsed_data = await data.json()
    // console.table(parsed_data)
    console.log(url)
    props.setProgress(50)
    setArticles(parsed_data.articles)
    setTotalResults(parsed_data.totalResults)
    setLoading(false)

    props.setProgress(70)
    console.log('state is set')
    props.setProgress(100)
  }

  useEffect(() => {
    updateNews()
    setPage(page + 1)
  }, [])

  const fetchMoreData = async () => {
    // console.log('cdm')
    setPage(page + 1)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`
    let data = await fetch(url)
    let parsed_data = await data.json()
    // console.table(parsed_data)
    // console.log(url)
    setArticles(articles.concat(parsed_data.articles))
    setTotalResults(parsed_data.totalResults)

  }

  console.log('rendr')
  return (
    <>
      <>
        <h2 className='text-center' style={{margin:'35px 0px', marginTop:'90px'}}>NewsMonkey Top Headlines</h2>
        {loading && <Spinner />}
        <div >

          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={!loading&&<Spinner />}
          >
            <div className="container">
              <div className="row">

                {articles.map((element) => {
                  return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title != null ? element.title.slice(0, 45) + '...' : ''} decription={element.description != null ? element.description.slice(0, 100) + '...' : ""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />

                  </div>
                })}
              </div>
            </div>
          </InfiniteScroll>

        </div>
      </ >
    </>
  )
}

News.defaultProps = {
  country: 'in',
  pagesize: 5,
  category: 'genral'
}

News.PropType = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string
}