import { Tag } from 'antd'
import styled from 'styled-components'

const StyledTag = styled(Tag)`
  margin: 15px 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  .ant-tag-close-icon {
    position: absolute;

    svg {
      position: relative;
      right: -8px;
      top: -8px;
    }
  }
`

const Node = (props: any) => {
  const { text, onClose } = props
  return (
    <StyledTag closable onClose={onClose} color="purple">
      {text}
    </StyledTag>
  )
}

export default Node
