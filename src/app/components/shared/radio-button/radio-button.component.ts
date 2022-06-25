import { Component, Input, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { Catagory } from 'src/app/model/shared/catagory'
import { Trait } from 'src/app/model/shared/trait'

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {
  @Input() form!:FormGroup
  @Input() catagory!:Catagory
  @Input() trait!:Trait

  constructor() { }

  ngOnInit(): void {
  }

}
