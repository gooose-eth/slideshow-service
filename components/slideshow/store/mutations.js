/**
 * change mode
 */
export function updateMode(state, value)
{
  state.mode = value;
}

/**
 * update active slide
 */
export function updateActiveSlide(state, n)
{
  state.activeSlide = n;
}

/**
 * use keyboard event
 */
export function updateUseKeyboardEvent(state, sw)
{
  state.keyboardEvent = sw;
}

/**
 * update preference
 */
export function updatePreference(state, value)
{
  state.preference = value;
}

/**
 * change usePreference
 */
export function changeUsePreference(state, value)
{
  state.usePreference = value;
}

/**
 * update value in preference
 */
export function updateValueInPreference(state, src)
{
  const { value, map } = src;
  if (!(map && Array.isArray(map))) return;
  switch (map.length)
  {
    case 1:
      state.preference[map[0]] = value;
      break;
    case 2:
      state.preference[map[0]][map[1]] = value;
      break;
    case 3:
      state.preference[map[0]][map[1]][map[2]] = value;
      break;
  }
}

export function updateTree(state, value)
{
  state.tree = value;
}

/**
 * update slides
 */
export function updateSlides(state, value)
{
  state.slides = value;
}

/**
 * update group
 */
export function updateGroup(state, value)
{
  state.group = value;
}

export function updateAutoplay(state, value)
{
  state.autoplay = value;
}

/**
 * update use preference
 * ex) `store.commit('updateUsePreference', [ 'data', false ]);`
 *
 * @param state
 * @param {array} value
 */
export function updateUsePreference(state, value)
{
  switch (value[0])
  {
    case 'slides':
    case 'style':
    case 'data':
    case 'keyboard':
    case 'information':
      state.usePreference[value[0]] = Boolean(value[1]);
      break;
  }
}

/**
 * set service mode
 *
 * @param state
 * @param {string} value
 */
export function setServiceMode(state, value)
{
  state.serviceMode = value;
}