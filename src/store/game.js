import {
  faBiohazard,
  faBrain,
  faGem,
  faHandHoldingUsd,
  faHatWizard,
  faHeart,
  faHouseDamage,
  faJedi,
  faLeaf,
  faMask,
  faMedal,
  faPeace,
  faPooStorm,
  faPray,
  faRadiation,
  faSave,
  faSpaceShuttle,
  faSkullCrossbones,
  faUserAstronaut
} from '@fortawesome/free-solid-svg-icons'

export const state = () => ({
  counter: 0,
  running: false,
  lifes: 3,
  icons: [
    { icon: faBrain, desc: 'brain' },
    { icon: faGem, desc: 'diamond' },
    { icon: faMask, desc: 'double-faced' },
    { icon: faLeaf, desc: 'eco' },
    { icon: faSkullCrossbones, desc: 'evil' },
    { icon: faPeace, desc: 'good' },
    { icon: faSpaceShuttle, desc: 'high tech' },
    { icon: faUserAstronaut, desc: 'highly skilled' },
    { icon: faHouseDamage, desc: 'home damage' },
    { icon: faJedi, desc: 'jedi' },
    { icon: faSave, desc: 'legacy' },
    { icon: faHeart, desc: 'love' },
    { icon: faHandHoldingUsd, desc: 'money' },
    { icon: faRadiation, desc: 'poluter' },
    { icon: faPooStorm, desc: 'shit storm' },
    { icon: faMedal, desc: 'recognition' },
    { icon: faPray, desc: 'suffer' },
    { icon: faBiohazard, desc: 'toxic' },
    { icon: faHatWizard, desc: 'wizard' }
  ],
  company: [
    faGem,
    faHeart,
    faMedal,
    faHandHoldingUsd,
    faPeace,
    faSpaceShuttle,
    faLeaf,
    faPooStorm,
    faRadiation,
    faSkullCrossbones
  ],
  team: [
    faGem,
    faHeart,
    faMedal,
    faHandHoldingUsd,
    faHatWizard,
    faUserAstronaut,
    faJedi,
    faPooStorm,
    faMask,
    faBiohazard
  ],
  job: [
    faGem,
    faHeart,
    faMedal,
    faHandHoldingUsd,
    faBrain,
    faUserAstronaut,
    faSave,
    faPooStorm,
    faPray,
    faHouseDamage
  ],
  prizes: [
    {
      combination: [faGem, faGem, faGem],
      prize: "1'000'000",
      note: 'WIN WIN WIN'
    },
    {
      combination: [faHeart, faHeart, faHeart],
      prize: "729'000",
      note: 'WIN WIN WIN'
    },
    {
      combination: [faMedal, faMedal, faMedal],
      prize: "512'000",
      note: 'WIN WIN'
    },
    {
      combination: [faHandHoldingUsd, faHandHoldingUsd, faHandHoldingUsd],
      prize: "512'000",
      note: 'WIN'
    },
    {
      combination: [faPeace, faHatWizard, faBrain],
      prize: "512'000",
      note: 'WIN WIN'
    },
    {
      combination: [faSpaceShuttle, faUserAstronaut, faUserAstronaut],
      prize: "512'000",
      note: 'WIN WIN'
    },
    {
      combination: [faLeaf, faJedi, faBrain],
      prize: "512'000",
      note: 'WIN WIN'
    }
  ]
})

export const getters = {
  getRunning(state) {
    return state.running
  },
  getLifes(state) {
    return state.lifes
  },
  getIcons(state) {
    return state.icons
  },
  getCompany(state) {
    return state.company
  },
  getTeam(state) {
    return state.team
  },
  getJob(state) {
    return state.job
  },
  getPrizes(state) {
    return state.prizes
  }
}

export const mutations = {
  increment(state) {
    state.counter++
  },
  decrLife(state) {
    state.lifes--
  },
  setLifes(state, n) {
    state.lifes = n
  },
  setRunning(state, b) {
    state.running = b
  }
}
