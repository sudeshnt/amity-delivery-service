import { Layout, Row, Form, Select, Button } from 'antd'
import { AppContext } from 'App'
import DeliveryPath, { DeliveryPathHeader } from 'components/Path/Path'
import Title from 'components/Title/Title'
import { isEmpty, cloneDeep } from 'lodash'
import { TownSelect } from 'pages/delivery-cost/styled'
import { useContext, useState, useEffect } from 'react'
import { PathContainer } from 'shared-styles'

const { Content } = Layout
const { Option } = Select

const DeliveryRoutes = () => {
  const appContext = useContext(AppContext)
  const { towns, routes } = appContext ?? {}
  const [fromTown, setFromTown] = useState<string>()
  const [toTown, setToTown] = useState<string>()
  const [tempRoute, setTempRoute] = useState<any>([])
  const [allRoutes, setAllRoutes] = useState<Array<string>>([])

  useEffect(() => {
    if (tempRoute.length) {
      setAllRoutes([...allRoutes, tempRoute])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tempRoute])

  useEffect(() => {
    console.log(allRoutes)
  }, [allRoutes])

  const onSelectTown = (type: string, val: string) => {
    clearAllRoutes()
    switch (type) {
      case 'from':
        setFromTown(val)
        break
      case 'to':
        setToTown(val)
        break
      default:
        break
    }
  }

  const getAdjacentNodes = (curr: string = 'B') => {
    if (!isEmpty(routes)) {
      return Object.entries(routes[curr])
        .filter(([key, val]) => {
          return (val as number) > 0
        })
        .map(([key]) => key)
    }
    return []
  }

  function onSubmit() {
    clearAllRoutes()
    let isVisited = Object.fromEntries(towns.map((town) => [town, false]))
    getPathToDestination(fromTown, toTown, isVisited, [fromTown], [])
  }

  function getPathToDestination(
    start: any,
    end: any,
    isVisited: any,
    localPath: any,
    allPaths: any
  ) {
    if (start === end) {
      // tempRoute = cloneDeep(localPath)
      // tempRoute.push(cloneDeep(localPath))
      setTempRoute(cloneDeep(localPath))
      // stop recurring since we have reached destination
      return
    }
    // Mark the current node as visited
    isVisited[start] = true
    // get adjacent nodes to the current node
    const adjacentNodes = getAdjacentNodes(start)
    for (let i = 0; i < adjacentNodes.length; i++) {
      if (!isVisited[adjacentNodes[i]]) {
        // store current node in localPath
        localPath.push(adjacentNodes[i])
        getPathToDestination(
          adjacentNodes[i],
          end,
          isVisited,
          localPath,
          allPaths
        )
        // remove current node
        localPath.splice(localPath.indexOf(adjacentNodes[i]), 1)
      }
    }
    // Mark the current node
    isVisited[start] = false
  }

  const clearAllRoutes = () => {
    setAllRoutes([])
  }

  return (
    <main>
      <Content>
        <Title
          title="List Delivery Routes"
          subtitle="Please select starting and ending towns to list routes"
        />
        <Form
          name="from_to_town_form"
          autoComplete="off"
          onFinish={() => onSubmit()}
        >
          <Row justify="center">
            <Form.Item name="from_town">
              <TownSelect
                placeholder="Starting Town"
                onSelect={(val: any) => onSelectTown('from', val)}
                value={fromTown}
                allowClear
                onClear={clearAllRoutes}
              >
                {towns?.map((town, index) => (
                  <Option key={index} value={town}>
                    {town}
                  </Option>
                ))}
              </TownSelect>
            </Form.Item>
            <Form.Item name="to_town">
              <TownSelect
                placeholder="Destination Town"
                onSelect={(val: any) => onSelectTown('to', val)}
                value={toTown}
                allowClear
                onClear={clearAllRoutes}
              >
                {towns?.map((town, index) => (
                  <Option key={index} value={town}>
                    {town}
                  </Option>
                ))}
              </TownSelect>
            </Form.Item>
          </Row>
          <Row justify="center">
            <Form.Item>
              <Button
                disabled={!fromTown || !toTown}
                type="primary"
                htmlType="submit"
              >
                List Available Routes
              </Button>
            </Form.Item>
          </Row>
          {allRoutes.length > 0 && (
            <>
              <PathContainer isHeader>
                <DeliveryPathHeader />
                {allRoutes?.map((path) => (
                  <DeliveryPath path={path} routes={routes} />
                ))}
              </PathContainer>
            </>
          )}
        </Form>
      </Content>
    </main>
  )
}

export default DeliveryRoutes
