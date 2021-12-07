export interface TourStop {
    view: { ios, android, nativeView };
    title: string;
    titleTextSize?: number;
    titleTextColor?: string;
    description?: string;
    descriptionTextSize?: number;
    descriptionTextColor?: string;
    outerCircleColor?: string;
    outerCircleOpacity?: number;
    innerCircleColor?: string;
    rippleColor?: string; // ios-only
    innerCircleRadius?: number;
    dismissable?: boolean;
}

export interface TourEvents {
    finish?: Function,
    onStep?: Function,
    onCancel?: Function
}

export class AppTour {
    nativeTour;
    handlers;

    defaults: TourStop = {
        view: null,
        title: 'title',
        titleTextSize: 25,
        titleTextColor: 'white',
        description: 'description',
        descriptionTextSize: 20,
        descriptionTextColor: 'white',
        outerCircleOpacity: 0.96,
        outerCircleColor: 'black',
        innerCircleColor: 'white',
        rippleColor: 'white', // ios-only
        innerCircleRadius: 50,
        dismissable: false
    };

    defaultHandlers: TourEvents = {
        finish() {},
        onStep(lastStepNative) {},
        onCancel(lastStepNative) {}
    }

    constructor(public stops: TourStop[], handlers?: TourEvents) {
        if (handlers) {
            handlers.finish = handlers.finish || this.defaultHandlers.finish;
            handlers.onStep = handlers.onStep || this.defaultHandlers.onStep;
            handlers.onCancel = handlers.onCancel || this.defaultHandlers.onCancel;
        }
        this.stops = stops;
        this.handlers = handlers || this.defaultHandlers;
        this.reset();
        this.buildNativeTour(stops, this.handlers);
    }

    updateStops(stops: TourStop[]) {
        this.stops = stops;
        this.reset();
        this.buildNativeTour(stops, this.handlers);
    }

    buildNativeTour(stops: TourStop[], handlers: TourEvents) {}

    show() {}

    reset() {}
}


