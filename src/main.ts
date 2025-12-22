import {
  bootstrapApplication,
  provideNativeScriptHttpClient,
  provideNativeScriptRouter,
  runNativeScriptAngularApp,
} from "@nativescript/angular";
import { Utils, SplitView } from "@nativescript/core";
import { withInterceptorsFromDi } from "@angular/common/http";
import { provideZonelessChangeDetection } from "@angular/core";
import { SPLIT_VIEW_ROUTES } from "./split-view-demo/split-view.routes";
import { SplitViewDemoComponent } from "./split-view-demo/split-view-demo.component";
import "./global-setup";

runNativeScriptAngularApp({
  appModuleBootstrap: () => {
    // Set the split style before bootstrapping - 'triple' is needed for primary/supplementary/secondary layout
    // Note: Must be set inside the bootstrap callback for HMR compatibility
    SplitView.SplitStyle = "triple";
    
    if (__APPLE__) {
      Utils.ios.setWindowBackgroundColor("red");
    }
    return bootstrapApplication(SplitViewDemoComponent, {
      providers: [
        provideNativeScriptHttpClient(withInterceptorsFromDi()),
        provideNativeScriptRouter(SPLIT_VIEW_ROUTES),
        provideZonelessChangeDetection(),
      ],
    });
  },
});
