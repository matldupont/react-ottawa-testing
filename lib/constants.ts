import { arbitrum, goerli, hardhat, mainnet, optimism, polygon, sepolia } from '@wagmi/chains'

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Application
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
export const SITE_CANONICAL = 'https://slides.turboeth.xyz/'
export const SITE_EMOJI = '📖'
export const SITE_NAME = 'Testing'
export const SITE_TAGLINE = '... WTF?!'
export const SITE_TITLE = 'MatDupont - Testing ...WTF?!'
export const SITE_DESCRIPTION = 'Testing Slide Deck'
export const SOCIAL_GITHUB = 'matldupont'

export const AUTHOR_NAME = '@MatDupont'
export const AUTHOR_URL = 'https://matdupont.dev'
export const AUTHOR_IMAGE_URL = 'https://raw.githubusercontent.com/matldupont/matdupont-dev/main/src/assets/headshot-400w.jpeg'

export const PRESENTATION_DATE = 'GlossGenius - June 2023'
export const PRESENTATION_MODES = {
  SLIDESHOW: 'slideshow',
  SPEAKER: 'speaker',
}

export const APP_CONFIG = {
  canonical: SITE_CANONICAL,
  emoji: SITE_EMOJI,
  title: SITE_TITLE,
  site_name: SITE_NAME,
  description: SITE_DESCRIPTION,
  previewImg: `${SITE_CANONICAL}/preview.png`,
  locale: 'en',
  twitter: '',
}

export const DEPLOY_URL =
  'https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fturbo-eth%2Fturbo-slides&project-name=TurboSlides&repository-name=turbo-slides&demo-title=TurboSlides'

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Blockchain
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Override the default Goerli icon so it's not the same as the default Ethereum icon

// @ts-ignore
goerli.iconUrl = '/icons/NetworkEthereumTest.svg'
// @ts-ignore
sepolia.iconUrl = '/icons/NetworkEthereumTest.svg'

export const ETH_CHAINS = [mainnet, polygon, optimism, arbitrum, goerli]
export const ETH_CHAINS_PROD = [mainnet, polygon, optimism, arbitrum]
export const ETH_CHAINS_TEST = [mainnet, polygon, optimism, arbitrum, goerli, sepolia, hardhat]
