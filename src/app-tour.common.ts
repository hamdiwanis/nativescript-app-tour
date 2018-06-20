export interface TourStop {
    view: { ios, android };
    title: string;
    titleTextSize?: number;
    titleTextColor?: string;
    description?: string;
    descriptionTextSize?: number;
    descriptionTextColor?: string;
    outerCircleColor?: string;
    innerCircleColor?: string;
    rippleColor?: string; // ios-only
    innerCircleRadius?: number;
    dismissable?: boolean;
}

export class AppTour {
    nativeTour;

    defaults: TourStop = {
        view: null,
        title: 'title',
        titleTextSize: 25,
        titleTextColor: 'white',
        description: 'description',
        descriptionTextSize: 20,
        descriptionTextColor: 'white',
        outerCircleColor: 'black',
        innerCircleColor: 'white',
        rippleColor: 'white', // ios-only
        innerCircleRadius: 50,
        dismissable: false
    };

    constructor(public stops: TourStop[]) {
        this.reset();
        this.buildNativeTour(stops);
    }

    updateStops(stops: TourStop[]) {
        this.stops = stops;
        this.reset();
        this.buildNativeTour(stops);
    }

    buildNativeTour(stops: TourStop[]) {}

    show() {}

    reset() {}
}


