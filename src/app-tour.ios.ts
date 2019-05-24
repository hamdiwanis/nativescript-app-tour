import { AppTour as  AppTourBase, TourStop } from './app-tour.common';
import { Color } from 'tns-core-modules/color';
import { ios } from 'tns-core-modules/application';

export class AppTour extends AppTourBase {
    currentIndex = 0;
    buildNativeTour(stops: TourStop[]) {
        this.currentIndex = 0;
        const nativeStops = stops.map(stop => {
            const nativeStop: MaterialShowcase = MaterialShowcase.alloc().init();
            nativeStop.setTargetViewWithView(stop.view.ios);
            nativeStop.isTapRecognizerForTargetView = !stop.dismissable;
            nativeStop.delegate = AppTourDelegate.initWithOwner(new WeakRef(this));
            
            nativeStop.primaryText = stop.title;
            nativeStop.primaryTextColor = new Color(stop.titleTextColor|| this.defaults.titleTextColor).ios;
            nativeStop.primaryTextSize = stop.titleTextSize|| this.defaults.titleTextSize;

            nativeStop.secondaryText = stop.description|| this.defaults.description;
            nativeStop.secondaryTextColor = new Color(stop.descriptionTextColor|| this.defaults.descriptionTextColor).ios;
            nativeStop.secondaryTextSize = stop.descriptionTextSize|| this.defaults.descriptionTextSize;

            nativeStop.backgroundPromptColor = new Color(stop.outerCircleColor|| this.defaults.outerCircleColor).ios;
            nativeStop.backgroundPromptColorAlpha = stop.outerCircleOpacity|| this.defaults.outerCircleOpacity;
            nativeStop.targetHolderColor = new Color(stop.innerCircleColor|| this.defaults.innerCircleColor).ios;
            nativeStop.targetHolderRadius = stop.innerCircleRadius|| this.defaults.innerCircleRadius;
            nativeStop.aniRippleColor = new Color(stop.rippleColor|| this.defaults.rippleColor).ios;

            return nativeStop;
        });

        this.nativeTour = new MaterialShowcaseSequence()
        nativeStops.forEach(stop => {
            this.nativeTour.temp(stop);
        });
    }

    show() {
        this.nativeTour.start();
    }

    next() {
        this.nativeTour.showCaseWillDismis();
    }

    reset() {
        this.buildNativeTour(this.stops);
    }
}

export class AppTourDelegate extends NSObject {
    public static ObjCProtocols = [MaterialShowcaseDelegate];
    private _owner: WeakRef<AppTour>;

    get owner(): AppTour {
        return this._owner.get();
    }

    static initWithOwner(owner) {
        let delegate = new AppTourDelegate();
        delegate._owner = owner;
        return delegate;
    }

    showCaseWillDismissWithShowcaseDidTapTarget(showcase, didTapTarget) {}

    showCaseDidDismissWithShowcaseDidTapTarget(showcase, didTapTarget) {
        if (this.owner.currentIndex + 1 === this.owner.stops.length) {
            // tourended
            this.owner.handlers.onStep(this.owner.currentIndex);
            this.owner.handlers.finish();
        } else if (didTapTarget) {
            this.owner.next();
            this.owner.handlers.onStep(this.owner.currentIndex++);
        } else if (this.owner.stops[this.owner.currentIndex].dismissable) {
            this.owner.handlers.onCancel(this.owner.currentIndex++);
        }

    }
}