import { defineCustomElements } from 'igniteui-dockmanager/loader';
defineCustomElements();

var DockManagerOverview = window.DockManagerOverview = window.DockManagerOverview || {};
var CreatedTabNum = 2;

// NOTE this function creates and arranges children of WC Dockmanager
DockManagerOverview.arrange = function (dockmanager) {

    const pane1 = createContentPane('content1', 'Tab Pane 1');
    const pane2 = createContentPane('content2', 'Tab Pane 2');

    dockmanager.layout = {
        rootPane: {
            type: "splitPane",
            orientation: "horizontal",
            panes: [
                {
                    type: "tabGroupPane",
                    panes: [
                        pane1, pane2
                    ]
                }
            ]
        }
    }
};

DockManagerOverview.createTab = function (dockmanager) {

    CreatedTabNum++;
    const pane = createContentPane('content' + CreatedTabNum, 'Tab Pane ' + CreatedTabNum);
    var tabPanes = dockmanager.layout.rootPane.panes[0].panes;
    tabPanes.push(pane);

    dockmanager.layout = {
        rootPane: {
            type: "splitPane",
            orientation: "horizontal",
            panes: [
                {
                    type: "tabGroupPane",
                    panes: tabPanes
                }
            ]
        }
    }

};

function createContentPane(contentID, paneHeader) {
    const pane = {
        header: paneHeader,
        type: "contentPane",
        contentId: contentID
    };
    return pane;
}

function createSplitPane(orientation, contentPanes, size) {
    const pane = {
        type: "splitPane",
        orientation: orientation,
        panes: contentPanes,
        size: size
    };
    return pane;
}

function createTabPane(orientation, contentPanes, size) {
    const pane = {
        type: "documentHost",
        size: size,
        rootPane: {
            type: "splitPane",
            orientation: orientation,
            panes: [
                {
                    type: "tabGroupPane",
                    panes: contentPanes
                }
            ]
        }
    };
    return pane;
}