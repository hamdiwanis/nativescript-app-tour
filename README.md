<h1 align="center">
     NativeScript App Tour<br/><br/>
<img src="https://raw.githubusercontent.com/KeepSafe/TapTargetView/master/.github/video.gif" width="280" height="498" />
<img src="https://github.com/aromajoin/material-showcase-ios/blob/master/art/material-showcase.gif" width="280" height="498" />
</h1>

> Note: This Plugin based on [MaterialShowcase for IOS](https://github.com/hamdiwanis/material-showcase-ios) and [TapTargetView for Android](https://github.com/KeepSafe/TapTargetView) .

## Installation
For NS7+:

```bash
tns plugin add nativescript-app-tour
```

For older NS versions:

```bash
tns plugin add nativescript-app-tour@2.0.2
```

### Usage
```html
<Label id="feat1" text="Feature 1"></Label>
<Label id="feat2" text="Feature 2"></Label>
<Button text="start" tap="{{ startTour }}"></Button>
```

```
startTour(){

    const stops: TourStop[] = [
        {
            view: this.page.getViewById("feat1"),
            title: 'Feature 1',
            description: "Feature 1 Description",
            dismissable: true
        },
        {
            view: this.page.getViewById("feat2"),
            title: 'Feature 2',
            description: 'Feature 2 Description',
            outerCircleColor: 'orange',
            rippleColor: 'black'
        }
    ];

    const handlers: TourEvents = {
        finish() {
            console.log('Tour finished');
        },
        onStep(lastStopIndex) {
            console.log('User stepped', lastStopIndex);
        },
        onCancel(lastStopIndex) {
            console.log('User cancelled', lastStopIndex);
        }
    }

    this.tour = new AppTour(stops, handlers);
    this.tour.show();
}
```

see the demo project for more info.

## Angular
also in angular you can get a refrence to the target view using ```@ViewChild``` decorator as next
```html
<Label #feat1 text="Feature 1"></Label>
<Label #feat2 text="Feature 2"></Label>
<Button text="start" tap="{{ startTour }}"></Button>
```

```
@ViewChild('feat1') feat1: ElementRef;
@ViewChild('feat2') feat2: ElementRef;

startTour(){

    const stops: TourStop[] = [
        {
            view: this.feat1.nativeElement,
            title: 'Feature 1',
            description: "Feature 1 Description",
            dismissable: true
        },
        {
            view: this.feat2.nativeElement,
            title: 'Feature 2',
            description: 'Feature 2 Description',
            outerCircleColor: 'orange',
            rippleColor: 'black'
        }
    ];

    const handlers: TourEvents = {
        finish() {
            console.log('Tour finished');
        },
        onStep(lastStopIndex) {
            console.log('User stepped', lastStopIndex);
        },
        onCancel(lastStopIndex) {
            console.log('User cancelled', lastStopIndex);
        }
    }

    this.tour = new AppTour(stops, handlers);
    this.tour.show();
}
```

## API

## TourStop
|Param| Description | type | default |
|---|---|---|---|
| view (required) | nativescript view ref | View | none |
| title | stop title | string | title |
| titleTextSize| title Text Size | number| 25|
| titleTextColor| title Text Color| string| white|
| description| stop description | string| description|
| descriptionTextSize| description Text Size| number| 20|
| descriptionTextColor| description Text Color| string| white|
| outerCircleOpacity| outer Circle background opacity| number| 0.96|
| outerCircleColor| outer Circle background Color | string| black|
| innerCircleColor| circle around target view background Color | string| white|
| rippleColor (ios only)| target Circle ripple Color| string| white|
| innerCircleRadius|circle around target view raduis| number| 50|
| dismissable| can the tour canceled by taping outside of target view | boolean| false|

## AppTour
|Method| Description |
|---|---|
|constructor | AppTour(stops) |
|show() | start the tour|
|reset()| reset the tour to play it again|

## Tour Events

This plugin has 3 events,
finish(): void => triggered once the tour finishes
onStep(lastStepIndex): void => triggered once per step when target is tapped
onCancel(lastStepIndex): void => triggered once when user dismisses the tour by tapping outside in a dismissable tour

## Defaults
> Note: If you use the same configs (colors, sizes,..etc) in all stops customize the defaults instead using AppTour defaults property which is basicly a TourStop :+1: .

## Next
- [x] add events.
- [ ] add more options to TourStop.

## Contribute
if you want to help improve the plugin you can consider it yours and make as PRs as you want :)

## Get Help
Please, use [github issues](https://github.com/hamdiwanis/nativescript-app-tour/issues) strictly for [reporting bugs](CONTRIBUTING.md#reporting-bugs) or [requesting features](CONTRIBUTING.md#requesting-new-features).

## Contact
Twitter: [hamdiwanis](https://twitter.com/hamdiwanis)  \
Email: hamdiwanis@hotmail.com
