import styled from 'styled-components'
import { Row, Col } from 'antd'
import images from 'assets/images'

export const PathRow = styled(Row)<{ layout: string }>`
  flex-direction: ${({ layout = 'row' }) => layout};
  align-items: center;
  min-width: 100%;
  max-width: 500px;
`

export const PathColumn = styled(Col)`
  justify-content: flex-start;
  align-items: center;
  flex-flow: row wrap;

  .ant-tag:not(:first-child) {
    margin-left: 30px;
    background: ${images.arrowHead};
    &:after {
      display: block;
      position: absolute;
      content: '';
      background-image: url(${images.arrowHead});
      margin-right: 90px;
      background-size: 28px 28px;
      height: 28px;
      width: 28px;
      transform: scaleX(-1);
    }
  }
`

export const CostColumn = styled(Col)`
  justify-content: flex-end;
  align-items: center;

  p {
    margin: 0;
  }
`
