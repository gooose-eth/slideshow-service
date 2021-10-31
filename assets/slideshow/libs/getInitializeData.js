import defaults from '../store/defaults';

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

  switch(mode)
  {
    case 'watch':
      let data = loadData();
      console.log(data)
      // TODO: 데이터베이스에서 가져온 값들을 사용한다.
      // window.Custom
      preference = defaults.preference;
      tree = defaults.tree;
      group = defaults.group;
      usePreference.data = false;
      // TODO: `preference,group` 부분은 스토리지와 연동이 되어야 한다.
      break;
    case 'manage':
      // TODO: 데이터베이스에서 가져온 값들을 사용한다.
      // window.Custom
      preference = defaults.preference;
      tree = defaults.tree;
      group = defaults.group;
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

function loadData()
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
