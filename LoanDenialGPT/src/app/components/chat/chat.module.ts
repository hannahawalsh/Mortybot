import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbChatModule} from '@nebular/theme';
import { ChatComponent } from './chat.component';

@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    NbChatModule
  ],
  exports: [
    ChatComponent
  ]
})
export class ChatModule { }
