import * as application from "tns-core-modules/application";
import { IMrzData, MrzCallback } from "./mrz-reader.common";

const REQUEST_CODE = 1001;
let mrzCallback: MrzCallback = null;

function init() {
    application.android.on(application.AndroidApplication.activityResultEvent, (data: application.AndroidActivityResultEventData) => {
        if (mrzCallback && data.requestCode === REQUEST_CODE) {
            let result: IMrzData = null;
            if (data.resultCode === android.app.Activity.RESULT_OK) {
                const intent = <android.content.Intent>data.intent,
                    mrzInfo: org.jmrtd.lds.icao.MRZInfo = <any>intent.getSerializableExtra(com.mercuriete.mrz.reader.CaptureActivity.MRZ_RESULT);

                result = {
                    value: mrzInfo.toString(),
                    android: mrzInfo
                };
            }
            mrzCallback(result);
        }
    });
}

export function retrieveData(callback: MrzCallback) {
    mrzCallback = callback;
    const intent = new android.content.Intent();
    intent.setClass(application.android.context, com.mercuriete.mrz.reader.CaptureActivity.class);
    (<android.support.v7.app.AppCompatActivity>application.android.foregroundActivity)
        .startActivityForResult(intent, REQUEST_CODE);
}

init();
