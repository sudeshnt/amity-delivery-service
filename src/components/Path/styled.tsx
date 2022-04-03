import styled from 'styled-components'
import { Row, Col } from 'antd'
import images from 'assets/images'

export const PathHeader = styled(Row)`
  color: #578fc4;
  font-weight: 600;
  font-size: 16px;

  .column-name {
    padding-left: 15px;
    justify-content: flex-start;
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
      background-size: 20px 20px;
      height: 20px;
      width: 20px;
      transform: scaleX(-1);
    }
  }
`

export const CostColumn = styled(Col)`
  justify-content: center;
  align-items: center;
  padding: 10px;

  p {
    margin: 0;
  }
`

export const CostValue = styled.p`
  font-size: 24px;
  font-weight: 500;
`

export const CostWithLabel = styled.div`
  margin-top: 20px;
  p {
    text-align: center;
  }
  .costLabel {
    color: #578fc4;
    font-weight: 600;
    font-size: 18px;
  }
  .costValue {
    font-weight: 500;
    font-size: 50px;
  }
`
