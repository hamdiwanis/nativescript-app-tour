import { Observable } from 'tns-core-modules/data/observable';
import { AppTour, TourStop } from 'nativescript-app-tour';
import { Page } from 'tns-core-modules/ui/page';

export class MainViewModel extends Observable {
  tour;
  constructor(private page: Page) {
    super();
  }

  startTour() {
    if(!this.tour) {
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
            },
            {
                view: this.page.getViewById("feat3"),
                title: 'Feature 3',
                description: 'Feature 3 Description',
                outerCircleColor: 'red',
                rippleColor: 'black'
            },
            {
                view: this.page.getViewById("feat4"),
                title: 'Feature 4',
                description: 'Feature 4 Description',
                outerCircleColor: 'gold',
                rippleColor: 'black'
            },
            {
                view: this.page.getViewById("feat5"),
                title: 'Feature 5',
                description: 'Feature 5 Description',
                outerCircleColor: 'blue',
                rippleColor: 'black'
            }
        ];
        this.tour = new AppTour(stops);
    }

    this.tour.reset();
    this.tour.show();
  }
}
