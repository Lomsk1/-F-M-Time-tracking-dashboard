'use strict'

const day = document.getElementById('day');
const week = document.getElementById('week');
const month = document.getElementById('month');

const workHr = document.getElementById('workHr');
const workPr = document.getElementById('workPr');

const playHr = document.getElementById('playHr');
const playPr = document.getElementById('playPr');

const studyHr = document.getElementById('studyHr');
const studyPr = document.getElementById('studyPr');

const exerciseHr = document.getElementById('exerciseHr');
const exercisePr = document.getElementById('exercisePr');

const socialHr = document.getElementById('socialHr');
const socialPr = document.getElementById('socialPr');

const selfHr = document.getElementById('selfHr');
const selfPr = document.getElementById('selfPr');


week.addEventListener('click', function(){
    workHr.textContent = "32hrs";
    workPr.textContent  = 'Previous - 36hrs';
    playHr.textContent = "10hrs";
    playPr.textContent  = 'Previous - 8hrs';
    exerciseHr.textContent = "4hrs";
    exercisePr.textContent  = 'Previous - 5hrs';
    studyHr.textContent = "4hrs";
    studyPr.textContent  = 'Previous - 7hrs';
    socialHr.textContent = "5hrs";
    socialPr.textContent  = 'Previous - 10hrs';
    selfHr.textContent = "2hrs";
    selfPr.textContent  = 'Previous - 2hrs';
    week.classList.remove('blue');
    day.classList.add('blue')
    month.classList.add('blue')
});
month.addEventListener('click', function(){
    workHr.textContent = "103hrs";
    workPr.textContent  = 'Previous - 128hrs';
    playHr.textContent = "23hrs";
    playPr.textContent  = 'Previous - 29hrs';
    exerciseHr.textContent = "11hrs";
    exercisePr.textContent  = 'Previous - 18hrs';
    studyHr.textContent = "13hrs";
    studyPr.textContent  = 'Previous - 19hrs';
    socialHr.textContent = "21hrs";
    socialPr.textContent  = 'Previous - 23hrs';
    selfHr.textContent = "7hrs";
    selfPr.textContent  = 'Previous - 11hrs';
    month.classList.remove('blue')
    week.classList.add('blue')
    day.classList.add('blue')
});
day.addEventListener('click', function(){
    workHr.textContent = "5hrs";
    workPr.textContent  = 'Previous - 7hrs';
    playHr.textContent = "1hrs";
    playPr.textContent  = 'Previous - 2hrs';
    exerciseHr.textContent = "1hrs";
    exercisePr.textContent  = 'Previous - 1hrs';
    studyHr.textContent = "0hrs";
    studyPr.textContent  = 'Previous - 1hrs';
    socialHr.textContent = "1hrs";
    socialPr.textContent  = 'Previous - 3hrs';
    selfHr.textContent = "0hrs";
    selfPr.textContent  = 'Previous - 1hrs';
    month.classList.add('blue')
    week.classList.add('blue')
    day.classList.remove('blue')
});