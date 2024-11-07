const { VITE_BASE_PATH, VITE_DATA_PATH } = Bun.env

export const basePath = VITE_BASE_PATH || './'
export const dataPath = basePath + (VITE_DATA_PATH || 'data')

export const cookie = {
  prefix: 'slideshow',
  options: {},
}

export const uploadFields = {
  original: 'original',
  cover: 'cover',
  cache: 'cache',
}