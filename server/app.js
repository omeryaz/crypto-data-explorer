/* eslint-disable no-undef */
const express = require('express')
const cors = require('cors')
const axios = require('axios')
const csv = require('csvtojson')

const { capitalize } = require('./utils.ts')

const app = express()

require('dotenv').config()

// Enable CORS for all routes
app.use(cors())

app.get('/api/data/:coinName', cors(), async function (req, res) {
  // COINMARKETCAP API DATA
  const coinName = req.params.coinName.toLowerCase()
  try {
    const CMC_API_response = await axios.get(
      `https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?slug=${coinName}`,
      {
        headers: {
          'X-CMC_PRO_API_KEY': process.env.PRO_API_KEY
        }
      }
    )

    // CSV FILES FOR CHART DATA
    const csvFiles = [
      `./chartData/${coinName}/${coinName}_year.csv`,
      `./chartData/${coinName}/${coinName}_month.csv`,
      `./chartData/${coinName}/${coinName}_week.csv`
    ]

    // CSV TO JSON PARSING FUNCTION
    const parseCSV = (filePath) => {
      return csv({
        delimiter: ';',
        colParser: {
          name: 'omit',
          open: 'string',
          high: 'string',
          low: 'string',
          close: 'string',
          volume: 'string',
          marketCap: 'string',
          timestamp: 'string'
        }
      }).fromFile(filePath)
    }
    // AWAIT CSV PARSING RESULTS
    const results = await Promise.all(csvFiles.map(parseCSV))

    // STRUCTURE THE DATA
    const structuredData = {
      apiData: CMC_API_response.data.data,
      name: `${capitalize(coinName)}`,
      year: results[0],
      month: results[1],
      week: results[2]
    }

    // SEND THE DATA
    res.json(structuredData)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'An error occurred while retrieving information.' })
  }
})

app.listen(process.env.PORT, () => {
  console.log('Server is running on port', process.env.PORT)
})
