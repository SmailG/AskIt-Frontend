import React, { Component }  from 'react';
import TabItem from "./tabItem";

const DashboardTabs = ({ tabs, selectTab, selectedTab }) => {

    return (
        <div className="dashboard-tabs">
            {tabs.map(tab => <TabItem
            key={tab.id}
            tab={tab}
            selectTab={selectTab}
            selectedTab={selectedTab}
            />)}
        </div>
    );
}

export default DashboardTabs;