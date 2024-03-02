import { reactive } from 'vue'

interface DataPoint {
  open: string
  high: string
  low: string
  close: string
  volume: string
  marketCap: string
  timestamp: string
}

type ChartDataKey = 'month' | 'week' | 'year'

export interface ChartData {
  name: string
  year: DataPoint[]
  month: DataPoint[]
  week: DataPoint[]
}

export type CoinData = {
  id: number
  name: string
  symbol: string
  slug: string
  is_active: number
  is_fiat: number
  circulating_supply: number
  total_supply: number
  max_supply: number | null
  date_added: string
  num_market_pairs: number
  cmc_rank: number
  last_updated: string
  tags: string[]
  platform: any | null
  self_reported_circulating_supply: any | null
  self_reported_market_cap: any | null
  quote: {
    USD: {
      price: number
      volume_24h: number
      volume_change_24h: number
      percent_change_1h: number
      percent_change_24h: number
      percent_change_7d: number
      percent_change_30d: number
      market_cap: number
      market_cap_dominance: number
      fully_diluted_market_cap: number
      last_updated: string
    }
  }
}

interface StoreType {
  isLoading: boolean
  selectedCoin: string
  chartSelectedRange: ChartDataKey
  summaryCardData: CoinData[]
  chartData: ChartData[] | []
}

export const store: StoreType = reactive({
  isLoading: false,
  selectedCoin: 'Bitcoin',
  chartSelectedRange: 'week',
  summaryCardData: [],
  chartData: []
})
