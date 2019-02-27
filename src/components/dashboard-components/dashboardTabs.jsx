import React, { Component }  from 'react';
import TabItem from "./tabItem";

const DashboardTabs = ({ tabs, selectTab, selectedTab, token }) => {

    return (
        <div className="dashboard-tabs">
            {tabs.map(tab => {
                if(tab.role === 'any') {
                    return <TabItem
                key={tab.id}
                tab={tab}
                selectTab={selectTab}
                selectedTab={selectedTab}
                />
            }
            if(tab.role === 'user' && token) {
                return <TabItem
                key={tab.id}
                tab={tab}
                selectTab={selectTab}
                selectedTab={selectedTab}
                />
            }
            })}
        </div>
    );
}

export default DashboardTabs;