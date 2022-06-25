import { Catagory } from "../shared/catagory"
import { Trait } from "../shared/trait"

class ComplicationTrait extends Trait {
  readonly requirements:Trait[]
  constructor(label:string, points:number, requirements?:Trait[]){
    super(label, points)
    this.requirements = requirements ? requirements : []
  }
}

export const Arrogance = new ComplicationTrait('Arrogance', 10)
export const Impatience = new ComplicationTrait('Impatience', 8)
export const Phobia = new ComplicationTrait('Phobia', 8)
export const Greed = new ComplicationTrait('Greed', 8)
export const Wrath = new ComplicationTrait('Wrath', 8)
export const Attachment = new ComplicationTrait('Attachment' , 10)
export const Relationship = new ComplicationTrait('Relationship', -3, [Attachment])
export const Defeat = new ComplicationTrait('Defeat', 6)
export const BadInfluence = new ComplicationTrait('Bad Influence', 8)
export const Weak = new ComplicationTrait('Weak', 15)
export const Sickly = new ComplicationTrait('Sickly', 15)
export const Amputee = new ComplicationTrait('Amputee', 15)
export const Senseless = new ComplicationTrait('Senseless', 15)
export const Rebel = new ComplicationTrait('Rebel', 6)
export const Tempestuous = new ComplicationTrait('Tempestuous', 13, [Arrogance, Impatience, Phobia, Greed, Wrath, Attachment])
export const DeadlySecret = new ComplicationTrait('Deadly Secret', 22)

export const Complications = new Catagory({
  label:'Complications',
  min: null,
  max: 5,
  choices: [
    Arrogance,
    Impatience,
    Phobia,
    Greed,
    Wrath,
    Attachment,
    Relationship,
    Defeat,
    BadInfluence,
    Weak,
    Sickly,
    Amputee,
    Senseless,
    Rebel,
    Tempestuous,
    DeadlySecret,
  ],
})
