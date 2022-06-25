import { Catagory } from "../shared/catagory"
import { Trait } from "../shared/trait"

class AdvancedForcePowerTrait extends Trait {
}

export const AnimalBonding = new AdvancedForcePowerTrait('Animal Bonding', -10)
export const ForceBody = new AdvancedForcePowerTrait('Force Body', -10)
export const ForceWhirlwind = new AdvancedForcePowerTrait('Force Whirlwind', -10)
export const ForceRepulse = new AdvancedForcePowerTrait('Force Repulse', -12)
export const ForceRevitalize = new AdvancedForcePowerTrait('Force Revitalize', -12)
export const BattlePrecognition = new AdvancedForcePowerTrait('Battle Precognition', -14)
export const ForceStasis = new AdvancedForcePowerTrait('Force Stasis', -15)
export const Shatterpoint = new AdvancedForcePowerTrait('Shatterpoint', -16)
export const ForceCloak = new AdvancedForcePowerTrait('Force Cloak', -16)
export const ForceLight = new AdvancedForcePowerTrait('Force Light', -20)
export const ForceLightning = new AdvancedForcePowerTrait('Force Lightning', -20)
export const BattleMeditation = new AdvancedForcePowerTrait('Battle Meditation', -20)
export const ForceImmunity = new AdvancedForcePowerTrait('Force Immunity', -25)
export const AdvancedTutaminis = new AdvancedForcePowerTrait('Advanced Tutaminis', -25)
export const SeverForce = new AdvancedForcePowerTrait('Sever Force', -25)

export const AdvancedForcePowers = new Catagory({
  label:'Advanced Force Powers',
  min: null,
  max: 0,
  choices: [
    AnimalBonding,
    ForceBody,
    ForceWhirlwind,
    ForceRepulse,
    ForceRevitalize,
    BattlePrecognition,
    ForceStasis,
    Shatterpoint,
    ForceCloak,
    ForceLight,
    ForceLightning,
    BattleMeditation,
    ForceImmunity,
    AdvancedTutaminis,
    SeverForce,
  ],
})

