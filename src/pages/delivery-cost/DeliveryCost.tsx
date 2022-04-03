import { Select, Form, Layout, Row, Button } from 'antd'
import { AppContext } from 'App'
import DeliveryPath from 'components/Path/Path'
import Title from 'components/Title/Title'
import { useContext, useState } from 'react'
import { PathContainer } from 'shared-styles'
import { TownSelect } from './styled'

const { Content } = Layout
const { Option } = Select

const DeliveryCost = () => {
  const appContext = useContext(AppContext)
  const { towns, routes } = appContext ?? {}
  const [selectedPath, setSelectedPath] = useState<Array<string>>([])
  const [selectedValue, setSelectedValue] = useState(null)

  const onSelectTown = (value: any) => {
    setSelectedPath([...selectedPath, value])
  }

  const onRemoveTown = (index: number) => {
    setSelectedPath(selectedPath.slice(0, index))
  }

  const clearSelectedPath = () => {
    setSelectedPath([])
    setSelectedValue(null)
  }

  return (
    <main>
      <Content>
        <Title
          title="Calculate Delivery Cost"
          subtitle={
            !selectedPath.length
              ? 'Please select starting town'
              : 'Please select next towns'
          }
        />
        <Row justify="center">
          <Form name="town_form" autoComplete="off" layout="inline">
            <Form.Item name="town">
              <TownSelect
                placeholder="Select a Town"
                onSelect={onSelectTown}
                allowClear
                value={selectedValue}
              >
                {towns?.map((town, index) => (
                  <Option key={index} value={town}>
                    {town}
                  </Option>
                ))}
              </TownSelect>
            </Form.Item>
          </Form>
        </Row>
        {selectedPath.length > 0 && (
          <Row justify="center">
            <Form.Item>
              <Button type="link" danger onClick={clearSelectedPath}>
                Clear Path
              </Button>
            </Form.Item>
          </Row>
        )}

        <PathContainer>
          <DeliveryPath
            layout="column"
            path={selectedPath}
            routes={routes}
            onRemoveNode={onRemoveTown}
          />
        </PathContainer>
      </Content>
    </main>
  )
}

export default DeliveryCost
