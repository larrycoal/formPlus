import React from 'react'
import renderer from 'react-test-renderer'
import Form from './components/form'
import Pagination from './components/pagination'
import { TemplateCard } from './Utils'

const template = {
  name:"test",
  description:"test description",
  link:"https://test.com"
}
const key = "unique-key"

test("matches form snapshot",()=>{
  const tree = renderer.create(<Form></Form>).toJSON()
  expect(tree).toMatchSnapshot()
})
test("matches pagination snapshot",()=>{
  const tree = renderer.create(<Pagination></Pagination>).toJSON()
  expect(tree).toMatchSnapshot()
})
test("matches templateCard snapshot",()=>{
  const tree = renderer.create(<TemplateCard template={template} key={key}></TemplateCard>).toJSON()
  expect(tree).toMatchSnapshot()
})