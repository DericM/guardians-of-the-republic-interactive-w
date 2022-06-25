import { Catagory } from "../shared/catagory"
import { Trait } from "../shared/trait"

class ViewTrait extends Trait {
}

export const Typical = new ViewTrait('Typical', 0)
export const CodeDoctrinaire = new ViewTrait('Code Doctrinaire', 10)
export const LivingForce = new ViewTrait('Living Force', -2)
export const UnifyingForce = new ViewTrait('Unifying Force', -2)
export const OtherHeterodoxy = new ViewTrait('Other Heterodoxy', -10)
export const MajorHeterodoxy = new ViewTrait('Major Heterodoxy', -15)

export const View = new Catagory({
  label:'View',
  min: 1,
  max: 1,
  choices: [
    Typical,
    CodeDoctrinaire,
    LivingForce,
    UnifyingForce,
    OtherHeterodoxy,
    MajorHeterodoxy,
  ],
})
