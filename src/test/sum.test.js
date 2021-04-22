import React from 'react'
import ReactDOM from 'react-dom'
import {render} from '@testing-library/jest-dom'

import Carousel from '../component/Carousel/Carousel'
import Slider from 'react-slick'


it('renders without crashing', ()=>{
  const div = document.createElement('div');
  ReactDOM.render(<Carousel/>,div)
  ReactDOM.unmountComponentAtNode(div)
  
})
it('renders children',() => {
  const {getByText} = render(<div><Carousel><Slider><h2>Content</h2></Slider></Carousel></div>);
  const children = getByText('Content');
  expect(children).toBeInTheDocument();
})