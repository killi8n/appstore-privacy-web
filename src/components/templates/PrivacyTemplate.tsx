import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding-top: 2.5rem;
    padding-left: 3.5rem;
    padding-right: 3.5rem;

    @media (max-width: 414px) {
        padding-top: 1.5rem;
        padding-left: 2.5rem;
        padding-right: 2.5rem;
    }

    @media (max-width: 320px) {
        padding-top: 0.5rem;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }
`;

interface PrivacyTemplateProps {
    __html: string;
}

class PrivacyTemplate extends Component<PrivacyTemplateProps> {
    render() {
        return (
            <Wrapper
                dangerouslySetInnerHTML={{
                    __html: this.props.__html,
                }}
            />
        );
    }
}

export default PrivacyTemplate;
