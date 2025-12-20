import {
  Component,
  inject,
  NO_ERRORS_SCHEMA,
  OnInit,
  AfterViewInit,
} from "@angular/core";
import {
  NativeScriptCommonModule,
  NativeScriptRouterModule,
  PageRouterOutlet,
  RouterExtensions,
} from "@nativescript/angular";
import { SplitViewState } from "./split-view.state";

@Component({
  selector: "ns-split-view-demo",
  templateUrl: "./split-view-demo.component.html",
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    PageRouterOutlet,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SplitViewDemoComponent {
  router = inject(RouterExtensions);
  splitViewState = inject(SplitViewState);

  constructor() {
    this.router.navigate(
      [
        "/",
        {
          outlets: {
            primary: ["primary"],
            secondary: ["secondary"],
            supplementary: ["supplementary"],
            inspector: ["inspector"],
          },
        },
      ],
      { animated: false }
    );
  }
}
