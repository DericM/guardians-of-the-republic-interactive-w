import { Catagory } from "../shared/catagory"
import { Trait } from "../shared/trait"

class RankTrait extends Trait {
}

export const Padawan = new RankTrait('Padawan', 245)
export const Knight = new RankTrait('Knight', 280)
export const Master = new RankTrait('Master', 275)

export const Rank = new Catagory({
  label: 'Rank',
  min: 1,
  max: 1,
  choices: [
    Padawan,
    Knight,
    Master,
  ],
})
