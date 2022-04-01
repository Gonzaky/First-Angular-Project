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
  random: string = '';
  emojiLog: Array<string> = [];
  previousEmoji: any = [];
  test: string ='';
  testLog : string[] = [];
  constructor(private emojiGeneratorService: EmojiGeneratorService) {


  }

  ngOnInit(): void {
  }

  public generateEmoji(): void {
    this.emojiGeneratorService.getEmoji().subscribe({
      next: data => {
        /* console.log('agora sim', data);*/
        this.random = data[0].text[Math.floor((Math.random() * data[0].text.length))];
        /*console.log('log do random', this.random);*/
        this.emojiLog.push(this.random)
        /*  console.log('array de emojis', this.emojiLog)*/
        for (let i = 0; i < this.emojiLog.length; i++) {
          this.previousEmoji = this.emojiLog[i - 1]
        }

      }
    })

  }

  public getTest() :void {
    this.emojiGeneratorService.getEmoji().subscribe((data) => {
      this.test = data[0].text[Math.floor((Math.random() * data[0].text.length))];
      this.testLog.push(this.test);
      console.log('testing this.test without {}',this.test)
      console.log('testing this.testLog without {}',this.testLog)

    } )
  }


  /*
  *  subscribe can have two syntax ex:
  *  this.emojiGeneratorService.getEmoji().subscribe( {
  * next: data => {
  *  data do stuff
  * }, error: err => { show errs}, complete: finisher => { do stuff ??}
  * } )
  * ------- // -----
  *
  *  the "sugar" way i think:                          next:                     error:      complete:
  *  this.emojiGeneratorService.getEmoji().subscribe( (data) => { return stuff},(error)=>{},(complete)=>{} )
  *
  *  */

}
