import '/public/styles/globals.css'
// import wrapper from 'store'
import BasicLayout from '/components/common/BasicLayout'
function MyApp({ Component, pageProps }) {
  return (
    <BasicLayout>
      <Component {...pageProps} />
    </BasicLayout>
  )
}

// export default wrapper.withRedux(MyApp)
export default MyApp
