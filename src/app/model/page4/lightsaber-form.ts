import { Catagory } from "../shared/catagory"
import { Trait } from "../shared/trait"

class LightsaberFormTrait extends Trait {
}

export const ShiiCho = new LightsaberFormTrait('Shii Cho', -6)
export const Makashi = new LightsaberFormTrait('Makashi', -10)
export const Soresu = new LightsaberFormTrait('Soresu', -6)
export const Ataru = new LightsaberFormTrait('Ataru', -6)
export const Shien = new LightsaberFormTrait('Shien', -6)
export const DjemSo = new LightsaberFormTrait('Djem So', -6)
export const Niman = new LightsaberFormTrait('Niman', -6)
export const Juyo = new LightsaberFormTrait('Juyo', -6)
export const Vaapad = new LightsaberFormTrait('Vaapad', -6)

export const LightsaberForm = new Catagory({
  label:'Lightsaber Form',
  min: 1,
  max: null,
  choices: [
    ShiiCho,
    Makashi,
    Soresu,
    Ataru,
    Shien,
    DjemSo,
    Niman,
    Juyo,
    Vaapad,
  ],
})
