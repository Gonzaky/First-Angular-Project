import {Component, OnInit, Input} from '@angular/core';
import {Emoji} from "../../Task";
import {EmojiGeneratorService} from "../../services/emoji-generator.service";

@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.css']
})
export class EmojiComponent implements OnInit {

  /*@Input() emoji!: Emoji[]*/

  emojis: Emoji[] = [];
  random: any = [];


  constructor(private emojiGeneratorService: EmojiGeneratorService) {


  }

  ngOnInit(): void {}

  public generateEmoji(): void {
    this.emojiGeneratorService.getEmoji().subscribe({next:data => {
       /* console.log('agora sim', data);*/
        this.random = data[0].text[Math.floor((Math.random()*data[0].text.length))];
        /*console.log('log do random', this.random);*/

      }})

  }



}
