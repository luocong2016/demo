type Name = string
type NameResolver = () => string
type NameOrResolver = Name | NameResolver

function getName(n: NameOrResolver): Name {
  return typeof n === 'string' ? n : n()
}

getName('Lutz')
getName(() => 'Bukn')

interface Box {
  height: number
  width: number
}

interface Box {
  scale: number
}

let box: Box = { height: 5, width: 6, scale: 10 }

class Album {
  label: Album.AlbumLabel
}
namespace Album {
  export class AlbumLabel {}
}

/** @type {number} */
let x
x = 0
x = false

const tyes: object = {a: 2};

let unusable: void = null;