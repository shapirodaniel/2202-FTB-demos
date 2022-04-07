/* 
  directories are a recursive structure
  
  each directory can be empty, 
  or consist of files and/or directories
  which themselves can consist of files and/or directories
  (and so on and so forth ...)
  
  here's a visual example of a directory:

  dirA
  |_ fileA
  |_ fileB
  |_ dirB
    |_ dirC
        |_ fileC
        |_ dirD

  write a function listDirectory that takes in a directory
  and returns a list of all directory and file names, 
  inclusive (ie with the root directory listed as well)
*/

// example input:
const exampleDirectory = {
  type: 'dir',
  name: 'dirA',
  children: [
    {
      type: 'file',
      name: 'fileA',
    },
    {
      type: 'file',
      name: 'fileB',
    },
    {
      type: 'dir',
      name: 'dirB',
      children: [
        {
          type: 'dir',
          name: 'dirC',
          children: [
            {
              type: 'file',
              name: 'fileC',
            },
            {
              type: 'dir',
              name: 'dirD',
              children: [],
            },
          ],
        },
      ],
    },
  ],
};

// example
console.log(listDirectory(exampleDirectory));

/* 
  yields:

  [
    'dirA',  'fileA',
    'fileB', 'dirB',
    'dirC',  'fileC',
    'dirD'
  ]
*/

// solution
function listDirectory(directory, list = []) {
  // base case: directory is file or directory has no children
  if (directory.type === 'file' || directory.children.length === 0) {
    list.push(directory.name);
    return;
  }

  // add directory name to list
  list.push(directory.name);

  // recursive case: iterate directory children, passing in list
  for (const child of directory.children) {
    listDirectory(child, list);
  }

  // once outer children loop has terminated, return list
  return list;
}
