import styled from 'styled-components'
import useForm from 'hooks/useForm'
import { useRouter } from 'next/router'
function LoginForm() {
  const router = useRouter()
  const [form, { onChange }] = useForm({
    email: '',
    password: '',
  })
  const handleSumbit = async () => {
    try {
      const response = await fetch(`/api/login`, {
        method: 'POST',
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      })
      const responseData = await response.json()
      if (responseData.success) {
        alert(`로그인 완료`)
        router.push('/')
      }
    } catch (e) {
      console.log(e, 'e')
      alert('api error')
    }
  }
  return (
    <LoginContLayout>
      <Title>로그인</Title>
      <div onClick={handleSumbit}>
        <IdInput
          type="text"
          placeholder="ID"
          name="email"
          value={form.email}
          onChange={onChange}
        ></IdInput>
        <PassWordInput
          type="password"
          placeholder="Password"
          name="password"
          value={form.password}
          onChange={onChange}
        ></PassWordInput>
        <LoginButton>Login</LoginButton>
      </div>
    </LoginContLayout>
  )
}
const LoginButton = styled.button`
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
const PassWordInput = styled.input``
const IdInput = styled.input``
const LoginContLayout = styled.div`
  max-width: 400px;
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

export default LoginForm
