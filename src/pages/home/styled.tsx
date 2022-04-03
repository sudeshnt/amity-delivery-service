import styled from 'styled-components'
import { Layout } from 'antd'

const { Content } = Layout

export const HomeContent = styled(Content)`
  h1,
  h2,
  h3 {
    text-align: center;
  }

  h1,
  h2 {
    margin-top: 30px;
  }

  h1 {
    font-size: 36px;
    color: #2a7bc8;
  }

  h2 {
    font-size: 16px;
  }

  h3 {
    font-weight: 600;
    color: #2a7bc8;
  }

  .ant-col {
    flex-direction: column;
    padding: 15px 20px;

    &.left {
    }

    &.right {
    }

    p {
    }
  }

  .ant-col:first-child {
    border-right: 1px solid black;
  }

  .table {
    margin-top: 30px;
  }
`

export const GraphContainer = styled(Content)`
  h3 {
    margin: 30px 0 -10px;
  }

  .vis-network {
    height: 300px !important;
  }
`
