import React from 'react';
import Styled from 'styled-components';
import media from '../../lib/style/media';

const Wrapper = Styled.button`
    & + & {
        margin-left: 2.25rem;

        ${media.medium} {
            margin-left: 0rem;
            margin-top: 0.5rem;
        }
    }

    background-color: #0ca678;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;

    width: 45%;

    outline: none;
    border: none;

    color: #ffffff;

    font-size: 1.25rem;

    border-radius: 2px;
    cursor: pointer;

    ${media.medium} {
        width: 100%;
        font-size: 0.95rem;
    }
`;

interface Props {
    title: string;
}

const DownloadButton = ({ title }: Props) => {
    return <Wrapper>{title}</Wrapper>;
};

export default DownloadButton;
