import { NgModule } from '@angular/core';

import { NumPipe } from './num.pipe';
import { TokPipe } from './tok.pipe';

@NgModule({
  imports: [
  ],
  declarations: [
    NumPipe,
    TokPipe
  ],
  exports:[
    NumPipe,
    TokPipe
  ]
})
export class PipesModule { }
