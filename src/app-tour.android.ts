import { AppTour as  AppTourBase, TourStop } from './app-tour.common';
import { Color } from 'tns-core-modules/color';
import { android } from 'tns-core-modules/application';

declare let com;
let TapTarget = com.getkeepsafe.taptargetview.TapTarget;
let TapTargetSequence = com.getkeepsafe.taptargetview.TapTargetSequence;

export class AppTour extends AppTourBase {
    buildNativeTour(stops: TourStop[]) {
        const targets: any[] = stops.map(stop => {
            return TapTarget.forView(stop.view.android, stop.title, stop.description|| this.defaults.description)
                .outerCircleColorInt(new Color(stop.outerCircleColor|| this.defaults.outerCircleColor).android)
                .targetCircleColorInt(new Color(stop.innerCircleColor|| this.defaults.innerCircleColor).android)
                .titleTextSize(stop.titleTextSize|| this.defaults.titleTextSize)
                .titleTextColorInt(new Color(stop.titleTextColor|| this.defaults.titleTextColor).android)
                .descriptionTextSize(stop.descriptionTextSize|| this.defaults.descriptionTextSize)
                .descriptionTextColorInt(new Color(stop.descriptionTextColor|| this.defaults.descriptionTextColor).android)
                .cancelable(stop.dismissable)
                .drawShadow(true)
                .tintTarget(false)
                .targetRadius(stop.innerCircleRadius|| this.defaults.innerCircleRadius);
        });

        this.nativeTour = new TapTargetSequence(android.foregroundActivity);
        this.nativeTour.targets(java.util.Arrays.asList(targets));
    }

    show() {
        this.nativeTour.start();
    }

    reset() {
        this.buildNativeTour(this.stops);
    }
}
