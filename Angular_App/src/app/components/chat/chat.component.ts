import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OpenapiService } from 'src/app/services/openapi.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @Output() foundMatches = new EventEmitter<any>();
  public answer$: any;
  public answer: any;

  chats: any[] = [
    {
      status: 'primary',
      title: 'Mortybot',
      messages: [
        {
          text: "Hi! My name is Mortybot. I'm an AI here to assist you with your application. How can I help?",
          date: new Date(),
          reply: false,
          user: {
            name: 'Mortybot',
            avatar: 'assets/bottransparent.png',
          },
        },
      ],
    },
  ];

  private conversation: ConversationState;

  constructor(private aiService: OpenapiService) { }

  ngOnInit() {
    this.conversation = ConversationState.WAITFORQUESTION;
    document.body.classList.add('nb-theme-default');
  }

  handleUserMessage(messages, event) {
    this.sendUserMessage(messages, event.message);

    if (this.conversation === ConversationState.WAITFORQUESTION) {
      this.conversation = ConversationState.WAITFORANSWER;
      this.aiService.addQuestionToPrompt(event.message);
      this.answer$ = this.aiService.getCompletion(event.message);
      this.answer$.subscribe(message => {
        let answerText = message.choices[0].text.trim();
        this.sendBotMessage(messages, answerText);
        this.aiService.addAnswerToPrompt(answerText);
        this.conversation = ConversationState.WAITFORQUESTION;
      });
    }
  }

  sendUserMessage(messages, text) {
    messages.push({
      text: text,
      date: new Date(),
      reply: true,
      user: {
        name: 'User',
        avatar: 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/robot-face.png',
      },
    });
  }
  sendBotMessage(messages, text) {
    messages.push({
      text: text,
      date: new Date(),
      reply: false,
      user: {
        name: 'Mortybot',
        avatar: 'assets/bottransparent.png',
      },
    });
  }
}

enum ConversationState {
  GREETING,
  WAITFORQUESTION,
  WAITFORANSWER
}
