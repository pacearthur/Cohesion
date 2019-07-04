/* eslint-disable no-alert */
import swal from 'sweetalert';

export default (async function showResults(values) {
  fetch('http://localhost:8919/api/cohesion.competence.CreateCompetence', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values, null, 2),
  });
  console.log(JSON.stringify(values, null, 2));
  swal('Nouvelle compétence !', 'Cette compétence est certifée dans la blockchain.', 'success');
}
);
