const toggleScheduleButton = document.getElementById('toggle-schedule');
const scheduleContainer = document.getElementById('schedule-container');

toggleScheduleButton.addEventListener('click', function () {

    if (scheduleContainer.style.display === 'none') {

        scheduleContainer.style.display = ''; 
        toggleScheduleButton.textContent = 'Hide Schedule';

    } else {

        scheduleContainer.style.display = 'none';
        toggleScheduleButton.textContent = 'Show Schedule';

    }
});
