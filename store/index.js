export const state = () => ({
  exercise: null,
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
    agility: null,
    balance: null,
    cardio: null,
    mobility: null,
    power: null,
    resistance: null
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
        console.log('changed mobility state')
        state.workout.mobility = payload
      }
      if (item.tags.includes('Power')) {
        console.log('changed power state')
        state.workout.power = payload
      }
      if (item.tags.includes('Resistance')) {
        state.workout.resistance = payload
      }
    })
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
  agility: state => state.workout.agility,
  balance: state => state.workout.balance,
  cardio: state => state.workout.cardio,
  intensity: state => state.workoutFilters.intensity,
  mobility: state => state.workout.mobility,
  power: state => state.workout.power,
  resistance: state => state.workout.resistance
}
