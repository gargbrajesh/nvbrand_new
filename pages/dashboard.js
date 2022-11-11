import React from 'react';
import UserDashboard from 'views/UserDashboard';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';
const DashboardIndexView = () => {
    return (
        <WithLayout
            component={UserDashboard}
            layout={Main}
        />
    )
};

export default DashboardIndexView;
