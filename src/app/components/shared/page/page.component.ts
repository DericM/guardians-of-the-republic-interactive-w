import { Component, Directive, OnInit } from "@angular/core"
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms"
import { Catagory } from "src/app/model/shared/catagory"
import { Rank } from 'src/app/model/page1/rank'
import { Trait } from "src/app/model/shared/trait"

interface Checkbox {
  [label: string]: boolean
}
interface Radio {
  [label: string]: string
}

@Directive()
export abstract class PageComponent implements OnInit {

  abstract catagories():Catagory[]
  public form: FormGroup
  abstract pageId: string

  constructor(){

    let formInit:any = {}

    for(let catagory of this.catagories()){
      formInit[catagory.id] = new FormControl('')
    }
    this.form = new FormGroup(formInit)
  }

  createCheckboxControl(traits:Trait[]) {
    const controls = traits.map(trait => {
      return new FormControl(false)
    })
    return new FormArray(controls)
  }

  // defaultLanguageSelection() {
  //   let formValues = this.form.value
  //   console.log("defaultLanguageSelection", formValues.defaultLanguage)

  //   let i = 0
  //   for (let language of this.languages) {
  //     if (language == formValues.defaultLanguage) {
  //       let controlArray = <FormArray>this.myForm.controls["languages"]
  //       controlArray.controls[i].patchValue(true)
  //     }
  //     i++
  //   }
  // }

  ngOnInit(): void {




    this.form.valueChanges.subscribe(data => {
      for(let catagory of this.catagories()){
        if(data.hasOwnProperty(catagory.id) && data[catagory.id].length > 0){
          catagory.select(data[catagory.id])
        }
      }
    })

    for(let catagory of this.catagories()){
      console.log(catagory.id, catagory.getSelectedTraits())

      let traits = catagory.getSelectedTraits()

      let patch:any
      if(catagory.max === 1){
        patch ={
          [catagory.id]: traits.map(trait => {return trait.id}).find(id=>id!==undefined)
        }
        this.form.patchValue(patch)
      }
      else{
        let formArray = <FormArray>this.form.controls[catagory.id]

        formArray = this.createCheckboxControl(traits)

        for(let trait of traits){

        }
        formArray.patchValue(['attractive'])
        console.log('formArray', formArray)

        // let traits_assoc_arr:any = {}

        // formArray

        // for(let trait of traits){
        //   traits_assoc_arr[trait.id] = true
        // }
        // patch ={
        //   [catagory.id]: traits_assoc_arr
        // }
      }


      //console.log('patch', patch)

      //this.form.patchValue(patch)


      // if(catagory.max === 1){
      //   for(let trait of traits){
      //     let radio:Radio = {}
      //     radio[catagory.id] = trait.id
      //     this.form.patchValue(radio)
      //     console.log()
      //   }
      // }
      // else{

      //   for(let trait of traits){
      //     let checkbox:Checkbox = {}
      //     checkbox[trait.id] = true
      //     this.form.patchValue(checkbox)
      //   }
      // }
    }


  }

}
