export const directories = [
  ['tree', 'directories'],
  (directories) => {	return directories.toJS()	}
];

export const value = [
  ['searching'],
  (searching) => {return searching.get('value')}
];

export const data = [
  ['tree', 'directories'],
  ['searching', 'value'],

  function filter(directories, value) {
    let filteredList = [];

    if (value) {
      function parseFolders(folder) {
        folder.forEach(function (item) {
          if (item.name.indexOf(value) > -1){
            //item.expanded = true;
            filteredList.push(item);
          }
          if (item.type === 'folder' &&  item.children.length > 0) {
            parseFolders(item.children);
          }
        });
      }
      parseFolders(directories.toJS());
    } else {
      filteredList = directories.toJS();;
    }
    return {
        value: value,
        directories: filteredList
    }
  }
];
