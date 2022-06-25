import { Component, forwardRef, Input } from '@angular/core'
import { FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms'
import { MatCheckboxChange } from '@angular/material/checkbox'
import { Catagory } from 'src/app/model/shared/catagory'
import { Trait } from 'src/app/model/shared/trait'

@Component({
  selector: 'app-checkbox',
  templateUrl:'./checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxComponent),
    multi: true
  }]
})
export class CheckboxComponent {
  @Input() form!:FormGroup
  @Input() catagory!:Catagory
  @Input() trait!:Trait

  onChange(traitId:string, controlName:string, event:MatCheckboxChange) {
    const formArray = <FormArray>this.form.controls[controlName]

    if(event.checked) {
      formArray.push(new FormControl(traitId))
    } else {
      let index = formArray.controls.findIndex(x => x.value == traitId)
      formArray.removeAt(index)
    }
    console.log('formArray', formArray)
  }

}
