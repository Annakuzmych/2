import React from 'react';
import { shallow } from 'enzyme';
import MainQuiz from '../MainQuiz';

describe('MainQuiz', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<MainQuiz />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should show QuizFinishedModal when quiz is finished', () => {
        const wrapper = shallow(<MainQuiz />);
        expect(wrapper.find('QuizFinishedModal').exists()).toBe(false);

        wrapper.setState({ isQuizFinished: true });
        expect(wrapper.find('QuizFinishedModal').exists()).toBe(true);
    });

    it('should handle quiz finish', () => {
        const wrapper = shallow(<MainQuiz />);
        wrapper.instance().handleQuizFinish();
        expect(wrapper.state('isQuizFinished')).toBe(true);
    });

    it('should handle modal close', () => {
        const wrapper = shallow(<MainQuiz />);
        wrapper.setState({ isQuizFinished: true });
        wrapper.instance().handleCloseModal();
        expect(wrapper.state('isQuizFinished')).toBe(false);
    });
});
