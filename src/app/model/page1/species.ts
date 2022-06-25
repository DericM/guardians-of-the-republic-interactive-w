import { Catagory } from "../shared/catagory"
import { Trait } from "../shared/trait"

class SpeciesTrait extends Trait {
}

export const Human = new SpeciesTrait('Human', 0)
export const NearHuman = new SpeciesTrait('Near Human', -2)
export const Mammalian = new SpeciesTrait('Mammalian', -4)
export const Reptilian = new SpeciesTrait('Reptilian', -4)
export const Aquatic = new SpeciesTrait('Aquatic', -4)
export const Other = new SpeciesTrait('Other', -10)
export const Twilek = new SpeciesTrait('Twilek', -2)
export const Togruta = new SpeciesTrait('Togruta', -4)
export const Falleen = new SpeciesTrait('Falleen', -4)
export const Duros = new SpeciesTrait('Duros', -4)
export const Fosh = new SpeciesTrait('Fosh', -10)
export const Miraluka = new SpeciesTrait('Miraluka', -2)
export const Ithorian = new SpeciesTrait('Ithorian', -4)
export const Sluissi = new SpeciesTrait('Sluissi', -4)
export const Aqualish = new SpeciesTrait('Aqualish', -4)
export const Chagrian = new SpeciesTrait('Chagrian', -4)
export const Sullustan = new SpeciesTrait('Sullustan', -2)
export const Devaronian = new SpeciesTrait('Devaronian', -4)
export const Nikto = new SpeciesTrait('Nikto', -4)
export const Selkath = new SpeciesTrait('Selkath', -4)
export const Jawa = new SpeciesTrait('Jawa', -10)

export const Species = new Catagory({
  label:'Species',
  min: 1,
  max: 1,
  choices: [
    Human,
    NearHuman,
    Mammalian,
    Reptilian,
    Aquatic,
    Other,
    Twilek,
    Togruta,
    Falleen,
    Duros,
    Fosh,
    Miraluka,
    Ithorian,
    Sluissi,
    Aqualish,
    Chagrian,
    Sullustan,
    Devaronian,
    Nikto,
    Selkath,
    Jawa,
  ],
})
