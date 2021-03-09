import React, {useEffect, useState} from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { Centered } from './index.styles'
import moment from 'moment'
import GlobalStyle from '../../GlobalStyle'

const About = () => {
    const currentTimestamp = moment().startOf('day').format('X')
    const yearAgoTimestamp = moment().subtract(1, 'years').startOf('day').format('X')
  
    const [todaysPrice, setTodaysPrice] = useState('')
    const [lastYearsPrice, setLastYearsPrice] = useState('')
    const [changeDirection, setChangeDirection] = useState('')
    const priceDifference = todaysPrice - lastYearsPrice
    
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

    return(
        <div>
            <GlobalStyle priceChange={changeDirection}/>
            <Header/>
        <Centered>
            <h1>What is this?</h1>
            <p>Great question. This is a simple app that grabs the price of Bitcoin from last year and compares it to the price today. 
                It does some simple calculations and indicates whether the price has gone up or down.
            </p>
            <h1>Why did you do this?</h1>
            <p>I built this for fun! I'm helping out with an organization called <a href='http://www.sccodes.org'>SC Codes</a> by teaching students to code. 
                I built this to show them what is possible.
            </p>
            <h1>How did you come up with the idea?</h1>
            <p>I must admit, this idea is not original with me. I follow a Twitter user (@levelsio) who built a Twitter bot that essentially does the same thing.
                Minor plagarism.
            </p>
            <h1>Anything else we should know?</h1>
            <p><b>This is in no way financial advice!</b> This is built just for my enjoyment. If you want to talk crypto or code find me at calebmcquaid (at)gmail[dot]com</p>
        </Centered>
        <Footer />
        </div>
    )
}

export default About