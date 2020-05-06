import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/layout"

const Form = styled.form`
  display: grid;
  grid-template-rows: 1fr;
  justify-content: center;
  grid-gap: 1em;
  background-color: grey;
  padding: 10px;
`

const Input = styled.input`
  width: 40vw;
`
const Button = styled.button`
  background: white;
`

export default () => (
  <Layout>
    <h1>Contact Us</h1>
    <p>
      Please email us at <a href="mailto:hello@lamno.com">hello@lamno.com</a> or
      contact us below
    </p>

    <Form method="post" netlify-honeypot="bot-field" data-netlify="true">
      <Input type="hidden" name="bot-field" />{" "}
      <Input type="text" name="name" id="name" placeholder="Name" />
      <Input type="email" name="email" id="email" placeholder="Email Address" />
      <textarea name="message" id="message" rows="5" placeholder="Message" />
      <Button type="submit">Send</Button>
    </Form>
  </Layout>
)
