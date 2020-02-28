import React from 'react';
import Styled from 'styled-components';
import Header from '../../components/Header';

const InnerWrapper = Styled.div`
    padding-left: 3.5rem;
    padding-right: 3.5rem;
    padding-top: 3.5rem;
    padding-bottom: 3.5rem;
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
