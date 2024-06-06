import bg_login_light from '../../assets/images/bg_login_light.png'
import bg_login_dark from '../../assets/images/bg_login_dark.png'
import bg_cadastro_light from '../../assets/images/bg_cadastro_light.png'
import bg_cadastro_dark from '../../assets/images/bg_cadastro_dark.png'
import bg_error_light from '../../assets/images/bg_error_light.png'
import bg_error_dark from '../../assets/images/bg_error_dark.png'
import bg_home_light from '../../assets/images/bg_home_light.png'
import bg_home_dark from '../../assets/images/bg_home_dark.png'

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
    lingua: '#F3F5F8',
    orange: '#F5BF67',
  },
  images: {
    bg_login: bg_login_light,
    bg_cadastro: bg_cadastro_light,
    bg_error: bg_error_light,
    bg_home: bg_home_light,
  },
};

export const Dark = {
  colors: {
    bg: "#151320",
    text: "#FFFFFF",
    blueBackground: '#596FDC',
    pink: '#e771ac',
    pinkLight: '#F4D0E3',
    pinkDark: '#E98AB9',
    aquaGreen: '#3DDC97',
    white: '#FFFFFF',
    black: '#000000',
    Green: '#52b9aa',
    GreenLight: '#D1FAF6',
    GreenDark: '#6CCFB9',
    cinza: '#A8A8A8',
    lingua: '#6CCFB9',
    orange: '#EF9737',
  },
  images: {
    bg_login: bg_login_dark,
    bg_cadastro: bg_cadastro_dark,
    bg_error: bg_error_dark,
    bg_home: bg_home_dark,
  },
};

export type ThemeType = typeof Light;