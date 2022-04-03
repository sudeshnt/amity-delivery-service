import { isEmpty } from 'lodash'

export default function usePathUtils() {
  const getAdjacentNodes = (routes: any, curr: string) => {
    if (!isEmpty(routes) && curr) {
      return Object.entries(routes[curr])
        .filter(([key, val]) => {
          return (val as number) > 0
        })
        .map(([key]) => key)
    }
    return []
  }

  return {
    getAdjacentNodes,
  }
}
