import defaults from '../store/defaults';

/**
 * get tree initialize
 *
 * @param {string} mode watch,create,manage
 */
function getInitializeData(mode)
{
  // set values
  let preference = undefined;
  let tree = undefined;
  let group = undefined;

  switch(mode)
  {
    case 'watch':
      // window.Custom
      break;
    case 'manage':
      // TODO: 로컬스토리지에 업데이트하고 `props`쪽은 `undefined`로 집어넣어본다.
      // window.Custom
      break;
    case 'create':
      preference = defaults.preference;
      tree = defaults.tree;
      group = defaults.group;
      break;
  }

  return {
    preference,
    tree,
    group,
  };
}

export default getInitializeData;
