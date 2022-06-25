import { Catagory } from "../shared/catagory"
import { Trait } from "../shared/trait"

class LightsaberColorTrait extends Trait {
}

export const Blue = new LightsaberColorTrait('Blue', 0)
export const Green = new LightsaberColorTrait('Green', 0)
export const Yellow = new LightsaberColorTrait('Yellow', -2)
export const White = new LightsaberColorTrait('White', -5)
export const Purple = new LightsaberColorTrait('Purple', -8)
export const Unconventional = new LightsaberColorTrait('Unconventional', -10)

export const LightsaberColor = new Catagory({
  label:'Lightsaber Color',
  min: 1,
  max: 1,
  choices: [
    Blue,
    Green,
    Yellow,
    White,
    Purple,
    Unconventional,
  ],
})
