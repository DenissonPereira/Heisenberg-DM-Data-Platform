import { useTranslation } from 'react-i18next'

export const TrocarLinguagem = () => {

    const { i18n } = useTranslation()

    const handleChangeLanguage = (value: string) => {
        i18n.changeLanguage(value);
    }

  return (
    <div>
        <select onChange={(e) => handleChangeLanguage(e.target.value)}>
            <option value="en">EN</option>
            <option value="pt">PT</option>
        </select>
    </div>
  )
}
