import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding-top: 2.5rem;
    padding-left: 3.5rem;
    padding-right: 3.5rem;
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
