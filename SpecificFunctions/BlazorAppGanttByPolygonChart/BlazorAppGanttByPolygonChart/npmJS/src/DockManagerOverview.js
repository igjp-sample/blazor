import { defineCustomElements } from 'igniteui-dockmanager/loader';
defineCustomElements();

var DockManagerOverview = window.DockManagerOverview = window.DockManagerOverview || {};

// NOTE this function creates and arranges children of WC Dockmanager
DockManagerOverview.arrange = function (dockmanager) {

    const pane1 = createContentPane('content1', 'Content Pane 1');
    const pane2 = createContentPane('content2', 'Unpinned Pane 1');

    const splitPane1 = createSplitPane("vertical", [pane1, pane2]);

    dockmanager.layout = {
        rootPane: {
            type: "splitPane",
            orientation: "horizontal",
            panes: [
                {
                    type: "contentPane",
                    contentId: 'task',
                    allowClose: false,
                    allowFloating: false,
                    allowMaximize: false,
                    allowPinning: false,
                    size: 30
                },
                {
                    type: "contentPane",
                    allowClose: false,
                    allowFloating: false,
                    allowMaximize: false,
                    allowPinning: false,
                    contentId: 'gantt'
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