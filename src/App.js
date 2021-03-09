import React, {useEffect, useState} from 'react'
import {Column, Centered, Emoji, Card} from './App.styles'
import Header from './components/Header'
import Footer from './components/Footer'
import moment from 'moment'
import './App.css'
import GlobalStyle from './GlobalStyle'

function App() {
  const today = new Date()
  const yearAgo = new Date().setFullYear(today.getFullYear() - 1)
  const currentTimestamp = moment().startOf('day').format('X')
  const yearAgoTimestamp = moment().subtract(1, 'years').startOf('day').format('X')
  const dateOptions = {year: 'numeric', month: 'long', day: 'numeric'}

  const [todaysPrice, setTodaysPrice] = useState('')
  const [lastYearsPrice, setLastYearsPrice] = useState('')
  const [changeDirection, setChangeDirection] = useState('')
  const priceDifference = todaysPrice - lastYearsPrice
  const priceChange = todaysPrice/lastYearsPrice * 100
  
  const determineDirection = (priceDifference) => {
      return priceDifference < 0 ? setChangeDirection(false) : setChangeDirection(true)
  }

  useEffect(() => {
      loadTodaysData()
      loadLastYearsData()
      determineDirection(priceDifference)
  },[]) // eslint-disable-line react-hooks/exhaustive-deps

  const loadTodaysData = async () => {
      const url = `https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD&ts=${currentTimestamp}&api_key=aabf0687e39a9fb5b6f2354fd350089a4c61f7ce0789eb488fb715a7d89177d7`
      const response = await fetch(url)
      const data = await response.json()
      setTodaysPrice(data.BTC.USD)
  }

  const loadLastYearsData = async () => {
      const url = `https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD&ts=${yearAgoTimestamp}&api_key=aabf0687e39a9fb5b6f2354fd350089a4c61f7ce0789eb488fb715a7d89177d7`
      const response = await fetch(url)
      const data = await response.json()
      setLastYearsPrice(data.BTC.USD)
  }

  const formatNumber = (number) => {
      return new Intl.NumberFormat().format(number)
  }

  return(
      <div>
        <GlobalStyle priceChange={changeDirection}/>
        <Header/>
          <Centered>
              <Card priceChange={changeDirection}>
                  <Column>
                      <h1>{new Intl.DateTimeFormat('en-US', dateOptions).format(yearAgo)}</h1>
                      <h2>Price a year ago: ${formatNumber(lastYearsPrice)}</h2>
                  </Column>
              </Card>
              <Emoji>➡️</Emoji>
              <Card priceChange={changeDirection}>
              <Column>
                  <h1>{new Intl.DateTimeFormat('en-US', dateOptions).format(today)}</h1>
                  <h2>Today's Price: ${formatNumber(todaysPrice)}</h2>
              </Column>
              </Card>
          </Centered>
          <Centered margin>
                  <Card priceChange={changeDirection}>
                  <Column>
                      <h1>Price Change</h1>
                      {console.log(changeDirection)}
                      <h2>${formatNumber(priceDifference.toFixed(2))}</h2>
                  </Column>
                  </Card>
              <Emoji>{changeDirection ? '📈' : '📉' }</Emoji>
              <Card priceChange={changeDirection}>
                  <Column>
                      <h1>Percent Change</h1>
                      <h2>{formatNumber(priceChange.toFixed(2))}%</h2>
                  </Column>
                  </Card>
          </Centered>
          <br/>
          <br/>
          <Footer />
      </div>
  )
}

export default App;
