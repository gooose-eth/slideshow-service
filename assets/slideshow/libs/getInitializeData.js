import defaults from '../store/defaults';
import * as storage from '../../libs/storage';

/**
 * get tree initialize
 *
 * @param {string} mode watch,create,manage
 */
function getInitializeData(mode)
{
  // set values
  let preference;
  let usePreference = defaults.usePreference;
  let tree;
  let group;

  // get service data
  let serviceData = getServiceData();

  switch(mode)
  {
    case 'watch':
      const storagePreference = storage.get('preference');
      const storageGroup = storage.get('group');
      preference = {
        ...defaults.preference,
        ...serviceData.preference,
        ...storagePreference,
      };
      tree = {
        ...defaults.tree,
        ...serviceData.tree,
      };
      group = storageGroup || serviceData.group || defaults.group;
      usePreference.data = false;
      break;
    case 'manage':
      preference = {
        ...defaults.preference,
        ...serviceData.preference,
      };
      tree = {
        ...defaults.tree,
        ...serviceData.tree,
      };
      group = serviceData.group || defaults.group;
      break;
    case 'create':
      preference = defaults.preference;
      tree = defaults.tree;
      group = defaults.group;
      break;
  }

  return {
    preference,
    usePreference,
    tree,
    group,
  };
}

/**
 * get service data
 *
 * return {Object}
 */
function getServiceData()
{
  const { Custom } = window;
  try
  {
    if (!Custom.slideshow) throw new Error('no data');
    if (Custom.slideshow)
    {
      const data = JSON.parse(decodeURIComponent(Custom?.slideshow));
      return {
        group: data.group,
        preference: data.preference,
        tree: data.tree,
      };
    }
  }
  catch(e)
  {
    return {
      group: undefined,
      preference: undefined,
      tree: undefined,
    };
  }
}

export default getInitializeData;
