import styled from 'styled-components'
import useForm from 'hooks/useForm'
import { useRouter } from 'next/router'

function RegisterForm() {
  const router = useRouter()
  const [form, { onChange }] = useForm({
    email: '',
    nickname: '',
    password: '',
  })
  const handleSubmit = async () => {
    try {
      const response = await fetch(`/api/register`, {
        method: 'POST',
        body: JSON.stringify({
          email: form.email,
          nickname: form.nickname,
          password: form.password,
        }),
      })
      const responseData = await response.json()
      if (responseData.success) {
        alert(`${form.nickname}님 회원가입을 환영합니다.`)
        router.push(`/login`)
      }
    } catch (e) {
      console.log(e, 'e')
      alert('api error')
    }
  }
  return (
    <RegisterFormLayout>
      <Title>회원 가입</Title>
      <div>
        <NameInput
          type="text"
          placeholder="이름을 입력하시오"
          onChange={onChange}
          name="nickname"
          value={form.nickname}
        ></NameInput>
        <EmainInputWrap>
          <EmailInput
            type="text"
            placeholder="email을 입력하시오"
            name="email"
            onChange={onChange}
            value={form.email}
          ></EmailInput>
        </EmainInputWrap>
        <PasswordInput
          type="password"
          placeholder="비밀번호를 입력하시오"
          name="password"
          value={form.password}
          onChange={onChange}
        ></PasswordInput>
        <RegisterButton onClick={handleSubmit}>가입하기</RegisterButton>
      </div>
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
