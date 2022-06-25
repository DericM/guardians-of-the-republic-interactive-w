import { Catagory } from "../shared/catagory"
import { Trait } from "../shared/trait"

class LightsaberModsTrait extends Trait {
}

export const Concealed = new LightsaberModsTrait('Concealed', -3)
export const DualPhase = new LightsaberModsTrait('Dual Phase', -4)
export const DuelingLens = new LightsaberModsTrait('Dueling Lens', -2)
export const TrappedGrip = new LightsaberModsTrait('Trapped Grip', -4)
export const Waterproofed = new LightsaberModsTrait('Waterproofed', -4)

export const LightsaberMods = new Catagory({
  label:'Lightsaber Mods',
  min: null,
  max: null,
  choices: [
    Concealed,
    DualPhase,
    DuelingLens,
    TrappedGrip,
    Waterproofed,
  ],
})
