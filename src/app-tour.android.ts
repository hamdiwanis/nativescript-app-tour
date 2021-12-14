import { AppTour as  AppTourBase, TourStop } from './app-tour.common';
import { Color } from '@nativescript/core/color';
import { android } from '@nativescript/core/application';

declare let com;
let TapTarget = com.getkeepsafe.taptargetview.TapTarget;
let TapTargetSequence = com.getkeepsafe.taptargetview.TapTargetSequence;

export class AppTour extends AppTourBase {
    currentStop = 0;
    buildNativeTour(stops: TourStop[], handlers) {
        const targets: any[] = stops.map(stop => {
            this.currentStop = 0;
            return TapTarget.forView(stop.view.nativeView || stop.view.android || stop.view, stop.title, stop.description|| this.defaults.description)
                .outerCircleColorInt(new Color(stop.outerCircleColor|| this.defaults.outerCircleColor).android)
                .outerCircleAlpha(float(stop.outerCircleOpacity|| this.defaults.outerCircleOpacity))
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
        this.nativeTour.listener(new TapTargetSequence.Listener({
            onSequenceFinish: function() {
                handlers.finish();
            }.bind(this),
            onSequenceStep: function() {
                handlers.onStep(this.currentStop++);
            }.bind(this),
            onSequenceCanceled: function() {
                handlers.onCancel(this.currentStop++);
            }.bind(this)
        }));
    }

    show() {
        this.nativeTour.start();
    }

    reset() {
        this.buildNativeTour(this.stops, this.handlers);
    }
}
