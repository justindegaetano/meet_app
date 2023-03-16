import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents updateNumberOfEvents={() => {}}/>);
    });

    test("renders the component", () => {
        expect(NumberOfEventsWrapper).toBeDefined();
    });

    test('user sees 25 events by default', () => {
        expect(NumberOfEventsWrapper.state('number')).toBe(25);
    })

    test('renders input correctly', () => {
        const number = NumberOfEventsWrapper.state('number');
        expect(NumberOfEventsWrapper.find('.number').prop('value')).toBe(number);
    });

    test('change state when user input changes', () => {
        NumberOfEventsWrapper.setState({
            number: '25'
        });
        const eventNumber = { target: { value: '5' } };
        NumberOfEventsWrapper.find('.number').simulate('change', eventNumber);
        expect(NumberOfEventsWrapper.state('number')).toBe('5');
    });

    test('rendered number of events matches user input', () => {
        const RenderedNumberOfEvents = shallow(
            <NumberOfEvents number={10} updateNumberOfEvents={() => {}} />
        );
        expect(RenderedNumberOfEvents.state('number')).toBe(10);
    });

});