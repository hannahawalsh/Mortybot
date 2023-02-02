import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { timer, Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class OpenapiService {

  constructor(private httpClient: HttpClient) { }

  public key: String = "<paste your key here>";

  public prompt: String = "I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with \"Unknown\".\n\nQ: What is human life expectancy in the United States?\nA: Human life expectancy in the United States is 78 years.\n\nQ: Who was president of the United States in 1955?\nA: Dwight D. Eisenhower was president of the United States in 1955.\n\nQ: Which party did he belong to?\nA: He belonged to the Republican Party.\n\nQ: What is the square root of banana?\nA: Unknown\n\nQ: How does a telescope work?\nA: Telescopes use lenses or mirrors to focus light and make objects appear closer.\n\nQ: Where were the 1992 Olympics held?\nA: The 1992 Olympics were held in Barcelona, Spain.\n\nQ: How many squigs are in a bonk?\nA: Unknown\n";

  addQuestionToPrompt(question) {
    this.prompt += "\nQ: " + question + "\nA:"
  }

  addAnswerToPrompt(answer) {
    this.prompt += answer + "\n";
  }

  getCompletion(question): Observable<Object> {
    let body = {
      "model": "text-davinci-003",
      "prompt": this.prompt,
      "temperature": 0,
      "max_tokens": 100,
      "top_p": 1,
      "frequency_penalty": 0.0,
      "presence_penalty": 0.0,
      "stop": ["\n"]
    };

    const httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + this.key
      })
    };

    return this.httpClient.post<Object>("https://api.openai.com/v1/completions", body, httpOptions);
  }
}
