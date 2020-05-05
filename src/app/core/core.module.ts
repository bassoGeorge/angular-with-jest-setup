import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoggerService} from './services/logger.service';

@NgModule({
  declarations: [],
  providers: [LoggerService],
  imports: [CommonModule],
})
export class CoreModule {}
