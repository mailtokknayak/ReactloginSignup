import React from 'react';
import { configure, shallow, render} from 'enzyme';
import chai, { expect } from 'chai';
import App from '../src/component/App';
import chaiEnzyme from 'chai-enzyme';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App Component testing', function() {

  it('App renders ', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).to.be.ok;
});

it('Home Page Render' , () =>{
    const wrapper = shallow(<App />)
    wrapper.state.toggle = 'home'
    expect(wrapper.find("#mainDiv").length).to.equal(1)
    
})

// it('Edit Page Render' , () =>{
//   const wrapper = shallow(<App />)
//   wrapper.state.toggle = 'edit'
//   expect(wrapper.find("#updatePageId").length).to.equal(1)
// })

// it('Add Page Render' , () =>{
//   const wrapper = shallow(<App />)
//   wrapper.state.toggle = ''
//   expect(wrapper.find("#mainDiv").length).to.equal(1)
  
// })

  chai.use(chaiEnzyme())

})