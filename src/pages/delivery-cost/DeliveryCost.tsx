import { Select, Form, message, Layout, Row } from 'antd'
import { AppContext } from 'App'
import DeliveryPath from 'components/Path/Path'
import Title from 'components/Title/Title'
import { useContext, useState, useEffect } from 'react'
import { TownSelect } from './styled'

const { Content } = Layout
const { Option } = Select

const DeliveryCost = () => {
  const appContext = useContext(AppContext)
  const { towns, routes } = appContext ?? {}
  const [selectedPath, setSelectedPath] = useState<Array<string>>([])

  const onSelectTown = (value: any) => {
    setSelectedPath([...selectedPath, value])
  }

  const onRemoveTown = (index: number) => {
    setSelectedPath(selectedPath.slice(0, index))
  }

  return (
    <main>
      <Content className="content">
        <Title
          title="Calculate Delivery Cost"
          subtitle={'Please select starting town'}
        />
        <Row justify="center">
          <Form name="town_form" autoComplete="off" layout="inline">
            <Form.Item name="town">
              <TownSelect
                placeholder="Select a Town"
                onSelect={onSelectTown}
                allowClear
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
        <DeliveryPath
          layout="column"
          path={selectedPath}
          routes={routes}
          onRemoveNode={onRemoveTown}
        />
      </Content>
    </main>
  )
}

export default DeliveryCost
