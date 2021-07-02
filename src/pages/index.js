import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { Form, Container, Row, Col, Button } from "react-bootstrap"

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

        <Row>
          {/* Column voor de form */}
          <Col lg={9}>
            <Form>
              <Row>
                <Col>
                  <Form.Group controlId="formBasicFirstName">
                    <Form.Label>Voornaam</Form.Label>
                    <Form.Control required type="text" placeholder="Jan" />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group controlId="formBasicLastName">
                    <Form.Label>Achternaam</Form.Label>
                    <Form.Control required type="text" placeholder="Janssen" />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email Adress</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="JanJanssen@Jan.com"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPhoneNumber">
                <Form.Label>Telefoonnummer (optioneel)</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>

              <Form.Group controlId="formBasicDescription">
                <Form.Label>Omschrijving van uw inlichting</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  rows="3"
                  placeholder="Plaats hier wat u graag wilt vertellen"
                />
              </Form.Group>
              <Button type="submit">Stuur contact formulier</Button>
            </Form>
          </Col>

          {/* Column voor omschrijving van het form veld */}
          <Col>
            Voer uw contact informatie in en omschrijf wat uw graag wilt
            vertellen, ik neem zo snel mogelijk contact op wanneer mogelijk is!
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default IndexPage
