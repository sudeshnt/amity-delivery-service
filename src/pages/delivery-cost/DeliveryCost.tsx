import { Select, Form, message, Layout, Row } from 'antd'
import { AppContext } from 'App'
import Node from 'components/Node'
import { useContext, useState, useEffect } from 'react'
import { GenerateCostBtn, TownSelect } from './styled'

const { Content } = Layout
const { Option } = Select

const DeliveryCost = () => {
  const appContext = useContext(AppContext)
  const { towns, routes } = appContext ?? {}
  const [selectedPath, setSelectedPath] = useState<Array<string>>([])
  const [deliveryCost, setDeliveryCost] = useState<number>(0)
  const [selectedTown, setSelectedTown] = useState<any>()

  const onSelectTown = (value: any) => {
    setSelectedPath([...selectedPath, value])
  }

  const onRemoveTown = (index: number) => {
    setSelectedPath(selectedPath.filter((town, i) => i !== index))
  }

  const calculateDeliveryCost = (path: Array<string>) => {
    return path.reduce((acc, town, index) => {
      const nextTown = path[index + 1]
      if (nextTown) {
        const pathToNextTownExists = routes[town][nextTown] > 0
        if (pathToNextTownExists) {
          return acc + routes[town][nextTown]
        } else {
          message.error({
            duration: 2,
            content: 'Path does not exist',
          })
          onRemoveTown(index + 1)
          return acc
        }
      }
      return acc
    }, 0)
  }

  useEffect(() => {
    if (selectedPath.length > 1) {
      const costOfPath = calculateDeliveryCost(selectedPath)
      setDeliveryCost(costOfPath)
    }
    setSelectedTown(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPath])

  return (
    <main>
      <Content className="content">
        <Row justify="center">
          <h2>Calculate Delivery Cost</h2>
        </Row>
        <Row justify="center">
          <Form name="town_form" autoComplete="off" layout="inline">
            <Form.Item name="town">
              <TownSelect
                placeholder="Select a Town"
                onSelect={onSelectTown}
                value={selectedTown}
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
        <Row justify="center">
          {selectedPath?.map((town, index) => (
            <Node key={index} text={town} onClose={() => onRemoveTown(index)} />
          ))}
        </Row>
        <Row justify="center">
          <GenerateCostBtn type="link" disabled={selectedPath.length < 2}>
            {deliveryCost}
          </GenerateCostBtn>
        </Row>
      </Content>
    </main>
  )
}

export default DeliveryCost
