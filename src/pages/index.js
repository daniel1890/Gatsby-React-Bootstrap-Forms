import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { Form, Container, Row, Col } from "react-bootstrap"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Container fluid="lg">
        <StaticImage
          src="../images/gatsby-astronaut.png"
          width={300}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          style={{ marginBottom: `1.45rem` }}
        />

        <Form>
          <Row>
            <Col>
              <Form.Group controlId="formBasicFirstName">
                <Form.Label>Voornaam</Form.Label>
                <Form.Control type="text" placeholder="Jan" />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="formBasicLastName">
                <Form.Label>Achternaam</Form.Label>
                <Form.Control type="text" placeholder="Janssen" />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email Adress</Form.Label>
            <Form.Control type="text" placeholder="JanJanssen@Jan.com" />
          </Form.Group>

          <Form.Group controlId="formBasicPhoneNumber">
            <Form.Label>Telefoonnummer (optioneel)</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>

          <Form.Group controlId="formBasicDescription">
            <Form.Label>Omschrijving van uw inlichting</Form.Label>
            <Form.Control
              type="text"
              placeholder="Plaats hier wat u graag wilt vertellen"
            />
          </Form.Group>
        </Form>
      </Container>
    </Layout>
  )
}

export default IndexPage
