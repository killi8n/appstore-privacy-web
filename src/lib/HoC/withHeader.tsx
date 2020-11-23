import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Header from '../../components/molecules/Header';
import { PathParams } from '../../types';

interface InnerComponentProps extends RouteComponentProps<PathParams> {}

const withHeader = () => (WrappedComponent: React.ComponentType<any>) => {
    class InnerComponent extends React.Component<InnerComponentProps> {
        componentDidMount() {
            const { appName } = this.props.match.params;
            if (
                typeof appName === 'undefined' ||
                (appName !== 'scheduler' && appName !== 'travellogger')
            ) {
                this.props.history.push('/404');
            }
        }

        render() {
            const { appName } = this.props.match.params;
            if (
                typeof appName === 'undefined' ||
                (appName !== 'scheduler' && appName !== 'travellogger')
            ) {
                return null;
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
