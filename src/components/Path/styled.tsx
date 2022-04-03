import styled from 'styled-components'
import { Row, Col } from 'antd'
import images from 'assets/images'

export const PathHeader = styled(Row)`
  color: #578fc4;
  font-weight: 600;
  font-size: 16px;

  .path-column {
    padding-left: 15px;
  }
`

export const PathRow = styled(Row)<{ layout?: string }>`
  flex-direction: ${({ layout = 'row' }) => layout};
  align-items: center;
  min-width: 100%;
  max-width: 500px;
  border: ${({ layout = 'row' }) =>
    layout === 'row' ? '1px solid #d5ecf9' : 'none'};
  margin: 5px 0;

  .path-column {
    justify-content: ${({ layout = 'row' }) =>
      layout === 'row' ? 'flex-start' : 'center'};
  }
`

export const PathColumn = styled(Col)`
  justify-content: flex-start;
  align-items: center;
  flex-flow: row wrap;

  .ant-tag:not(:first-child) {
    margin-left: 30px;
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
  padding: 10px;

  p {
    margin: 0;
  }
`
