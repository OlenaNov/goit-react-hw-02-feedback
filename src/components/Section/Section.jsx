import PropTypes from 'prop-types';
import { Title, Wrapper } from "./Section.styled";

const Section = ({ title, children }) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            {children}
        </Wrapper>
    )
};

export default Section;

Section.propTypes = {
    title: PropTypes.string,
};