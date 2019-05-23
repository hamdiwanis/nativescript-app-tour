import { AppTour as  AppTourBase, TourStop } from './app-tour.common';
import { Color } from 'tns-core-modules/color';
import { ios } from 'tns-core-modules/application';

export class AppTour extends AppTourBase {
    stopIndex;

    buildNativeTour(stops: TourStop[]) {
        const stop = stops[this.stopIndex];
        this.nativeTour = MaterialShowcase.alloc().init();
        this.nativeTour.setTargetViewWithView(stop.view.ios);
        this.nativeTour.isTapRecognizerForTagretView = !stop.dismissable;
        this.nativeTour.delegate = AppTourDelegate.initWithOwner(new WeakRef(this));

        this.nativeTour.primaryText = stop.title;
        this.nativeTour.primaryTextColor = new Color(stop.titleTextColor|| this.defaults.titleTextColor).ios;
        this.nativeTour.primaryTextSize = stop.titleTextSize|| this.defaults.titleTextSize;

        this.nativeTour.secondaryText = stop.description|| this.defaults.description;
        this.nativeTour.secondaryTextColor = new Color(stop.descriptionTextColor|| this.defaults.descriptionTextColor).ios;
        this.nativeTour.secondaryTextSize = stop.descriptionTextSize|| this.defaults.descriptionTextSize;

        this.nativeTour.backgroundPromptColor = new Color(stop.outerCircleColor|| this.defaults.outerCircleColor).ios;
        this.nativeTour.backgroundPromptColorAlpha = stop.outerCircleOpacity|| this.defaults.outerCircleOpacity;
        this.nativeTour.targetHolderColor = new Color(stop.innerCircleColor|| this.defaults.innerCircleColor).ios;
        this.nativeTour.targetHolderRadius = stop.innerCircleRadius|| this.defaults.innerCircleRadius;
        this.nativeTour.aniRippleColor = new Color(stop.rippleColor|| this.defaults.rippleColor).ios;
    }

    show() {
        const container = ios.window;
        this.nativeTour.showWithAnimatedCompletionContainer(true, () => {}, container);
    }

    next() {
        if (this.stopIndex >= this.stops.length - 1) {
            return;
        }

        this.stopIndex++;
        this.buildNativeTour(this.stops);
        this.show();
    }

    reset() {
        this.stopIndex = 0;
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
        if(didTapTarget){
            this.owner.next();
        }else{
            this.owner.reset();
        }

    }
}