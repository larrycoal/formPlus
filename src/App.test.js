import React from 'react'
import renderer from 'react-test-renderer'
import Pagination from './components/pagination'
import { TemplateCard } from './Utils'
import {updateCategory} from '../src/Store/action'
const template = {
  name:"test",
  description:"test description",
  link:"https://test.com"
}
const key = "unique-key"


test("matches pagination snapshot",()=>{
  const tree = renderer.create(<Pagination></Pagination>).toJSON()
  expect(tree).toMatchSnapshot()
})
test("matches templateCard snapshot",()=>{
  const tree = renderer.create(<TemplateCard template={template} key={key}></TemplateCard>).toJSON()
  expect(tree).toMatchSnapshot()
})
describe('actions', () => {
  it('should update state', () => {
    const template = {template:{name:"lorem"},category:"Health"}
    const expectedAction = {
      type: 'filter_category',
      payload:template
    }
    expect(updateCategory(template)).toEqual(expectedAction)
  })
})