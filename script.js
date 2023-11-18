console.log('hola')

function actualizarUsuario(listaUsuarios, nombreUsuario, datosActualizados) {
  const nuevaListaUsuarios = listaUsuarios.map(usuario => ({ ...usuario }) )


  const indiceUsuario = nuevaListaUsuarios.findIndex(usuario => usuario.nombre === nombreUsuario)

  if( indiceUsuario !== -1 ) {
    nuevaListaUsuarios[indiceUsuario] = {
      ...nuevaListaUsuarios[indiceUsuario],
      ...datosActualizados
    }
  } else {
    console.error('El usuario no existe en la lista.')
  }
  return nuevaListaUsuarios
}

const listaOriginal = [
  { nombre: 'usuario1', edad: 25, correo: 'usuario1@example.com' },
  { nombre: 'usuario2', edad: 30, correo: 'usuario2@example.com' },
  { nombre: 'usuario3', edad: 22, correo: 'usuario3@example.com' }
];
console.log('original')
console.log(listaOriginal)

const nuevaLista = actualizarUsuario(listaOriginal, 'usuario2', { edad: 31, ciudad: 'Ciudad1' })
console.log('nueva')
console.log(nuevaLista)


