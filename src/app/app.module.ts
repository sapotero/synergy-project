import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzIconModule} from "ng-zorro-antd/icon";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from "./app.routing.module";
import { FirstStageComponent } from './stages/first-stage/first-stage.component';
import { SecondStageComponent } from './stages/second-stage/second-stage.component';
import {NzTabsModule} from "ng-zorro-antd/tabs";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzCardModule} from "ng-zorro-antd/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzTypographyModule} from "ng-zorro-antd/typography";
import {NzSpaceModule} from "ng-zorro-antd/space";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {NzCommentModule} from "ng-zorro-antd/comment";
import {NzDescriptionsModule} from "ng-zorro-antd/descriptions";
import {NzBadgeModule} from "ng-zorro-antd/badge";
import {NzSelectModule} from "ng-zorro-antd/select";
import { ThirdStageComponent } from './stages/third-stage/third-stage.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstStageComponent,
    SecondStageComponent,
    ThirdStageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzIconModule,
    HttpClientModule,
    AppRoutingModule,
    NzTabsModule,
    NzGridModule,
    NzCardModule,
    ReactiveFormsModule,
    NzCheckboxModule,
    NzFormModule,
    NzInputModule,
    NzTypographyModule,
    NzSpaceModule,
    NzDividerModule,
    NzTableModule,
    NzAvatarModule,
    NzCommentModule,
    NzDescriptionsModule,
    NzBadgeModule,
    NzSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
