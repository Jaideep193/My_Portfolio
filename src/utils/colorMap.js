/**
 * Map accent color name to RGB values for CSS custom properties
 */
export const colorMap = {
  cyan: {
    name: 'Cyan',
    light: '6, 182, 212',      // rgb(6, 182, 212)
    main: '34, 211, 238',      // rgb(34, 211, 238)
    dark: '0, 184, 212',       // rgb(0, 184, 212)
  },
  purple: {
    name: 'Purple',
    light: '196, 181, 253',    // rgb(196, 181, 253)
    main: '168, 85, 247',      // rgb(168, 85, 247)
    dark: '147, 51, 234',      // rgb(147, 51, 234)
  },
  pink: {
    name: 'Pink',
    light: '244, 114, 182',    // rgb(244, 114, 182)
    main: '236, 72, 153',      // rgb(236, 72, 153)
    dark: '219, 39, 119',      // rgb(219, 39, 119)
  },
  gold: {
    name: 'Gold',
    light: '253, 224, 71',     // rgb(253, 224, 71)
    main: '251, 191, 36',      // rgb(251, 191, 36)
    dark: '217, 119, 6',       // rgb(217, 119, 6)
  },
  blue: {
    name: 'Blue',
    light: '147, 197, 253',    // rgb(147, 197, 253)
    main: '59, 130, 246',      // rgb(59, 130, 246)
    dark: '37, 99, 235',       // rgb(37, 99, 235)
  },
  green: {
    name: 'Green',
    light: '110, 231, 183',    // rgb(110, 231, 183)
    main: '16, 185, 129',      // rgb(16, 185, 129)
    dark: '5, 150, 105',       // rgb(5, 150, 105)
  },
}

/**
 * Apply accent color to document root as CSS custom properties
 */
export const applyAccentColor = (colorKey) => {
  const color = colorMap[colorKey]
  if (!color) return

  const root = document.documentElement
  root.style.setProperty('--accent-light', color.light)
  root.style.setProperty('--accent-main', color.main)
  root.style.setProperty('--accent-dark', color.dark)
}

export default colorMap
