console.log('hola')

function agregarPaciente(listaPacientes, nuevoPaciente) {
  console.log('lista original', listaPacientes)
  const nuevaListaPaciente = [...listaPacientes]
  console.log('nueva lista', nuevaListaPaciente)

  const pacienteExistente = nuevaListaPaciente.find((paciente) => paciente.nombre.toLowerCase() === nuevoPaciente.nombre.toLowerCase() )
  console.log('existe?', pacienteExistente)

  if(pacienteExistente) {
    console.error(`El paciente "${nuevoPaciente.nombre}" ya existe en la lista.`)
    return
  }

  nuevaListaPaciente.push(nuevoPaciente)

  return nuevaListaPaciente
}

function buscarPaciente(listaPacientes, nombrePaciente) {
  if(listaPacientes.length === 0) {
    return ('La lista de pacientes está vacía.')
  }

  const pacienteEncontrado = listaPacientes.find(
    paciente => paciente.nombre === nombrePaciente
  )

  return pacienteEncontrado || `Paciente "${nombrePaciente}" no encontrado.`

}


const listaOriginal = [
  { nombre: 'Paciente1', edad: 30, enfermedad: 'Resfriado' },
  { nombre: 'Paciente2', edad: 25, enfermedad: 'Dolor de cabeza' },
  { nombre: 'Paciente3', edad: 35, enfermedad: 'Fiebre' }
];

const nuevoPaciente = { nombre: 'NuevoPaciente', edad: 28, enfermedad: 'Esguince' }

const listaConNuevoPaciente = agregarPaciente(listaOriginal, nuevoPaciente);

// console.log('Lista con nuevo paciente:', listaConNuevoPaciente)

const nombreBuscar = 'Paciente4'
const pacienteEncontrado = buscarPaciente(listaOriginal, nombreBuscar)

// console.log('',pacienteEncontrado)


const preguntas = [
  {
    pregunta: "Cuando hibernan los osos?",
    opciones: ['invierno', 'verano', 'primavera', 'otoño'],
    respuestaCorrecta: 'invierno'
  },
  {
    pregunta: "Cuando hibernan los osos?",
    opciones: ['invierno', 'verano', 'primavera', 'otoño'],
    respuestaCorrecta: 'invierno'
  },
  {
    pregunta: "Cuando hibernan los osos?",
    opciones: ['invierno', 'verano', 'primavera', 'otoño'],
    respuestaCorrecta: 'invierno'
  },
  {
    pregunta: "Cuando hibernan los osos?",
    opciones: ['invierno', 'verano', 'primavera', 'otoño'],
    respuestaCorrecta: 'invierno'
  }
]

const respuestas = [
  'invierno', 'otoño', 'verano', ''
]

let respuestaUsuario = 'invierno' 

const correcto = preguntas.map((pregunta, indice) => {
  console.log('pregunta', pregunta)
  console.log('indice', indice)
  if(pregunta.respuestaCorrecta === respuestas[indice]) {
    return 'correcto'
  } else {
    return 'incorrecto'
  }
})

console.log(correcto)
