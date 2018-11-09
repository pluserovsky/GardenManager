import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule,MatIconModule, MatListModule, MatGridListModule,MatSidenavModule,
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
    MatIconModule],
})
export class CustomMaterialModule { }
