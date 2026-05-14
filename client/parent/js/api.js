/**
 * API client for parent dashboard.
 *
 * Local dev uses the Express backend. GitHub Pages uses the shared
 * localStorage static store so parents can manage tasks/rewards directly
 * in the browser without a server login flow.
 */

import { isStaticMode } from '../../shared/paths.js';
import * as staticStore from '../../shared/static-store.js';

const BASE = '/api/parent';
const TOKEN_KEY = 'parent-token';
const STATIC_MODE = isStaticMode();

export function isStaticRuntime() {
  return STATIC_MODE;
}

export function getToken() {
  try { return localStorage.getItem(TOKEN_KEY) || ''; } catch (_) { return ''; }
}

export function setToken(token) {
  try {
    if (token) localStorage.setItem(TOKEN_KEY, token);
    else localStorage.removeItem(TOKEN_KEY);
  } catch (_) {}
}

export function clearToken() {
  setToken('');
}

function ok(result) {
  if (result && result.success === false) {
    const err = new Error(result.message || result.error || '请求失败');
    err.status = result.status;
    throw err;
  }
  return result;
}

async function request(url, options = {}) {
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };
  const token = getToken();
  if (token) headers['X-Parent-Token'] = token;

  const res = await fetch(url, { ...options, headers });

  if (res.status === 401) {
    clearToken();
    const text = await res.text().catch(() => '');
    const err = new Error(text || 'Unauthorized');
    err.status = 401;
    throw err;
  }

  if (!res.ok) {
    const text = await res.text();
    const err = new Error(`API ${res.status}: ${text}`);
    err.status = res.status;
    throw err;
  }
  return res.json();
}

async function rawRequest(url, options = {}) {
  const headers = { ...(options.headers || {}) };
  const token = getToken();
  if (token) headers['X-Parent-Token'] = token;

  const res = await fetch(url, { ...options, headers });
  if (res.status === 401) {
    clearToken();
    const err = new Error('Unauthorized');
    err.status = 401;
    throw err;
  }
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    const err = new Error(`API ${res.status}: ${text}`);
    err.status = res.status;
    throw err;
  }
  const ct = res.headers.get('content-type') || '';
  if (ct.includes('application/json')) return res.json();
  return res.text();
}

export function getAuthStatus() {
  if (STATIC_MODE) return Promise.resolve(staticStore.authStatus());
  return request(`${BASE}/auth/status`);
}

export async function parentLogin(pin) {
  if (STATIC_MODE) {
    const res = staticStore.authOk(pin);
    setToken(res.token);
    return res;
  }
  const res = await request(`${BASE}/auth/login`, {
    method: 'POST',
    body: JSON.stringify({ pin }),
  });
  const token = res.token || res.data?.token;
  if (token) setToken(token);
  return res;
}

export async function parentLogout() {
  if (STATIC_MODE) {
    clearToken();
    return { success: true };
  }
  try {
    await request(`${BASE}/auth/logout`, { method: 'POST' });
  } catch (_) {
    // Even if the server call fails, clear the local token.
  } finally {
    clearToken();
  }
}

export function setPin(pin) {
  if (STATIC_MODE) return Promise.resolve(staticStore.authOk(pin));
  return request(`${BASE}/auth/set-pin`, {
    method: 'POST',
    body: JSON.stringify({ pin }),
  });
}

export async function removePin() {
  if (STATIC_MODE) {
    clearToken();
    return { success: true };
  }
  const res = await request(`${BASE}/auth/pin`, { method: 'DELETE' });
  clearToken();
  return res;
}

export function getChildren() {
  if (STATIC_MODE) return Promise.resolve(staticStore.childrenList());
  return request(`${BASE}/children`);
}

