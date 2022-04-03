import styled from 'styled-components'
import { Card, Space } from 'antd'

export const AppContent = styled(Card)`
  height: 100%;
  max-width: 700px;
  margin: auto;
  overflow-y: scroll;
  ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`

export const PathContainer = styled(Space)<{ isHeader?: boolean }>`
  display: block;
  margin-top: ${({ isHeader }) => (isHeader ? '0' : '30px')};
`
