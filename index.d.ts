type Category =
  | "Programming"
  | "Misc"
  | "Dark"
  | "Pun"
  | "Spooky"
  | "Christmas"
  // aliases
  | "Miscellaneous"
  | "Coding"
  | "Development"
  | "Halloween"
type Flag = "nsfw" | "religious" | "political" | "racist" | "sexist" | "explicit"
type LanguageCode = "cs" | "de" | "en" | "es"
type Error = {
  /** Error code */
  code: any
  /** Description of the error */
  description: string
}

type JokeCommonProperties = {
  category: Category
  flags: {
    [flag in Flag]: boolean
  }
  id: number
  safe: boolean
  lang: LanguageCode,
  favourite?: boolean
}

declare type SingleJoke = JokeCommonProperties &
{
  type: "single"
  joke: string
}

declare type TwoPartJoke = JokeCommonProperties &
{
  type: "twopart"
  setup: string
  delivery: string
}

declare interface JokeApiData {
  error: false | Error
  amount: number
  jokes: Array<SingleJoke | TwoPartJoke>
}