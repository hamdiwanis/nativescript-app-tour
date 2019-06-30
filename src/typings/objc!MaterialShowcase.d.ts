
declare const enum BackgroundTypeStyle {

	Circle = 0,

	Full = 1
}

declare class MaterialShowcase extends UIView {

	static alloc(): MaterialShowcase; // inherited from NSObject

	static appearance(): MaterialShowcase; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MaterialShowcase; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MaterialShowcase; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MaterialShowcase; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MaterialShowcase; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MaterialShowcase; // inherited from UIAppearance

	static new(): MaterialShowcase; // inherited from NSObject

	aniComeInDuration: number;

	aniGoOutDuration: number;

	aniRippleAlpha: number;

	aniRippleColor: UIColor;

	aniRippleScale: number;

	backgroundPromptColor: UIColor;

	backgroundPromptColorAlpha: number;

	backgroundViewType: BackgroundTypeStyle;

	delegate: MaterialShowcaseDelegate;

	isTapRecognizerForTargetView: boolean;

	primaryText: string;

	primaryTextAlignment: NSTextAlignment;

	primaryTextColor: UIColor;

	primaryTextFont: UIFont;

	primaryTextSize: number;

	secondaryText: string;

	secondaryTextAlignment: NSTextAlignment;

	secondaryTextColor: UIColor;

	secondaryTextFont: UIFont;

	secondaryTextSize: number;

	shouldSetTintColor: boolean;

	targetHolderColor: UIColor;

	targetHolderRadius: number;

	targetTintColor: UIColor;

	completeShowcaseWithAnimatedDidTapTarget(animated: boolean, didTapTarget: boolean): void;

	setTargetViewWithBarButtonItem(barButtonItem: UIBarButtonItem): void;

	setTargetViewWithTabBarItemIndex(tabBar: UITabBar, itemIndex: number): void;

	setTargetViewWithTableViewSectionRow(tableView: UITableView, section: number, row: number): void;

	setTargetViewWithView(view: UIView): void;

	showWithAnimatedCompletion(animated: boolean, handler: () => void): void;
}

interface MaterialShowcaseDelegate {

	showCaseDidDismissWithShowcaseDidTapTarget?(showcase: MaterialShowcase, didTapTarget: boolean): void;

	showCaseWillDismissWithShowcaseDidTapTarget?(showcase: MaterialShowcase, didTapTarget: boolean): void;
}
declare var MaterialShowcaseDelegate: {

	prototype: MaterialShowcaseDelegate;
};

declare class MaterialShowcaseInstructionView extends UIView {

	static alloc(): MaterialShowcaseInstructionView; // inherited from NSObject

	static appearance(): MaterialShowcaseInstructionView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MaterialShowcaseInstructionView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MaterialShowcaseInstructionView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): MaterialShowcaseInstructionView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MaterialShowcaseInstructionView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): MaterialShowcaseInstructionView; // inherited from UIAppearance

	static new(): MaterialShowcaseInstructionView; // inherited from NSObject
}

declare class MaterialShowcaseSequence extends NSObject {

	static alloc(): MaterialShowcaseSequence; // inherited from NSObject

	static new(): MaterialShowcaseSequence; // inherited from NSObject

	removeUserStateWithKey(key: string): void;

	setKeyWithKey(key: string): MaterialShowcaseSequence;

	showCaseWillDismis(): void;

	start(): void;

	temp(showcase: MaterialShowcase): MaterialShowcaseSequence;
}

declare var MaterialShowcaseVersionNumber: number;

declare var MaterialShowcaseVersionString: interop.Reference<number>;
