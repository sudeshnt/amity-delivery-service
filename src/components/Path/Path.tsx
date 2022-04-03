import { useEffect, useState } from 'react'
import { message } from 'antd'
import Node from 'components/Node/Node'
import {
  PathHeader,
  PathRow,
  CostColumn,
  PathColumn,
  CostValue,
  CostWithLabel,
} from './styled'

export const DeliveryPathHeader = () => {
  return (
    <PathHeader>
      <PathColumn span={20} className="column-name">
        Path
      </PathColumn>
      <CostColumn span={4}>Cost</CostColumn>
    </PathHeader>
  )
}

const DeliveryPath = (props: any) => {
  const { routes, path, onRemoveNode, layout = 'row', costLabel } = props

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
            content: `Path does not exist from ${node} to ${nextNode}`,
          })
          onRemoveNode && onRemoveNode(index + 1)
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
          <PathColumn span={20} className="path-column">
            {path?.map((node: string, index: number) => (
              <Node
                key={index}
                text={node}
                onClose={() => onRemoveNode && onRemoveNode(index)}
              />
            ))}
          </PathColumn>
          {deliveryCost > 0 && (
            <CostColumn span={layout === 'row' ? 4 : 24}>
              {costLabel ? (
                <CostWithLabel>
                  <p className="costLabel">{costLabel}</p>
                  <p className="costValue">{deliveryCost}</p>
                </CostWithLabel>
              ) : (
                <CostValue>{deliveryCost}</CostValue>
              )}
            </CostColumn>
          )}
        </>
      )}
    </PathRow>
  )
}

export default DeliveryPath
