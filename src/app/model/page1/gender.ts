import { Catagory } from "../shared/catagory"
import { Trait } from "../shared/trait"

class GenderTrait extends Trait {
  constructor(label:string){
    super(label, 0)
  }
}

export const Male = new GenderTrait('Male')
export const Female = new GenderTrait('Female')

export const Gender = new Catagory({
  label: 'Gender',
  min: 1,
  max: 1,
  choices: [
    Male,
    Female,
  ],
})
