import styled from 'styled-components'
import { Space } from 'antd'

const TitleSpace = styled(Space)`
  display: block;
  text-align: center;

  .subtitle {
    color: #578fc4;
  }
`

const Title = (props: any) => {
  const { title, subtitle } = props
  return (
    <TitleSpace>
      <h1>{title}</h1>
      <p className="subtitle">{subtitle}</p>
    </TitleSpace>
  )
}

export default Title
