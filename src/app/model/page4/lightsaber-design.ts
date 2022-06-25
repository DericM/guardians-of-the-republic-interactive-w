import { Catagory } from "../shared/catagory"
import { Trait } from "../shared/trait"

class LightsaberDesignTrait extends Trait {
}

export const Standard = new LightsaberDesignTrait('Standard', 0)
export const Curved = new LightsaberDesignTrait('Curved', 0)
export const Shoto = new LightsaberDesignTrait('Shoto', 0)
export const DoubleBladed = new LightsaberDesignTrait('Double Bladed', -2)
export const Pike = new LightsaberDesignTrait('Pike', -2)
export const Other = new LightsaberDesignTrait('Other', -5)

export const LightsaberDesign = new Catagory({
  label:'Lightsaber Design',
  min: 1,
  max: 1,
  choices: [
    Standard,
    Curved,
    Shoto,
    DoubleBladed,
    Pike,
    Other,
  ],
})
