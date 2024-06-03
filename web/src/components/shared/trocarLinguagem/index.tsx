import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

export const SelectContainer = styled.div``;

export const Select = styled.select`
  width: 100px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  font-size: 16px;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.Green}; 
  }
`;

export const Option = styled.option`
  background-color: white;
`;

export const TrocarLinguagem = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <SelectContainer>
      <Select onChange={(e) => handleChangeLanguage(e.target.value)} name='trocar_linguagem' id='trocar_linguagem_id'>
        <Option value="en">EN 🇺🇸</Option>
        <Option value="pt">PT 🇧🇷</Option>
      </Select>
    </SelectContainer>
  );
};
