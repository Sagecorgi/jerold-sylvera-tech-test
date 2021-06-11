type Repos = Repo[]

interface Owner {
  login: string
  [key: string]: string | number | boolean | null | undefined
}

interface Repo {
  id: number
  name: string
  url: string
  description: string
  size: number
  forks: number
  watchers: number
  language: string | null
  open_issues: number
  owner: Owner
  pushed_at: string
}
