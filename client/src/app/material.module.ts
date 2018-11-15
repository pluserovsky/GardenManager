import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule,MatIconModule, MatListModule, MatGridListModule,MatSidenavModule,
  MatSelectModule,MatSlideToggleModule,MatTabsModule
} from '@angular/material';

@NgModule({
  imports: [CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatListModule,
    MatGridListModule,
    MatSidenavModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatIconModule],
  exports: [CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatListModule,
    MatGridListModule,
    MatSidenavModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatIconModule],
})
export class CustomMaterialModule { }
