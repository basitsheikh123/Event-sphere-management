const EVENTS_KEY = "es_admin_events";
const ATTENDEES_KEY = "es_admin_attendees";




export function loadSeed() {
if (typeof window === "undefined") return;
const has = localStorage.getItem(EVENTS_KEY);
if (!has) {
const { SAMPLE_EVENTS, SAMPLE_ATTENDEES } = require("./Sampledata.js");
localStorage.setItem(EVENTS_KEY, JSON.stringify(SAMPLE_EVENTS));
localStorage.setItem(ATTENDEES_KEY, JSON.stringify(SAMPLE_ATTENDEES));
}
}




export function getEvents() {
if (typeof window === "undefined") return [];
const raw = localStorage.getItem(EVENTS_KEY);
return raw ? JSON.parse(raw) : [];
}




export function saveEvents(list) {
if (typeof window === "undefined") return;
localStorage.setItem(EVENTS_KEY, JSON.stringify(list));
}




export function getEventById(id) {
return getEvents().find((e) => e.id === id);
}




export function upsertEvent(evt) {
const list = getEvents();
const idx = list.findIndex((e) => e.id === evt.id);
if (idx >= 0) list[idx] = evt; else list.unshift(evt);
saveEvents(list);
}




export function deleteEvent(id) {
const list = getEvents().filter((e) => e.id !== id);
saveEvents(list);
}




export function getAttendees() {
if (typeof window === "undefined") return [];
const raw = localStorage.getItem(ATTENDEES_KEY);
return raw ? JSON.parse(raw) : [];
}