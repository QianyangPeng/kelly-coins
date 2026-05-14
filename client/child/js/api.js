// API client for child-facing endpoints.
// On the local Express server this talks to /api/*. On GitHub Pages it uses
// localStorage via the shared static store so the app can run without a backend.

import { isStaticMode } from '../../shared/paths.js';
import * as staticStore from '../../shared/static-store.js';

const BASE = '';
const STATIC_MODE = isStaticMode();

let _childId = 'kelly';

export function setChildId(id) {
  _childId = id;
}

export function getChildId() {
  return _childId;
}

export function isStaticRuntime() {
  return STATIC_MODE;
}

function qs(extra = {}) {
  const params = new URLSearchParams({ child: _childId, ...extra });
  return '?' + params.toString();
}

async function request(url, options = {}) {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  });
  const data = await res.json();
  if (!res.ok || data.success === false) {
    throw new Error(data.message || data.error || '请求失败');
  }
  return data;
}

function ok(result) {
  if (result && result.success === false) {
    throw new Error(result.message || result.error || '请求失败');
  }
  return result;
}

export async function fetchProfile() {
  if (STATIC_MODE) return staticStore.childProfile(_childId);
  return request(`${BASE}/api/balance${qs()}`);
}

export async function fetchChildren() {
  if (STATIC_MODE) return staticStore.childrenList().data;
  const res = await request(`${BASE}/api/children`);
  return res.data;
}

export async function fetchTasks() {
  if (STATIC_MODE) return staticStore.tasksList(true).data;
  const res = await request(`${BASE}/api/tasks`);
  return res.data;
}

export async function fetchRewards() {
  if (STATIC_MODE) return staticStore.rewardsList(true).data;
  const res = await request(`${BASE}/api/rewards`);
  return res.data;
}

export async function earnCoins(taskId) {
  if (STATIC_MODE) return ok(staticStore.earnTask(_childId, taskId));
  return request(`${BASE}/api/earn${qs()}`, {
    method: 'POST',
    body: JSON.stringify({ task_id: taskId })
  });
}

export async function redeemReward(rewardId) {
  if (STATIC_MODE) return ok(staticStore.legacyRedeem(_childId, rewardId));
  return request(`${BASE}/api/redeem${qs()}`, {
    method: 'POST',
    body: JSON.stringify({ reward_id: rewardId })
  });
}

export async function purchaseItem(rewardId) {
  if (STATIC_MODE) return ok(staticStore.purchaseItem(_childId, rewardId));
  return request(`${BASE}/api/purchase${qs()}`, {
    method: 'POST',
    body: JSON.stringify({ reward_id: rewardId })
  });
}

export async function fetchInventory() {
  if (STATIC_MODE) return staticStore.inventoryList(_childId).data;
  const res = await request(`${BASE}/api/inventory${qs()}`);
  return res.data;
}

export async function redeemFromInventory(rewardId) {
  if (STATIC_MODE) return ok(staticStore.redeemFromInventory(_childId, rewardId));
  return request(`${BASE}/api/inventory/redeem${qs()}`, {
    method: 'POST',
    body: JSON.stringify({ reward_id: rewardId })
  });
}

export async function fetchHistory(limit = 20) {
  if (STATIC_MODE) return staticStore.historyList(_childId, limit).data;
  const res = await request(`${BASE}/api/history${qs({ limit })}`);
  return res.data;
}

export async function fetchSkins() {
  if (STATIC_MODE) return staticStore.skinsForChild(_childId).data;
  const res = await request(`${BASE}/api/skins${qs()}`);
  return res.data;
}

export async function buySkin(skinId) {
  if (STATIC_MODE) return ok(staticStore.buySkin(_childId, skinId));
  return request(`${BASE}/api/skins/buy${qs()}`, {
    method: 'POST',
    body: JSON.stringify({ skin_id: skinId })
  });
}

export async function equipSkin(skinId) {
  if (STATIC_MODE) return ok(staticStore.equipSkin(_childId, skinId));
  return request(`${BASE}/api/skins/equip${qs()}`, {
    method: 'POST',
    body: JSON.stringify({ skin_id: skinId })
  });
}

export async function fetchAchievements() {
  if (STATIC_MODE) return staticStore.achievements(_childId).data;
  const res = await request(`${BASE}/api/achievements${qs()}`);
  return res.data;
}

export async function fetchStreak() {
  if (STATIC_MODE) return staticStore.streak(_childId).data;
  const res = await request(`${BASE}/api/streak${qs()}`);
  return res.data;
}

export async function fetchGoal() {
  if (STATIC_MODE) return staticStore.goal(_childId).data;
  const res = await request(`${BASE}/api/goal${qs()}`);
  return res.data;
}

export async function setGoal(rewardId) {
  if (STATIC_MODE) return ok(staticStore.setGoal(_childId, rewardId));
  return request(`${BASE}/api/goal${qs()}`, {
    method: 'POST',
    body: JSON.stringify({ reward_id: rewardId })
  });
}

export async function fetchDailyQuest() {
  if (STATIC_MODE) return staticStore.dailyQuest(_childId).data;
  const res = await request(`${BASE}/api/daily-quest${qs()}`);
  return res.data;
}

