import { Page } from "tns-core-modules/ui/page";
import { Button } from "tns-core-modules/ui/button";
import * as observable from "tns-core-modules/data/observable";
import * as pages from "tns-core-modules/ui/page";

import * as Permissions from "nativescript-permissions";
import { IMrzData, retrieveData } from "nativescript-mrz-reader";

import { HelloWorldModel } from "./main-view-model";

// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    let page = <pages.Page>args.object;
    page.bindingContext = new HelloWorldModel();
}

export function onScanButtonTap(args: observable.EventData) {
    if (Permissions.hasPermission(android.Manifest.permission.CAMERA)) {
        retrieveData((result: IMrzData) => {
            // Give it some time for capture activity to finish
            setTimeout(() => {
                const bindingContext = (<Page>(<Button>args.object).page).bindingContext;
                bindingContext.set("value", result && result.value || "Cancelled");
                bindingContext.set("image", result && result.image || null);
            }, 100);
        });
    } else {
        Permissions.requestPermission(android.Manifest.permission.CAMERA)
            .then(() => onScanButtonTap(args));
    }
}
