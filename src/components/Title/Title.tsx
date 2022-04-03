import styled from 'styled-components'
import { Space } from 'antd'

const TitleSpace = styled(Space)`
  display: block;
  text-align: center;
`

const Title = (props: any) => {
  const { title, subtitle } = props
  return (
    <TitleSpace>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </TitleSpace>
  )
}

export default Title
