import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import withHeader from '../../lib/HoC/withHeader';
import { PathParams } from '../../types';

interface PrivacyPageProps extends RouteComponentProps<PathParams> {}
interface PrivacyPageState {}

class PrivacyPage extends Component<PrivacyPageProps, PrivacyPageState> {
    render() {
        return <div></div>;
    }
}

export default withHeader()(withRouter(PrivacyPage));
