import React from 'react';
import Styled from 'styled-components';
import Header from '../../components/Header';
import media from '../style/media';

const InnerWrapper = Styled.div`
    padding: 3.5rem;

    ${media.medium} {
        padding: 1.5rem;
    }
`;

const withTemplate = (WrappedComponent: React.ComponentType) => {
    return class extends React.Component {
        render() {
            return (
                <>
                    <Header />
                    <InnerWrapper>
                        <WrappedComponent />
                    </InnerWrapper>
                </>
            );
        }
    };
};

export default withTemplate;
