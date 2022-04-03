import { useState, useContext, useEffect } from 'react'
import Graph from 'react-graph-vis'
import { Col, Row } from 'antd'
import { isEmpty } from 'lodash'
import { AppContext } from 'App'
import { HomeContent, GraphContainer } from './styled'

const HomePage = () => {
  const appContext = useContext(AppContext)
  const { towns, routes } = appContext ?? {}
  const [graph, setGraph] = useState<any>({})

  useEffect(() => {
    if (!isEmpty(routes)) {
      const nodes = towns.map((town, i) => {
        return { id: i + 1, label: town }
      })
      const edges: Array<any> = []
      Object.entries(routes).forEach(([source, destinations]) => {
        Object.entries(destinations as any).forEach(([dest, cost]) => {
          if ((cost as number) > 0) {
            const sourceNodeId = nodes.find((n) => n.label === source)?.id
            const destNodeId = nodes.find((n) => n.label === dest)?.id
            if (sourceNodeId && destNodeId) {
              edges.push({
                id: edges.length + 1,
                from: sourceNodeId,
                to: destNodeId,
              })
            }
          }
        })
      })
      setGraph({ nodes, edges })
    }
  }, [towns, routes])

  const options = {
    layout: {
      hierarchical: false,
    },
    edges: {
      color: '#000000',
    },
    height: '500px',
  }

  return (
    <main>
      <HomeContent>
        <h1>Amity Delivery Service</h1>
        <h2>
          In this Application you have the ability to{' '}
          <strong>calculate the delivery cost</strong> between two nodes &{' '}
          <strong>find all possible routes</strong> between two given nodes
        </h2>
        <Row className="table">
          <Col className="left" span="12">
            <h3>Calculating the Cost</h3>
            <p>
              Keep selecting each node of the path in order and it will give you
              the cost of delivery in realtime.
            </p>
            <p>
              You can clear the current path in case you want to try another
              path.
            </p>
          </Col>
          <Col className="right" span="12">
            <h3>List Possible Routes</h3>
            <p>First select the desired start and end nodes.</p>
            <p>
              Click <strong>List Available Routes</strong> button to list all
              the possible routes from source to destination
            </p>
          </Col>
        </Row>
        {!isEmpty(graph?.nodes) && !isEmpty(graph?.edges) && (
          <GraphContainer>
            <h3>Map of the towns are as follows</h3>
            <Graph
              graph={graph}
              options={options}
              style={{ pointerEvents: 'none', height: '300px' }}
            />
          </GraphContainer>
        )}
      </HomeContent>
    </main>
  )
}

export default HomePage
