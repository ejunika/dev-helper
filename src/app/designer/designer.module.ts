import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './components/editor/editor.component';

@NgModule({
  declarations: [EditorComponent],
  imports: [
    CommonModule
  ],
  exports: [
    EditorComponent
  ]
})
export class DesignerModule { }
