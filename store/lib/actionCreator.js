export const getSliceActions = (slice, type) => ({
  request: slice.actions[`${type}Request`],
  success: slice.actions[`${type}Success`],
  failure: slice.actions[`${type}Failure`],
  end: slice.actions[`${type}End`],
})
