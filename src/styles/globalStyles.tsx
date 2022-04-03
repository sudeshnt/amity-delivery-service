import { createGlobalStyle } from 'styled-components'
import images from 'assets/images'

const GlobalStyles = createGlobalStyle`

  * {
    ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none;
    }
  }

  @font-face {
    font-family: 'Georgia';
    src: local('Georgia'), url(../assets/fonts/Georgia.ttf) format('ttf');
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  p, h1, h2, h3, h4, h5 {
    color: #001529;
  }

  .ant-layout {
    height: 100vh;
  }

  .ant-message {
    top: 75px;
  }

  .logo {
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background-image: url(${images.logo});
    background-repeat: no-repeat;
    background-size: 65px ;
  }

  .ant-row {
    padding: 5px;
  }

  .ant-col {
    display: flex;
    justify-content: center;
  }

  .ant-form-item {
    margin-bottom: 0;
  }

  .ant-layout-header {
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 999;
  }

  .ant-layout-footer { 
    text-align: center;
    position: fixed;
    bottom: 0px;
    width: 100%;
    background: #001529;
    color: white;
  }

  .main-content {
    height: calc(100vh - 134px);
    overflow: scroll;
    display: block;
    position: fixed;
    width: 100%;
    top: 64px;
    box-sizing: border-box;
    padding: 20px;
  }
`

export default GlobalStyles
