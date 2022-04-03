import { Select, Form, Layout, Row, Button } from 'antd'
import { AppContext } from 'App'
import DeliveryPath from 'components/Path/Path'
import Title from 'components/Title/Title'
import usePathUtils from 'hooks/usePathUtils'
import { useContext, useEffect, useState } from 'react'
import { PathContainer } from 'shared-styles'
import { TownSelect } from './styled'

const { Content } = Layout
const { Option } = Select

const DeliveryCostPage = () => {
  const appContext = useContext(AppContext)
  const { towns, routes } = appContext ?? {}
  const [selectableTowns, setSelectableTowns] = useState<Array<string>>(towns)
  const [selectedPath, setSelectedPath] = useState<Array<string>>([])
  const [selectedValue, setSelectedValue] = useState('')
  const { getAdjacentNodes } = usePathUtils()

  useEffect(() => {
    setSelectableTowns(towns)
  }, [towns])

  const onSelectTown = (value: any) => {
    setSelectedPath([...selectedPath, value])
    setSelectableTowns(getAdjacentNodes(routes, value))
  }

  const onRemoveTown = (index: number) => {
    setSelectedPath(selectedPath.slice(0, index))
  }

  const clearSelectedPath = () => {
    setSelectedPath([])
    setSelectedValue('')
    setSelectableTowns(towns)
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
                {selectableTowns?.map((town, index) => (
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
            costLabel="Total cost of delivery for the selected path is"
          />
        </PathContainer>
      </Content>
    </main>
  )
}

export default DeliveryCostPage
