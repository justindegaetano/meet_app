import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents updateNumberOfEvents={() => {}} updateEvents={() => {}}/>);
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
        expect(NumberOfEventsWrapper.state('number')).toBe(25);
        NumberOfEventsWrapper.find('input.number').simulate('change', {
        target: { value: 10 },
        });
        expect(NumberOfEventsWrapper.state('number')).toBe(10);
    });

});