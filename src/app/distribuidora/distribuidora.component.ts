import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-distribuidora',
  templateUrl: './distribuidora.component.html',
  styleUrls: ['./distribuidora.component.css']
})
export class DistribuidoraComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

}
