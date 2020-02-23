import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-proprietarios',
  templateUrl: './edit-proprietarios.component.html',
  styleUrls: ['./edit-proprietarios.component.css']
})
export class EditProprietariosComponent implements OnInit {
  id: any;
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(
      ( params: any) => {
        this.id = params['id'];
      }
    );
  }

}
