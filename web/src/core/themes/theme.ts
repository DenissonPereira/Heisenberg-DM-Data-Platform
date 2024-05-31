import bg_light from '../../assets/images/bg_login.png'
import bg_dark from '../../assets/images/bg_Dark.png'

export const Light = {
  colors: {
    bg: "#FFFFFF",
    text: "#000000",
    blueBackground: '#596FDC',
    pink: '#FF99CC',
    pinkLight: '#F4D0E3',
    pinkDark: '#E98AB9',
    aquaGreen: '#3DDC97',
    white: '#FFFFFF',
    black: '#000000',
    Green: '#8EEFE0',
    GreenLight: '#D1FAF6',
    GreenDark: '#6CCFB9',
    cinza: '#A8A8A8',
  },
  images: {
    bg: bg_light,
  },
};

export const Dark = {
  colors: {
    bg: "#151320",
    text: "#FFFFFF",
    blueBackground: '#596FDC',
    pink: '#FF99CC',
    pinkLight: '#F4D0E3',
    pinkDark: '#E98AB9',
    aquaGreen: '#3DDC97',
    white: '#FFFFFF',
    black: '#000000',
    Green: '#8EEFE0',
    GreenLight: '#D1FAF6',
    GreenDark: '#6CCFB9',
    cinza: '#A8A8A8',
  },
  images: {
    bg: bg_dark,
  },
};

export type ThemeType = typeof Light;