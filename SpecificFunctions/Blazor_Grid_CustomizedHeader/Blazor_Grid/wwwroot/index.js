function CustomHeaderScript(templateHeader, args) {
    console.log(args.cellInfo.styleKey);
    if (args.content.childElementCount === 0) {
        var label = undefined;
        var label1 = undefined;
        var label2 = undefined;
        var label3 = undefined;
        if (args.cellInfo.styleKey === 'template-header-0') {
            args.content.classList.add("header-cell-row","single_row");
            label = document.createElement("div");
            args.content.appendChild(label);
        } else if (args.cellInfo.styleKey === 'template-header-4') {
            args.content.classList.add("header-cell-vertical");
            vlabel = document.createElement("div");
            vlabel1 = document.createElement("span");
            vlabel1.innerText = "優";
            vlabel2 = document.createElement("span");
            vlabel2.innerText = "先";
            vlabel3 = document.createElement("span");
            vlabel3.innerText = "度";
            vlabel.appendChild(vlabel1);
            vlabel.appendChild(vlabel2);
            vlabel.appendChild(vlabel3);
            args.content.appendChild(vlabel);
        } else {
            args.content.classList.add("header-cell-row");
            label1 = document.createElement("div");
            label2 = document.createElement("div");
            label3 = document.createElement("div");
            args.content.appendChild(label1);
            args.content.appendChild(label2);
            args.content.appendChild(label3);
        }
        args.content.parentNode.classList.add("header-cell-row-parent")

        if (label) {
            label.innerText = args.cellInfo.value;
        }

        if (label1) {
            label1.innerText = args.cellInfo.value;
        }
        if (label2) {
            label2.innerText = args.cellInfo.value;
        }
        if (label3) {
            label3.innerText = args.cellInfo.value;
        }
    }
}

igRegisterScript("CustomHeaderScript", CustomHeaderScript, false);