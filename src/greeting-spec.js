import React from 'react/addons';
import Greeting from './greeting.js';


var TestUtils = React.addons.TestUtils;

describe('Greeting', () => {
    var component;

    beforeEach(() => {
        component = TestUtils.renderIntoDocument(<Greeting name="World"/>);
    });

    it('should display the correct name', () => {
        expect(React.findDOMNode(component).textContent).toMatch(/Hello, World!/);
    });
});