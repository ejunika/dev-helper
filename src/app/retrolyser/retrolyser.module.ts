import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkbenchComponent } from './components/workbench/workbench.component';
import { SharedModule } from '../shared/shared.module';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [WorkbenchComponent, TestComponent],
  imports: [CommonModule, SharedModule]
})
export class RetrolyserModule {}
