/* app-state.js — constantes d\'état partagées
 *
 * Ordre de chargement :
 *   1. firebase-config.js  → auth, db
 *   2. app-state.js        → constantes partagées
 *   3. app.js              → UI, score, badges, saveState/loadState/cloud
 *   4. app-social.js       → amis, défis, messages
 *
 * Note : saveState / loadFromCloud restent dans app.js tant que
 * les dépendances UI (computeScore, etc.) n\'ont pas été isolées.
 * Le gros morceau social est déjà dans app-social.js.
 */
var STORAGE_KEY = "note_journaliere_v1";
window.STORAGE_KEY = STORAGE_KEY;