export async function fetchVoiceMessages(unplayedOnly = false) {
  if (STATIC_MODE) return staticStore.emptyList().data;
  const url = `${BASE}/api/voice-messages${qs(unplayedOnly ? { unplayed: '1' } : {})}`;
  const res = await request(url);
  return res.data;
}

export async function markVoicePlayed(id) {
  if (STATIC_MODE) return staticStore.markVoicePlayed(id);
  return request(`${BASE}/api/voice-messages/${id}/played`, { method: 'POST' });
}

export async function fetchPlantTypes() {
  if (STATIC_MODE) return staticStore.plantTypes().data;
  const res = await request(`${BASE}/api/garden/types`);
  return res.data;
}

export async function fetchGarden() {
  if (STATIC_MODE) return staticStore.garden(_childId).data;
  const res = await request(`${BASE}/api/garden${qs()}`);
  return res.data;
}

export async function plantSeed(plantType) {
  if (STATIC_MODE) return ok(staticStore.plantSeed(_childId, plantType));
  return request(`${BASE}/api/garden/plant${qs()}`, {
    method: 'POST',
    body: JSON.stringify({ plant_type: plantType })
  });
}

export async function waterPlant(plantId) {
  if (STATIC_MODE) return ok(staticStore.waterPlant(_childId, plantId));
  return request(`${BASE}/api/garden/water/${plantId}${qs()}`, { method: 'POST' });
}

export async function harvestPlant(plantId) {
  if (STATIC_MODE) return ok(staticStore.harvestPlant(_childId, plantId));
  return request(`${BASE}/api/garden/harvest/${plantId}${qs()}`, { method: 'POST' });
}

export async function fetchHoliday() {
  if (STATIC_MODE) return staticStore.holiday().data;
  const res = await request(`${BASE}/api/holiday`);
  return res.data;
}

export async function fetchThemes() {
  if (STATIC_MODE) return staticStore.themes().data;
  const res = await request(`${BASE}/api/themes`);
  return res.data;
}

export async function setTheme(themeId) {
  if (STATIC_MODE) return staticStore.setChildTheme(_childId, themeId);
  return request(`${BASE}/api/theme${qs()}`, {
    method: 'POST',
    body: JSON.stringify({ theme_id: themeId })
  });
}

export async function uploadPhoto(blob, taskId, taskName) {
  if (STATIC_MODE) return { success: true, data: null };
  const params = new URLSearchParams({ child: getChildId(), task_id: taskId, task_name: taskName });
  const res = await fetch(`${BASE}/api/photos?${params}`, {
    method: 'POST',
    headers: { 'Content-Type': blob.type || 'image/jpeg' },
    body: blob,
  });
  return res.json();
}

export async function rewardGameCoins(gameId, coins) {
  if (STATIC_MODE) return ok(staticStore.gameReward(_childId, gameId, coins));
  return request(`${BASE}/api/games/reward${qs()}`, {
    method: 'POST',
    body: JSON.stringify({ game_id: gameId, coins })
  });
}

export async function verifyVoice(pack, answer, audioBlob) {
  if (STATIC_MODE) return staticStore.verifyVoiceStatic(pack, answer, audioBlob);
  const url = `${BASE}/api/voice-verify${qs({ pack, answer })}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': audioBlob.type || 'audio/webm' },
    body: audioBlob,
  });
  return res.json();
}

export async function verifyAlphabet(letter, audioBlob) {
  return verifyVoice('letters', letter, audioBlob);
}

export async function fetchWheelStatus() {
  if (STATIC_MODE) return staticStore.wheelStatus(_childId);
  return request(`${BASE}/api/wheel/status${qs()}`);
}

export async function spinWheel() {
  if (STATIC_MODE) return staticStore.spinWheel(_childId);
  const url = `${BASE}/api/wheel/spin${qs()}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({}),
  });
  const data = await res.json().catch(() => ({}));
  return { status: res.status, ...data };
}

export async function requestPurchase(rewardId) {
  if (STATIC_MODE) return ok(staticStore.createPendingPurchase(_childId, rewardId));
  return request(`${BASE}/api/request-purchase${qs()}`, {
    method: 'POST',
    body: JSON.stringify({ reward_id: rewardId }),
  });
}

export async function requestRedeem(rewardId) {
  if (STATIC_MODE) return ok(staticStore.createPendingRedeem(_childId, rewardId));
  return request(`${BASE}/api/request-redeem${qs()}`, {
    method: 'POST',
    body: JSON.stringify({ reward_id: rewardId }),
  });
}

export async function fetchPendingAction(id) {
  if (STATIC_MODE) return ok(staticStore.pendingAction(id)).action;
  const res = await request(`${BASE}/api/pending-actions/${id}`);
  return res.action;
}

export async function cancelPendingAction(id) {
  if (STATIC_MODE) return ok(staticStore.cancelPendingAction(id));
  return request(`${BASE}/api/pending-actions/${id}/cancel`, { method: 'POST' });
}

export async function fetchNotifications(unreadOnly = false) {
  if (STATIC_MODE) return staticStore.notifications(_childId, unreadOnly).data;
  const url = `${BASE}/api/notifications${qs(unreadOnly ? { unread: '1' } : {})}`;
  const res = await request(url);
  return res.data;
}
