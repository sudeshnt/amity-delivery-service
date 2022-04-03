import { Col, Row } from 'antd'
import { HomeContent } from './styled'

const HomePage = () => {
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
      </HomeContent>
    </main>
  )
}

export default HomePage
