import type { Beer } from '~/data/beers'

const BASE_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSxSKbSJDP28qOFYemh5SvEeHOsIjD5uWrAO9XsqeYQND8XHfLEAJRNK0nF_Vvvr_1pHSitBPn0uaxm/pub?output=csv'
const sheetUrl = (gid?: number) => gid ? `${BASE_URL}&gid=${gid}` : BASE_URL

function parseCsvRow(line: string): string[] {
  const values: string[] = []
  let current = ''
  let inQuotes = false
  for (const ch of line) {
    if (ch === '"') {
      inQuotes = !inQuotes
    } else if (ch === ',' && !inQuotes) {
      values.push(current.trim())
      current = ''
    } else {
      current += ch
    }
  }
  values.push(current.trim())
  return values
}

function parseSheet(csv: string): Beer[] {
  const lines = csv.trim().split(/\r?\n/)
  const headers = parseCsvRow(lines[0]).map(h => h.toLowerCase())

  return lines.slice(1)
    .map((line) => {
      const values = parseCsvRow(line)
      const row: Record<string, string> = {}
      headers.forEach((h, i) => { row[h] = values[i] ?? '' })
      return row
    })
    .filter(row => row.active?.toUpperCase() === 'TRUE')
    .map(row => ({
      name: row.name,
      description: row.description ?? '',
      abv: row.abv ? parseFloat(row.abv) : undefined,
      ibu: row.ibu ? parseInt(row.ibu) : undefined,
    }))
}

export function useBeers() {
  return useFetch<Beer[]>(sheetUrl(), {
    responseType: 'text',
    server: false,
    transform: csv => parseSheet(csv as unknown as string),
  })
}

const NA_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQOR2m80lPSE6JTeRtGJhzOKm7EYfUnfZdIFNLR8ErdOmaRGXaHPuJvlqno-uhaWPbIJ-pHYxaHi0Op/pub?output=csv'

export function useNaOptions() {
  return useFetch<Beer[]>(NA_URL, {
    responseType: 'text',
    server: false,
    transform: csv => parseSheet(csv as unknown as string),
  })
}
