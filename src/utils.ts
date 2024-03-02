export type Suffixes = Record<string, number>

export function formatLargeNumber(number: number) {
  const suffixes: Suffixes = {
    T: 1e12, // Trillion
    B: 1e9, // Billion
    M: 1e6 // Million
  }

  if (number < 100) {
    return number.toFixed(3)
  }

  if (number < 1000) {
    return number.toFixed(2)
  }

  // Add suffix if number is too large
  for (const suffix in suffixes) {
    if (number >= suffixes[suffix]) {
      return (number / suffixes[suffix]).toFixed(1) + suffix
    }
  }

  return number.toFixed(1)
}

export function formatPercentage(percentage: number) {
  // Define the threshold for when to switch to scientific notation
  const threshold = 0.01

  if (Math.abs(percentage) < threshold) {
    // Convert the percentage to scientific notation
    const exponent = Math.floor(Math.log10(Math.abs(percentage)))
    const coefficient = percentage / Math.pow(10, exponent)
    return `${coefficient.toFixed(1)} * 10^${exponent} %`
  } else {
    // If the percentage is larger, format it with a fixed number of decimal places
    return percentage.toFixed(1) + '%'
  }
}
