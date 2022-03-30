import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  helpers:string= 'with Backup from ༼ つ ◕_◕ ༽つ Mafalda'

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
showFooter(route: string){

    return this.router.url !== route; // gives true of false value
  // if argument we give example showFooter('/') it's going to do:
  //  if "this.router.url" that is the current url '/'  is === to argument we provided '/' from showFooter('/') return true
  // i.e.  if '/' === '/about' return false
}
}
