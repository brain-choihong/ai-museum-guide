import styled from 'styled-components'
const initForm = {
  email: '',
  uid: '',
  name: '',
  password: '',
}
function RegisterForm() {
  const handleSubmit = () => {}
  return (
    <RegisterFormLayout>
      <Title>회원 가입</Title>
      <form onSubmit={handleSubmit}>
        <NameInput type="text" placeholder="이름을 입력하시오"></NameInput>
        <EmainInputWrap>
          <EmailInput
            type="text"
            placeholder="email을 입력하시오"
            name="email"
          ></EmailInput>
        </EmainInputWrap>
        <PasswordInput
          type="password"
          placeholder="비밀번호를 입력하시오"
          name="password"
        ></PasswordInput>
        <RegisterButton>가입하기</RegisterButton>
      </form>
    </RegisterFormLayout>
  )
}
const RegisterButton = styled.button`
  font-size: 17px;
  width: 100px;
  color: #fff;
  font-weight: 700;
  background-color: #3d3dff;
  width: 100%;
  padding: 12px 0;
  border-radius: 7px;
  margin: 20px auto 0 auto;
  display: block;
`
const NameInput = styled.input``
const PasswordInput = styled.input``
const EmailInput = styled.input``
const EmainInputWrap = styled.div``
const RegisterFormLayout = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  input {
    width: 100%;
    margin: 5px 0;
    padding: 10px;
  }
`
const Title = styled.h2`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  margin: 10px 0 15px;
`
export default RegisterForm
