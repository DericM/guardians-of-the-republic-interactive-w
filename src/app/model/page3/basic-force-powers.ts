import { Catagory } from "../shared/catagory"
import { Trait } from "../shared/trait"

class BasicForcePowerTrait extends Trait {
}

export const Telekinesis = new BasicForcePowerTrait('Telekinesis', -10)
export const ForceBarrier = new BasicForcePowerTrait('Force Barrier', -10)
export const ForceSense = new BasicForcePowerTrait('Force Sense', -10)
export const ForceControl = new BasicForcePowerTrait('Force Control', -10)
export const ForceConfusion = new BasicForcePowerTrait('Force Confusion', -10)
export const ForceHealing = new BasicForcePowerTrait('Force Healing', -10)
export const ForceEmpathy = new BasicForcePowerTrait('Force Empathy', -10)
export const MentalShields = new BasicForcePowerTrait('Mental Shields', -10)
export const Farsight = new BasicForcePowerTrait('Farsight', -10)

export const BasicForcePowers = new Catagory({
  label:'Basic Force Powers',
  min: null,
  max: null,
  choices: [
    Telekinesis,
    ForceBarrier,
    ForceSense,
    ForceControl,
    ForceConfusion,
    ForceHealing,
    ForceEmpathy,
    MentalShields,
    Farsight,
  ],
})
