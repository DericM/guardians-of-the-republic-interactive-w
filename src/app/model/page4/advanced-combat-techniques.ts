import { Catagory } from "../shared/catagory"
import { Trait } from "../shared/trait"

class AdvancedCombatTechniquesTrait extends Trait {
}

export const JarKai = new AdvancedCombatTechniquesTrait('JarKai', -12)
export const Sokan = new AdvancedCombatTechniquesTrait('Sokan', -6)
export const Trakata = new AdvancedCombatTechniquesTrait('Trakata', -15)
export const SwordAndGun = new AdvancedCombatTechniquesTrait('Sword and Gun', -10)
export const AdvancedTelekineticCombat = new AdvancedCombatTechniquesTrait('Advanced Telekinetic Combat', -25)
export const MountedCombat = new AdvancedCombatTechniquesTrait('Mounted Combat', -10)
export const SpecialistLightsaberCombat = new AdvancedCombatTechniquesTrait('Specialist Lightsaber Combat', -15)
export const Unorthodox = new AdvancedCombatTechniquesTrait('Unorthodox', -15)
export const FormPurism = new AdvancedCombatTechniquesTrait('Form Purism', -15)

export const AdvancedCombatTechniques = new Catagory({
  label:'Advanced Combat Techniques',
  min: null,
  max: null,
  choices: [
    JarKai,
    Sokan,
    Trakata,
    SwordAndGun,
    AdvancedTelekineticCombat,
    MountedCombat,
    SpecialistLightsaberCombat,
    Unorthodox,
    FormPurism,
  ],
})
