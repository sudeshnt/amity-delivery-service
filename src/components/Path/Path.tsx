import { useEffect, useState } from 'react'
import { message } from 'antd'
import { CostValue } from 'pages/delivery-cost/styled'
import Node from 'components/Node/Node'
import { PathRow, CostColumn, PathColumn } from './styled'

const DeliveryPath = (props: any) => {
  const { routes, path, onRemoveNode, layout } = props

  const [deliveryCost, setDeliveryCost] = useState<number>(0)

  const calculateDeliveryCost = (path: Array<string>) => {
    return path.reduce((acc, node, index) => {
      const nextNode = path[index + 1]
      if (nextNode) {
        const nextNodeExists = routes[node][nextNode] > 0
        if (nextNodeExists) {
          return acc + routes[node][nextNode]
        } else {
          message.error({
            duration: 2,
            content: 'Path does not exist',
          })
          onRemoveNode(index + 1)
        }
      }
      return acc
    }, 0)
  }

  useEffect(() => {
    if (path.length > 1) {
      const costOfPath = calculateDeliveryCost(path)
      setDeliveryCost(costOfPath)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path])

  return (
    <PathRow layout={layout}>
      {path.length > 0 && (
        <>
          <PathColumn span={20}>
            {path?.map((node: string, index: number) => (
              <Node
                key={index}
                text={node}
                closable={!!onRemoveNode}
                onClose={() => onRemoveNode(index)}
              />
            ))}
          </PathColumn>
          <CostColumn span={4}>
            <CostValue>{deliveryCost}</CostValue>
          </CostColumn>
        </>
      )}
    </PathRow>
  )
}

export default DeliveryPath
