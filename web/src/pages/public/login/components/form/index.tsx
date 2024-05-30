import { BordaInputs } from '../../../../../components/custom/BordaInputs.style'
import { InputFormulario } from '../../../../../components/custom/Inputs.style'
import { FcBusinessman, FcLock } from "react-icons/fc";
import { FormStyle } from './styles'

export const Form = () => {
    return (
        <FormStyle>
            <BordaInputs>
                <FcBusinessman />
                <InputFormulario
                    type='text'
                    id='login_id'
                    placeholder='Login'
                    required
                />
            </BordaInputs>
            <BordaInputs>
                <FcLock />
                <InputFormulario
                    type='password'
                    id='senha_id'
                    placeholder='Password'
                    required
                />
            </BordaInputs>
        </FormStyle>
    )
}
