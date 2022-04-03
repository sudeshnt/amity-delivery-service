import { Routes, Route } from 'react-router-dom'
import HomePage from 'pages/home/Home'
import DeliveryCostPage from 'pages/delivery-cost/DeliveryCost'
import DeliveryRoutesPage from 'pages/delivery-routes/DeliveryRoutes'
import PageNotFound from 'pages/not-found/404'
import { URLS } from 'config/router-config'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path={URLS.DELIVERY_COST} element={<DeliveryCostPage />} />
      <Route path={URLS.DELIVERY_ROUTES} element={<DeliveryRoutesPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default Router
