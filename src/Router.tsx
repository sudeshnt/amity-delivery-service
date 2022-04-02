import { Routes, Route, Navigate } from 'react-router-dom'
import DeliveryCost from 'pages/delivery-cost/DeliveryCost'
import DeliveryRoutes from 'pages/delivery-routes/DeliveryRoutes'
import PageNotFound from 'pages/not-found/404'
import { URLS } from 'config/router-config'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to={URLS.DELIVERY_COST} />} />
      <Route path={URLS.DELIVERY_COST} element={<DeliveryCost />} />
      <Route path={URLS.DELIVERY_ROUTES} element={<DeliveryRoutes />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default Router
