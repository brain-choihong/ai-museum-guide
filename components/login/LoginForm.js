import styled from 'styled-components'
import useForm from 'hooks/useForm'
import axios from 'axios'

function LoginForm() {
  const [form, { onChange }] = useForm({
    email: '',
    password: '',
  })
  const handleSumbit = () => {
    try {
      axios({
        method: 'GET',
        url: '/api/login',
        data: {
          form: form,
        },
      }).then(response => {
        if (response.status === 200) {
          alert('login success')
        } else {
          alert('login failure')
        }
      })
    } catch (e) {
      alert('api error')
    }
  }
  return (
    <LoginContLayout>
      <Title>로그인</Title>
      <form onSubmit={handleSumbit} method="get">
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
      </form>
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