import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MenuComponent } from './menu/menu.component';
import { StktakingComponent } from './stktaking/stktaking.component';


@NgModule({
  declarations: [MainComponent, MenuComponent, StktakingComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    NgbModule,
    FormsModule,
    MatIconModule
  ]
})
export class MainModule { }
