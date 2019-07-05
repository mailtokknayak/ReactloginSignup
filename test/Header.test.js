import React from 'react';
import { configure, shallow, render } from 'enzyme';
import chai, { expect } from 'chai';
import Header from '../src/component/Header';
import chaiEnzyme from 'chai-enzyme';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App Component testing', () => {

   

    it('App renders ', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper).to.be.ok
    });

    it('should check heading', () => {
        const wrapper = shallow(<Header />)
        expect(wrapper.find(<h1>Inventory Leader</h1>)).not.equals(null)
    })

    it('should check Search Box', () => {
        const wrapper = shallow(<Header />)
        expect(wrapper.find("#searchText").length).to.equal(1)
    })

    chai.use(chaiEnzyme())

})