export function createChild(data) {
  if (STATIC_MODE) return Promise.resolve(ok(staticStore.createChild(data)));
  return request(`${BASE}/children`, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export function updateChild(id, data) {
  if (STATIC_MODE) return Promise.resolve(ok(staticStore.upsertChild(id, data)));
  return request(`${BASE}/children/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

export function getPending(childId) {
  if (STATIC_MODE) return Promise.resolve(staticStore.pendingRedemptions(childId || null));
  const qs = childId ? `?child=${childId}` : '';
  return request(`${BASE}/pending${qs}`);
}

export function approveRedemption(id) {
  if (STATIC_MODE) return Promise.resolve(ok(staticStore.approveRedemption(id)));
  return request(`${BASE}/approve/${id}`, { method: 'POST' });
}

export function rejectRedemption(id) {
  if (STATIC_MODE) return Promise.resolve(ok(staticStore.rejectRedemption(id)));
  return request(`${BASE}/reject/${id}`, { method: 'POST' });
}

export function getPendingActions() {
  if (STATIC_MODE) return Promise.resolve(staticStore.pendingActions());
  return request(`${BASE}/approvals`);
}

export function approvePendingAction(id) {
  if (STATIC_MODE) return Promise.resolve(ok(staticStore.approveAction(id)));
  return request(`${BASE}/approvals/${id}/approve`, { method: 'POST' });
}

export function rejectPendingAction(id, reason = null) {
  if (STATIC_MODE) return Promise.resolve(ok(staticStore.rejectAction(id, reason)));
  return request(`${BASE}/approvals/${id}/reject`, {
    method: 'POST',
    body: JSON.stringify({ reason }),
  });
}

export function subscribeToPush(subscription, { deviceId, deviceName }) {
  if (STATIC_MODE) return Promise.resolve({ success: true });
  return request(`${BASE}/push/subscribe`, {
    method: 'POST',
    body: JSON.stringify({
      subscription,
      device_id: deviceId,
      device_name: deviceName,
    }),
  });
}

export function unsubscribeFromPush(endpoint) {
  if (STATIC_MODE) return Promise.resolve({ success: true });
  return request(`${BASE}/push/unsubscribe`, {
    method: 'POST',
    body: JSON.stringify({ endpoint }),
  });
}

export function getTasks() {
  if (STATIC_MODE) return Promise.resolve(staticStore.tasksList(false));
  return request(`${BASE}/tasks`);
}

export function createTask(data) {
  if (STATIC_MODE) return Promise.resolve(ok(staticStore.createTask(data)));
  return request(`${BASE}/tasks`, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export function updateTask(id, data) {
  if (STATIC_MODE) return Promise.resolve(ok(staticStore.updateTask(id, data)));
  return request(`${BASE}/tasks/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

export function getRewards() {
  if (STATIC_MODE) return Promise.resolve(staticStore.rewardsList(false));
  return request(`${BASE}/rewards`);
}

export function createReward(data) {
  if (STATIC_MODE) return Promise.resolve(ok(staticStore.createReward(data)));
  return request(`${BASE}/rewards`, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export function updateReward(id, data) {
  if (STATIC_MODE) return Promise.resolve(ok(staticStore.updateReward(id, data)));
  return request(`${BASE}/rewards/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

export function getHistory(childId, limit = 50) {
  if (STATIC_MODE) return Promise.resolve(staticStore.historyList(childId || null, limit));
  const params = new URLSearchParams();
  if (childId) params.set('child', childId);
  if (limit) params.set('limit', limit);
  const qs = params.toString();
  return request(`${BASE}/history${qs ? '?' + qs : ''}`);
}

export function adjustCoins(childId, coins, note) {
  if (STATIC_MODE) return Promise.resolve(ok(staticStore.adjustCoins(childId, coins, note)));
  return request(`${BASE}/adjust`, {
    method: 'POST',
    body: JSON.stringify({ child: childId, coins, note }),
  });
}

export function getBackups() {
  if (STATIC_MODE) return Promise.resolve(staticStore.backups());
  return request(`${BASE}/backups`);
}

export function createBackup() {
  if (STATIC_MODE) return Promise.resolve(staticStore.createBackup());
  return request(`${BASE}/backup`, { method: 'POST' });
}

export function restoreBackup(filename) {
  if (STATIC_MODE) return Promise.resolve(ok(staticStore.restoreBackup(filename)));
  return request(`${BASE}/restore`, {
    method: 'POST',
    body: JSON.stringify({ filename }),
  });
}

export function getReports() {
  if (STATIC_MODE) return Promise.resolve(staticStore.reports());
  return request(`${BASE}/reports`);
}

export function generateReport() {
  if (STATIC_MODE) return Promise.resolve(staticStore.generateReport());
  return request(`${BASE}/reports/generate`, { method: 'POST' });
}

export function getVoiceMessages(childId) {
  if (STATIC_MODE) return Promise.resolve(staticStore.emptyList());
  const qs = childId ? `?child=${childId}` : '';
  return request(`/api/voice-messages${qs}`);
}

export async function uploadVoiceMessage(childId, blob, category = 'general', label = '', duration = 0) {
  if (STATIC_MODE) return { success: true, data: null };
  const params = new URLSearchParams();
  if (childId) params.set('child', childId);
  if (category) params.set('category', category);
  if (label) params.set('label', label);
  if (duration) params.set('duration', String(Math.round(duration)));

  const url = `/api/voice-messages?${params.toString()}`;
  return rawRequest(url, {
    method: 'POST',
    headers: { 'Content-Type': blob.type || 'audio/webm' },
    body: blob,
  });
}

export function deleteVoiceMessage(id) {
  if (STATIC_MODE) return Promise.resolve({ success: true });
  return request(`/api/voice-messages/${id}`, { method: 'DELETE' });
}

export function getPhotos(childId) {
  if (STATIC_MODE) return Promise.resolve(staticStore.emptyList());
  const qs = childId ? `?child=${childId}` : '';
  return request(`/api/photos${qs}`);
}

export function deletePhoto(id) {
  if (STATIC_MODE) return Promise.resolve({ success: true });
  return request(`/api/photos/${id}`, { method: 'DELETE' });
}
