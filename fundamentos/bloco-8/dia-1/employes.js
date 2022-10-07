
const createCollaborator = (nomeCompleto) => {
  const nome = nomeCompleto.trim().replace(/[ ]/, '_').toLowerCase();
  const email = nome + '@trybe.com';
  return { nomeCompleto, email };
}

const newEmployees = (employee) => {
  const employees = {
    id1: employee('Pedro Guerra'), 
    id2: employee('Luiza Drumond'), 
    id3: employee('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees(createCollaborator));

/**
 * Output: 
 *  {
 *    id1: { nomeCompleto: 'Pedro Guerra', email: 'pedro_guerra@trybe.com' },
 *    id2: { nomeCompleto: 'Luiza Drumond', email: 'luiza_drumond@trybe.com' },
 *    id3: { nomeCompleto: 'Carla Paiva', email: 'carla_paiva@trybe.com' }
 *  }
 */