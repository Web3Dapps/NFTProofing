import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; // import router from angular router

@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.scss']
})
export class NftComponent implements OnInit {

  constructor( private route:Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe( (param.) => {
      let data = params.by;
    })
  }

}
