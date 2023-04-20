import { GlobalStyled } from './globalStyled'
import * as S from './style'

export function App() {
    return (
        <>
           <GlobalStyled />
           <S.Container>
                <S.Form>
                    <S.TitleUpper>Login</S.TitleUpper>
                    <S.Label htmlFor='email'>Email</S.Label>
                    <S.Input type='text' id='email'/>
                    <S.Label htmlFor='password'>Senha</S.Label>
                    <S.Input type='password' id='password'/>
                    <S.BoxButton>
                        <S.Button>Cadastrar</S.Button>
                        <S.Button primary>Entrar</S.Button>
                    </S.BoxButton>
                </S.Form>
           </S.Container>
        </>
    )
}