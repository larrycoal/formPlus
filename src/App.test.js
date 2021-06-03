import React from 'react'
import renderer from 'react-test-renderer'
import Form from './components/form'
import Pagination from './components/pagination'

test("matches form snapshot",()=>{
  const tree = renderer.create(<Form></Form>).toJSON()
  expect(tree).toMatchSnapshot()
})
test("matches pagination snapshot",()=>{
  const tree = renderer.create(<Pagination></Pagination>).toJSON()
  expect(tree).toMatchSnapshot()
})