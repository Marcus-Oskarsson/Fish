export function game() {}

export function player() {
  let xp = 0
  let lvl = 1
  function addExperience(experience) {
    xp += experience
  }
  function calcNewLevel() {
    const newLvl = xp / lvl ** 2
    lvl = newLvl >= 1 ? newLvl : 1
  }

  return {}
}
