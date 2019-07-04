/* eslint-disable no-alert */
import swal from 'sweetalert';

export default (async function showResults(values) {
  fetch('http://localhost:8919/api/cohesion.mission.CreateMission', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values, null, 2),
  });
  console.log(JSON.stringify(values, null, 2));
  swal('Nouveau projet créé !', 'Votre nouveau projet a été créé avec succès.', 'success');
}

);
