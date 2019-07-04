'use strict';
/**
 * Create Mission Transaction
 * @param {cohesion.mission.CreateMission} missionData
 * @transaction
 */
function    CreateMission(missionData) {
    // 1. Get the asset registry
    return getAssetRegistry('cohesion.mission.Mission')
        .then(function(missionRegistry){

            // 2. Get resource factory
            var  factory = getFactory();
            var  NS =  'cohesion.mission';

            // 3. Create the Resource instance
            var  titre = missionData.titre;  /// <<<< THIS IS HARD CODED - FIX IT as an exercise
            var  mission = factory.newResource(NS,'Mission',titre);
            mission.username = missionData.username;
            mission.email = missionData.email;
            mission.Entité = missionData.Entité;
            mission.competence = missionData.competence;
            mission.nombre = missionData.nombre;
            mission.start = missionData.start;
            mission.end = missionData.end;
            mission.phone_notifications = 'true';
            mission.textarea = missionData.textarea;

            // 6. Emit the event MissionCreated
            var event = factory.newEvent(NS, 'MissionCreated');
            event.titre = titre;
            emit(event);

            return missionRegistry.addAll([mission]);
        });
}
/****
 */

/**
 * Create Competence Transaction
 * @param {cohesion.competence.CreateCompetence} competenceData
 * @transaction
*/
function    CreateCompetence(competenceData) {
    // 1. Get the asset registry
    return getAssetRegistry('cohesion.competence.Competence')
        .then(function(missionRegistry){

            // 2. Get resource factory
            var  factory = getFactory();
            var  NS =  'cohesion.competence';

            // 3. Create the Resource instance
            var  nom = competenceData.nom;  /// <<<< THIS IS HARD CODED - FIX IT as an exercise
            var  competence = factory.newResource(NS,'Competence',nom);
            competence.nom = competenceData.nom;
            competence.note = 0;

            // 6. Emit the event CompetenceCreated
            var event = factory.newEvent(NS, 'CompetenceCreated');
            event.nom = nom;
            emit(event);

            return missionRegistry.addAll([competence]);
        });
}

/**
 * Create Mission Transaction
 * @param {cohesion.mission.CreateMission} missionData
 * @transaction

function    CertifierCompetence(competenceData) {
    // 1. Get the asset registry
    return getAssetRegistry('cohesion.competence.Competence')
        .then(function(missionRegistry){

            // 2. Get resource factory
            var  factory = getFactory();
            var  NS =  'cohesion.competence';

            // 3. Create the Resource instance
            var  competenceNom = competenceData.competenceNom;  /// <<<< THIS IS HARD CODED - FIX IT as an exercise
            var  competence = factory.newResource(NS,'Competence',competenceNom);
            competence.competenceNom = competenceData.competenceNom;
            competence.agent = competenceData.agent;
            competence.note = '0';

            // 6. Emit the event CompetenceCertifiee
            var event = factory.newEvent(NS, 'CompetenceCreated');
            event.competenceNom = competenceNom;
            emit(event);

            return missionRegistry.addAll([competence]);
        });
}

 */