export const state = () => ({
  exercise: null,
  favorites: [2],
  additionalFilters: [
    'Upper Body',
    'Lower Body',
    'Core',
    'Push',
    'Pull',
    'Calithetics',
    'Treadmill',
    'Stationary Bike',
    'Bike',
    'Dumbbells',
    'Barbells',
    'Kettlebells',
    'Weight Machines',
    'Cable Machine',
    'Full Rack',
    'Half Rack',
    'Agility Ladder',
    'Stability Ball',
    'Pool',
    'Eliptical',
    'Arc Trainer',
    'Stair Machine',
    'Ladder Machine',
    'Rowing Machine',
    'Arm Cycle'
  ],
  workoutFilters: {
    type: null,
    fitness: null,
    intensity: null,
    goal: null
  },
  workout: {
    active: false,
    agility: null,
    balance: null,
    cardio: null,
    mobility: null,
    power: null,
    resistance: null
  },
  savedWorkouts: [
  ],
  username: null
})

export const mutations = {
  addWorkout (state, payload) {
    state.savedWorkouts.push(payload)
  },
  changeExercise (state, payload) {
    state.exercise = payload
  },
  changefavorites (state, payload) {
    state.favorites = payload
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
    state.workout.active = true
    payload.forEach((item) => {
      if (item.tags.includes('Agility')) {
        state.workout.agility = payload
      }
      if (item.tags.includes('Balance')) {
        state.workout.balance = payload
      }
      if (item.tags.includes('Cardio')) {
        state.workout.cardio = payload
      }
      if (item.tags.includes('Mobility')) {
        state.workout.mobility = payload
      }
      if (item.tags.includes('Resistance') || item.tags.includes('Power')) {
        state.workout.resistance = payload
      }
    })
  },
  changeUser (state, payload) {
    state.username = payload
  },
  resetWorkoutPlan (state) {
    state.workout.active = false
    state.workout.agility = null
    state.workout.balance = null
    state.workout.cardio = null
    state.workout.mobility = null
    state.workout.power = null
    state.workout.resistance = null
  }
}

export const actions = {
  addNewWorkout (context, payload) {
    context.commit('addWorkout', payload)
  },
  changeUsername (context, payload) {
    context.commit('changeUser', payload)
  },
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
  clearWorkout (context) {
    context.commit('resetWorkoutPlan')
  },
  updateFavorites (context, payload) {
    context.commit('changefavorites', payload)
  },
  updateWorkoutPlan (context, payload) {
    context.commit('changeWorkoutPlan', payload)
  }
}

export const getters = {
  activeWorkout: state => state.workout.active,
  additionalFilters: state => state.additionalFilters,
  agility: state => state.workout.agility,
  balance: state => state.workout.balance,
  cardio: state => state.workout.cardio,
  favorites: state => state.favorites,
  intensity: state => state.workoutFilters.intensity,
  mobility: state => state.workout.mobility,
  power: state => state.workout.power,
  resistance: state => state.workout.resistance,
  savedWorkouts: state => state.savedWorkouts
}
