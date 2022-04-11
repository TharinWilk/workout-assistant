export const state = () => ({
  exercise: null,
  additionalFilters: [
    'upperBody',
    'lowerBody',
    'core',
    'push',
    'pull',
    'calithetics',
    'treadmill',
    'stationaryBike',
    'bike',
    'dumbbells',
    'barbells',
    'kettlebells',
    'weightMachines',
    'cableMachine',
    'fullRack',
    'halfRack',
    'agilityLadder',
    'stabilityBall',
    'pool',
    'eliptical',
    'arcTrainier',
    'stairMachine',
    'ladderMachine',
    'rowingMachine',
    'armCycle'
  ],
  workoutFilters: {
    type: null,
    fitness: null,
    intensity: null,
    goal: null
  },
  workout: {
    agility: null,
    balance: null,
    cardio: null,
    mobility: null,
    power: null,
    reistance: null
  }
})

export const mutations = {
  changeExercise (state, payload) {
    state.exercise = payload
  },
  changeWorkoutTypes (state, payload) {
    state.workoutFilters.type = payload
  },
  changeWorkoutFitnessLevel (state, payload) {
    state.workoutFilters.fitness = payload
  },
  changeWorkoutIntensity (state, payload) {
    state.workoutFilters.intensity = payload
  },
  changeWorkoutGoal (state, payload) {
    state.workoutFilters.goal = payload
  },
  changeWorkoutAdditionalFilters (state, payload) {
    if (state.additionalFilters.includes(payload)) {
      const index = state.additionalFilters.indexOf(payload)
      if (index > -1) {
        state.additionalFilters.splice(index, 1)
      }
    } else {
      state.additionalFilters.push(payload)
    }
  },
  changeWorkoutPlan (state, payload) {
    if (payload.tags.includes('Agility')) {
      state.workout.agility = payload.name
    } else if (payload.tags.includes('Balance')) {
      state.workout.balance = payload.name
    } else if (payload.tags.includes('Cardio')) {
      state.workout.cardio = payload.name
    } else if (payload.tags.includes('Mobility')) {
      state.workout.mobility = payload.name
    } else if (payload.tags.includes('Power')) {
      state.workout.power = payload.name
    } else {
      state.workout.resistance = payload.name
    }
  }
}

export const actions = {
  selectedExercise (context, payload) {
    context.commit('changeExercise', payload)
  },
  selectedWorkoutTypes (context, payload) {
    context.commit('changeWorkoutTypes', payload)
  },
  selectedWorkoutFitnessLevel (context, payload) {
    context.commit('changeWorkoutFitnessLevel', payload)
  },
  selectedWorkoutIntensity (context, payload) {
    context.commit('changeWorkoutIntensity', payload)
  },
  selectedWorkoutGoal (context, payload) {
    context.commit('changeWorkoutGoal', payload)
  },
  selectedWorkoutAdditionalFilters (context, payload) {
    context.commit('changeWorkoutAdditionalFilters', payload)
  },
  updateWorkoutPlan (context, payload) {
    context.commit('changeWorkoutPlan', payload)
  }
}

export const getters = {
  cardio: state => state.workout.cardio,
  intensity: state => state.workoutFilters.intensity,
  resistance: state => state.workout.resistance
}
