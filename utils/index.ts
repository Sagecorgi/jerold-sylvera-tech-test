export let truncate: (a: string | null) => string | null

truncate = (str: string | null) => {
  if (!str) return null

  return str.length > 60 ? str.substring(0, 60) + '...' : str
}
