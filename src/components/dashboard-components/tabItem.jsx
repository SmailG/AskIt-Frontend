import React, { Component }  from 'react';

const TabItem = ({ tab, selectTab, selectedTab }) => {

    const handleClick = () => {
        selectTab(tab);
    }
    return (
        <span className={selectedTab.id === tab.id ? 'dashboard-tab selected' : "dashboard-tab"} onClick={handleClick} >{tab.title}</span>
    );
}

export default TabItem;