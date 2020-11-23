import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Header from '../../components/molecules/Header';
import { PathParams } from '../../types';

interface InnerComponentProps extends RouteComponentProps<PathParams> {}

const withHeader = () => (WrappedComponent: React.ComponentType<any>) => {
    class InnerComponent extends React.Component<InnerComponentProps> {
        render() {
            const { appName } = this.props.match.params;
            if (typeof appName === 'undefined') {
                this.props.history.push('/404');
                return;
            }
            return (
                <>
                    <Header
                        titleText={appName.toUpperCase()}
                        appName={appName}
                    />
                    <WrappedComponent />
                </>
            );
        }
    }

    return InnerComponent;
};

export default withHeader;
