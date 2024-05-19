document.getElementById('questionnaire-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const healthConditions = [];
  document.querySelectorAll('input[name="health-condition"]:checked').forEach(function(checkbox) {
    healthConditions.push(checkbox.value);
  });

  const healthConditionOther = document.querySelector('input[name="health-condition-other"]').value.trim();
  if (healthConditionOther !== '') {
    healthConditions.push(healthConditionOther);
  }

  const allergies = [];
  document.querySelectorAll('input[name="allergy"]:checked').forEach(function(checkbox) {
    allergies.push(checkbox.value);
  });

  const allergyOther = document.querySelector('input[name="allergy-other"]').value.trim();
  if (allergyOther !== '') {
    allergies.push(allergyOther);
  }

  const dietaryRestrictions = [];
  document.querySelectorAll('input[name="dietary-restriction"]:checked').forEach(function(checkbox) {
    dietaryRestrictions.push(checkbox.value);
  });

  const dietaryRestrictionOther = document.querySelector('input[name="dietary-restriction-other"]').value.trim();
  if (dietaryRestrictionOther !== '') {
    dietaryRestrictions.push(dietaryRestrictionOther);
  }

 
  console.log('Health Conditions:', healthConditions);
  console.log('Allergies:', allergies);
  console.log('Dietary Restrictions:', dietaryRestrictions);
});
