import React from 'react';
import Styled from 'styled-components';

const Wrapper = Styled.button`
    & + & {
        margin-left: 2.25rem;
    }

    background-color: #0ca678;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;

    outline: none;
    border: none;

    color: #ffffff;

    font-size: 1.25rem;

    border-radius: 2px;
    cursor: pointer;
`;

interface Props {
    title: string;
}

const DownloadButton = ({ title }: Props) => {
    return <Wrapper>{title}</Wrapper>;
};

export default DownloadButton;
