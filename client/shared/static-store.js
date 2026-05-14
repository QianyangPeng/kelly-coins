const STORAGE_KEY = 'kelly-coins-static-db-v1';
const BACKUP_KEY = 'kelly-coins-static-backups-v1';

export const ICON_CATALOG = {
  tasks: [
    { key: 'bath', label: '洗澡' },
    { key: 'brush-teeth', label: '刷牙' },
    { key: 'get-dressed', label: '穿衣服' },
    { key: 'wash-hands', label: '洗手' },
    { key: 'veggies', label: '吃蔬菜' },
    { key: 'fruit', label: '吃水果' },
    { key: 'water', label: '喝水' },
    { key: 'read-book', label: '读书' },
    { key: 'tidy-toys', label: '收玩具' },
    { key: 'share', label: '分享' },
    { key: 'sweep', label: '帮忙家务' },
    { key: 'water-plant', label: '浇花' },
    { key: 'pet-feed', label: '喂宠物' },
    { key: 'thank-you', label: '说谢谢' },
    { key: 'bedtime', label: '按时睡觉' },
    { key: 'draw', label: '画画' },
  ],
  rewards: [
    { key: 'chocolate', label: '巧克力' },
    { key: 'ice-cream', label: '冰淇淋' },
    { key: 'lollipop', label: '棒棒糖' },
    { key: 'cookie', label: '饼干' },
    { key: 'pudding', label: '布丁' },
    { key: 'fruit-basket', label: '水果篮' },
    { key: 'books', label: '故事书' },
    { key: 'stickers', label: '贴纸' },
    { key: 'crayons', label: '蜡笔' },
    { key: 'teddy', label: '小熊玩偶' },
    { key: 'movie', label: '视频时间' },
    { key: 'park', label: '公园' },
    { key: 'swimming', label: '游泳' },
    { key: 'picnic', label: '野餐' },
    { key: 'playground', label: '游乐场' },
    { key: 'zoo', label: '动物园' },
  ],
  shop: [
    { key: 'magic-wand', label: '魔法棒' },
    { key: 'wings', label: '蝴蝶翅膀' },
    { key: 'flower-crown', label: '花环' },
    { key: 'gold-star', label: '金星星' },
    { key: 'rainbow-bow', label: '彩虹蝴蝶结' },
    { key: 'tiara', label: '皇冠' },
    { key: 'sparkles', label: '闪光' },
    { key: 'heart-clip', label: '爱心发夹' },
    { key: 'bouquet', label: '花束' },
    { key: 'music-note', label: '音符' },
    { key: 'balloon', label: '气球' },
    { key: 'teddy-bear', label: '小熊' },
    { key: 'bunny', label: '兔子' },
    { key: 'rainbow', label: '彩虹' },
    { key: 'unicorn-horn', label: '独角兽角' },
    { key: 'palette', label: '调色板' },
  ],
};

const DEFAULT_TASKS = [
  { id: 1, name: '陪 Selina 玩 15 分钟', coins: 1, icon_emoji: '🧸', icon_file: 'share', duration_minutes: 15, coins_per_interval: 1, is_active: 1 },
  { id: 2, name: '洗澡', coins: 2, icon_emoji: '🛁', icon_file: 'bath', is_active: 1 },
  { id: 3, name: '自己刷牙', coins: 1, icon_emoji: '🪥', icon_file: 'brush-teeth', is_active: 1 },
  { id: 4, name: '自己穿衣服', coins: 1, icon_emoji: '👗', icon_file: 'get-dressed', is_active: 1 },
  { id: 5, name: '整理玩具', coins: 1, icon_emoji: '🧺', icon_file: 'tidy-toys', is_active: 1 },
  { id: 6, name: '吃完蔬菜', coins: 2, icon_emoji: '🥦', icon_file: 'veggies', is_active: 1 },
  { id: 7, name: '帮妈妈做家务', coins: 2, icon_emoji: '🧹', icon_file: 'sweep', is_active: 1 },
  { id: 8, name: '读一本书', coins: 2, icon_emoji: '📚', icon_file: 'read-book', is_active: 1 },
];

const DEFAULT_REWARDS = [
  { id: 1, name: '巧克力', coins_cost: 1, icon_emoji: '🍫', icon_file: 'chocolate', category: 'real', is_active: 1 },
  { id: 2, name: '冰淇淋', coins_cost: 1, icon_emoji: '🍦', icon_file: 'ice-cream', category: 'real', is_active: 1 },
  { id: 3, name: '10 分钟 YouTube', coins_cost: 1, icon_emoji: '📺', icon_file: 'movie', category: 'real', is_active: 1 },
  { id: 4, name: '贴纸一张', coins_cost: 2, icon_emoji: '⭐', icon_file: 'stickers', category: 'real', is_active: 1 },
  { id: 5, name: '故事书一本', coins_cost: 3, icon_emoji: '📖', icon_file: 'books', category: 'real', is_active: 1 },
  { id: 6, name: '公园玩一次', coins_cost: 4, icon_emoji: '🌳', icon_file: 'park', category: 'real', is_active: 1 },
  { id: 7, name: '小熊玩偶', coins_cost: 8, icon_emoji: '🧸', icon_file: 'teddy', category: 'real', is_active: 1 },
  { id: 8, name: 'Bouncing House', coins_cost: 10, icon_emoji: '🎪', icon_file: 'playground', category: 'real', is_active: 1 },
  { id: 9, name: '动物园', coins_cost: 30, icon_emoji: '🦁', icon_file: 'zoo', category: 'real', is_active: 1 },
];

const SKINS = [
  { id: 'default', name: 'Kelly', cost: 0, emoji: '👧', desc: '默认造型', is_active: 1 },
  { id: 'princess', name: '粉色公主', cost: 15, emoji: '👑', desc: '梦幻公主装', is_active: 1 },
  { id: 'knight', name: '小骑士', cost: 20, emoji: '⚔️', desc: '勇敢的小骑士', is_active: 1 },
  { id: 'mermaid', name: '美人鱼', cost: 25, emoji: '🧜‍♀️', desc: '海底小公主', is_active: 1 },
  { id: 'astronaut', name: '小宇航员', cost: 30, emoji: '🚀', desc: '探索宇宙', is_active: 1 },
  { id: 'fairy', name: '花仙子', cost: 20, emoji: '🧚‍♀️', desc: '森林里的小精灵', is_active: 1 },
];

const ACHIEVEMENTS = [
  { id: 'first_task', name: '第一颗星', desc: '完成第一个任务', emoji: '🌟', tier: 'bronze', target: 1 },
  { id: 'ten_tasks', name: '小小达人', desc: '完成 10 个任务', emoji: '🏅', tier: 'bronze', target: 10 },
  { id: 'first_coin', name: '第一枚金币', desc: '赚到第一枚金币', emoji: '🪙', tier: 'bronze', target: 1 },
  { id: 'fifty_coins', name: '小富翁', desc: '累计赚到 50 枚金币', emoji: '💰', tier: 'silver', target: 50 },
  { id: 'first_redeem', name: '第一次兑换', desc: '申请一次奖励', emoji: '🎁', tier: 'bronze', target: 1 },
  { id: 'first_skin', name: '换装达人', desc: '购买一个新造型', emoji: '👗', tier: 'bronze', target: 1 },
];

const PLANT_TYPES = [
  { id: 'rose', name: '玫瑰', cost: 3, emoji: '🌹', stages: ['🌱', '🌿', '🌹'], grow_days: 3, harvest_coins: 5 },
  { id: 'tulip', name: '郁金香', cost: 2, emoji: '🌷', stages: ['🌱', '🌿', '🌷'], grow_days: 2, harvest_coins: 3 },
  { id: 'sunflower', name: '向日葵', cost: 5, emoji: '🌻', stages: ['🌱', '🌿', '🌻'], grow_days: 5, harvest_coins: 10 },
  { id: 'cactus', name: '小仙人掌', cost: 4, emoji: '🌵', stages: ['🌱', '🌿', '🌵'], grow_days: 4, harvest_coins: 8 },
];

const WHEEL_PRIZES = [
  { id: 'coin-1', label: '1 🪙', coins: 1, emoji: '🪙', palette: 'peach', weight: 28 },
  { id: 'coin-2', label: '2 🪙', coins: 2, emoji: '🪙', palette: 'butter', weight: 22 },
  { id: 'coin-3', label: '3 🪙', coins: 3, emoji: '✨', palette: 'rose', weight: 12 },
  { id: 'coin-5', label: '5 🪙', coins: 5, emoji: '💖', palette: 'mint', weight: 7 },
  { id: 'jackpot', label: '10 🪙', coins: 10, emoji: '🎁', palette: 'lavender', weight: 3 },
];

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function now() {
  return new Date().toISOString().replace('T', ' ').slice(0, 19);
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function nextId(rows) {
  return rows.length ? Math.max(...rows.map(r => Number(r.id) || 0)) + 1 : 1;
}

function levelFrom(totalEarned) {
  if (totalEarned >= 200) return 10;
  if (totalEarned >= 100) return 8;
  if (totalEarned >= 50) return 6;
  if (totalEarned >= 30) return 5;
  if (totalEarned >= 20) return 4;
  if (totalEarned >= 10) return 3;
  if (totalEarned >= 5) return 2;
  return 1;
}

function createSeed() {
  return {
    version: 1,
    children: {
      kelly: childSeed('Kelly', 4),
      selina: childSeed('Selina', 0),
    },
    tasks: clone(DEFAULT_TASKS),
    rewards: clone(DEFAULT_REWARDS),
    transactions: [],
    redemptions: [],
    pending_actions: [],
    skins: clone(SKINS),
    gardens: {},
    notifications: [],
    voice_messages: [],
    photos: [],
    parent_settings: { pin_hash: null },
  };
}

function childSeed(name, age) {
  return {
    name,
    age,
    coins: 0,
    avatar: 'default',
    level: 1,
    total_earned: 0,
    owned_skins: ['default'],
    equipped_skin: 'default',
    unlocked_achievements: [],
    active_goal: null,
    daily_quest: null,
    inventory: [],
    streak: { count: 0, last_active: null, longest: 0 },
    wheel: { last_shift: null, spins_in_shift: 0, total_spins: 0 },
    wheel_unlimited: true,
  };
}

function normalize(db) {
  const seed = createSeed();
  db.children ||= {};
  for (const [id, child] of Object.entries(seed.children)) {
    db.children[id] ||= child;
  }
  db.tasks ||= clone(DEFAULT_TASKS);
  db.rewards ||= clone(DEFAULT_REWARDS);
  db.transactions ||= [];
  db.redemptions ||= [];
  db.pending_actions ||= [];
  db.skins ||= clone(SKINS);
  db.gardens ||= {};
  db.notifications ||= [];
  db.voice_messages ||= [];
  db.photos ||= [];
  db.parent_settings ||= { pin_hash: null };
  for (const child of Object.values(db.children)) {
    child.owned_skins ||= ['default'];
    child.equipped_skin ||= 'default';
    child.inventory ||= [];
    child.streak ||= { count: 0, last_active: null, longest: 0 };
    child.unlocked_achievements ||= [];
    child.total_earned ||= child.coins || 0;
    child.level ||= levelFrom(child.total_earned);
    child.wheel ||= { last_shift: null, spins_in_shift: 0, total_spins: 0 };
    if (child.wheel_unlimited === undefined) child.wheel_unlimited = true;
  }
  return db;
}

export function readDb() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return normalize(JSON.parse(raw));
  } catch (_) {}
  const db = createSeed();
  writeDb(db);
  return db;
}

export function writeDb(db) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(normalize(db)));
}

function mutate(fn) {
  const db = readDb();
  const result = fn(db);
  writeDb(db);
  return clone(result);
}

function childEntry(db, childId = 'kelly') {
  if (!db.children[childId]) db.children[childId] = childSeed(childId, 0);
  return db.children[childId];
}

function publicChildren(db) {
  return Object.entries(db.children).map(([id, c]) => ({ id, ...clone(c) }));
}

function getTask(db, id) {
  return db.tasks.find(t => String(t.id) === String(id));
}

function getReward(db, id) {
  return db.rewards.find(r => String(r.id) === String(id));
}

function addTransaction(db, childId, row) {
  const txn = {
    id: nextId(db.transactions),
    child_id: childId,
    task_id: row.task_id ?? null,
    task_name: row.task_name || row.note || '手动调整',
    coins_earned: Number(row.coins_earned || 0),
    created_at: now(),
  };
  db.transactions.push(txn);
  return txn;
}

function addCoins(db, childId, amount) {
  const child = childEntry(db, childId);
  child.coins = Math.max(0, Number(child.coins || 0) + Number(amount || 0));
  if (amount > 0) {
    child.total_earned = Number(child.total_earned || 0) + Number(amount);
    child.level = levelFrom(child.total_earned);
  }
  return child.coins;
}

function updateStreak(db, childId) {
  const child = childEntry(db, childId);
  const today = todayKey();
  if (child.streak?.last_active === today) return child.streak;
  const last = child.streak?.last_active;
  let count = 1;
  if (last) {
    const diff = Math.round((new Date(today) - new Date(last)) / 86400000);
    count = diff === 1 ? Number(child.streak.count || 0) + 1 : 1;
  }
  child.streak = {
    count,
    last_active: today,
    longest: Math.max(Number(child.streak?.longest || 0), count),
  };
  return child.streak;
}

function achievementProgress(db, childId, item) {
  const child = childEntry(db, childId);
  const earnTxns = db.transactions.filter(t => t.child_id === childId && t.coins_earned > 0 && t.task_id);
  if (item.id === 'first_task') return Math.min(earnTxns.length, 1);
  if (item.id === 'ten_tasks') return Math.min(earnTxns.length, 10);
  if (item.id === 'first_coin') return Math.min(child.total_earned || 0, 1);
  if (item.id === 'fifty_coins') return Math.min(child.total_earned || 0, 50);
  if (item.id === 'first_redeem') return db.redemptions.some(r => r.child_id === childId) ? 1 : 0;
  if (item.id === 'first_skin') return (child.owned_skins || []).length > 1 ? 1 : 0;
  return 0;
}

function achievementsFor(db, childId) {
  const child = childEntry(db, childId);
  const unlocked = new Set(child.unlocked_achievements || []);
  return ACHIEVEMENTS.map(a => ({
    ...a,
    unlocked: unlocked.has(a.id),
    progress: achievementProgress(db, childId, a),
  }));
}

function checkAchievements(db, childId) {
  const child = childEntry(db, childId);
  const newly = [];
  for (const a of ACHIEVEMENTS) {
    if (child.unlocked_achievements.includes(a.id)) continue;
    if (achievementProgress(db, childId, a) >= a.target) {
      child.unlocked_achievements.push(a.id);
      newly.push(a);
    }
  }
  return newly;
}

function currentShiftId() {
  const d = new Date();
  const ymd = d.toISOString().slice(0, 10);
  return `${ymd}-${d.getHours() < 12 ? 'AM' : 'PM'}`;
}

function wheelStatusFor(child) {
  const shiftId = currentShiftId();
  const unlimited = !!child.wheel_unlimited;
  const canSpin = unlimited || child.wheel.last_shift !== shiftId || child.wheel.spins_in_shift < 1;
  return {
    canSpin,
    unlimited,
    shiftId,
    spinsInShift: child.wheel.last_shift === shiftId ? child.wheel.spins_in_shift : 0,
    spinsPerShift: 1,
    totalSpins: child.wheel.total_spins || 0,
    nextWindow: canSpin ? null : { when: 'tomorrow', label: '下一次' },
    prizes: WHEEL_PRIZES.map(({ weight, ...p }) => p),
  };
}

function pickPrize() {
  const total = WHEEL_PRIZES.reduce((sum, p) => sum + p.weight, 0);
  let r = Math.random() * total;
  for (const prize of WHEEL_PRIZES) {
    r -= prize.weight;
    if (r <= 0) return prize;
  }
  return WHEEL_PRIZES[0];
}

function pendingPayload(reward) {
  return {
    reward_id: reward.id,
    name: reward.name,
    coins_cost: reward.coins_cost,
    icon_file: reward.icon_file,
    icon_emoji: reward.icon_emoji,
    category: reward.category,
  };
}

function applyApprovedAction(db, action) {
  if (action.action_type === 'purchase') {
    return purchaseItemInDb(db, action.child_id, action.payload.reward_id);
  }
  if (action.action_type === 'redeem_inventory') {
    return redeemInventoryInDb(db, action.child_id, action.payload.reward_id);
  }
  if (action.action_type === 'redeem_goal') {
    return legacyRedeemInDb(db, action.child_id, action.payload.reward_id);
  }
  return { error: 'unknown_action_type' };
}

function purchaseItemInDb(db, childId, rewardId) {
  const child = childEntry(db, childId);
  const reward = getReward(db, rewardId);
  if (!reward || !reward.is_active) return { error: '找不到奖励' };
  if (child.coins < reward.coins_cost) return { error: '金币不够' };
  child.coins -= Number(reward.coins_cost || 0);
  const entry = child.inventory.find(i => String(i.reward_id) === String(reward.id));
  if (entry) entry.quantity += 1;
  else child.inventory.push({ reward_id: reward.id, quantity: 1, purchased_at: now() });
  addTransaction(db, childId, { task_name: `购买：${reward.name}`, coins_earned: -reward.coins_cost });
  return { success: true, new_balance: child.coins };
}

function redeemInventoryInDb(db, childId, rewardId) {
  const child = childEntry(db, childId);
  const reward = getReward(db, rewardId);
  if (!reward) return { error: '找不到奖励' };
  const entry = child.inventory.find(i => String(i.reward_id) === String(reward.id));
  if (!entry || entry.quantity <= 0) return { error: '背包里没有这个奖励' };
  entry.quantity -= 1;
  if (entry.quantity <= 0) child.inventory = child.inventory.filter(i => i !== entry);
  const redemption = {
    id: nextId(db.redemptions),
    child_id: childId,
    reward_id: reward.id,
    reward_name: reward.name,
    coins_spent: 0,
    status: 'approved',
    created_at: now(),
  };
  db.redemptions.push(redemption);
  return { success: true, redemption };
}

function legacyRedeemInDb(db, childId, rewardId) {
  const child = childEntry(db, childId);
  const reward = getReward(db, rewardId);
  if (!reward || !reward.is_active) return { error: '奖励不存在' };
  if (child.coins < reward.coins_cost) return { error: '金币不够' };
  child.coins -= Number(reward.coins_cost || 0);
  const redemption = {
    id: nextId(db.redemptions),
    child_id: childId,
    reward_id: reward.id,
    reward_name: reward.name,
    coins_spent: reward.coins_cost,
    status: 'pending',
    created_at: now(),
  };
  db.redemptions.push(redemption);
  addTransaction(db, childId, { task_name: `兑换：${reward.name}`, coins_earned: -reward.coins_cost });
  checkAchievements(db, childId);
  return { success: true, new_balance: child.coins, redemption };
}

export function childProfile(childId) {
  const db = readDb();
  const child = childEntry(db, childId);
  writeDb(db);
  return clone({
    success: true,
    coins: child.coins,
    name: child.name,
    level: child.level,
    avatar: child.avatar,
    equipped_skin: child.equipped_skin || 'default',
  });
}

export function childrenList() {
  return { success: true, data: publicChildren(readDb()) };
}

export function tasksList(activeOnly = true) {
  const rows = readDb().tasks.filter(t => !activeOnly || t.is_active);
  return { success: true, data: clone(rows) };
}

export function rewardsList(activeOnly = true) {
  const rows = readDb().rewards.filter(r => !activeOnly || r.is_active);
  return { success: true, data: clone(rows) };
}

export function earnTask(childId, taskId) {
  return mutate(db => {
    const task = getTask(db, taskId);
    if (!task || !task.is_active) return { success: false, message: '任务不存在' };
    const quest = dailyQuestInDb(db, childId);
    let coinsEarned = Number(task.coins || 0);
    let dailyQuestBonus = false;
    if (quest && String(quest.task_id) === String(task.id) && !quest.completed) {
      coinsEarned *= Number(quest.multiplier || 2);
      quest.completed = true;
      dailyQuestBonus = true;
    }
    const newBalance = addCoins(db, childId, coinsEarned);
    addTransaction(db, childId, { task_id: task.id, task_name: task.name, coins_earned: coinsEarned });
    const streak = updateStreak(db, childId);
    const newly = checkAchievements(db, childId);
    const child = childEntry(db, childId);
    return {
      success: true,
      new_balance: newBalance,
      coins_earned: coinsEarned,
      new_level: child.level,
      task_name: task.name,
      daily_quest_bonus: dailyQuestBonus,
      streak: streak.count,
      newly_unlocked: newly,
    };
  });
}

export function gameReward(childId, gameId, coins) {
  return mutate(db => {
    const amount = Math.max(0, Math.min(5, Math.floor(Number(coins) || 0)));
    const newBalance = addCoins(db, childId, amount);
    if (amount) addTransaction(db, childId, { task_name: `小游戏：${gameId}`, coins_earned: amount });
    return { success: true, new_balance: newBalance, coins_earned: amount, new_level: childEntry(db, childId).level };
  });
}

export function historyList(childId = null, limit = 50) {
  let rows = [...readDb().transactions];
  if (childId) rows = rows.filter(t => t.child_id === childId);
  return { success: true, data: clone(rows.reverse().slice(0, limit)) };
}

export function skinsForChild(childId) {
  const db = readDb();
  const child = childEntry(db, childId);
  const owned = new Set(child.owned_skins || ['default']);
  return {
    success: true,
    data: db.skins.filter(s => s.is_active).map(s => ({
      ...clone(s),
      owned: owned.has(s.id),
      equipped: child.equipped_skin === s.id,
    })),
  };
}

export function buySkin(childId, skinId) {
  return mutate(db => {
    const child = childEntry(db, childId);
    const skin = db.skins.find(s => s.id === skinId);
    if (!skin) return { success: false, message: '找不到皮肤' };
    if (child.owned_skins.includes(skinId)) return { success: false, message: '已经拥有' };
    if (child.coins < skin.cost) return { success: false, message: '金币不够' };
    child.coins -= skin.cost;
    child.owned_skins.push(skinId);
    addTransaction(db, childId, { task_name: `购买皮肤：${skin.name}`, coins_earned: -skin.cost });
    checkAchievements(db, childId);
    return { success: true, new_balance: child.coins };
  });
}

export function equipSkin(childId, skinId) {
  return mutate(db => {
    const child = childEntry(db, childId);
    if (!child.owned_skins.includes(skinId)) return { success: false, message: '还没有拥有' };
    child.equipped_skin = skinId;
    return { success: true, equipped_skin: skinId };
  });
}

export function inventoryList(childId) {
  const db = readDb();
  const child = childEntry(db, childId);
  return {
    success: true,
    data: child.inventory.map(entry => {
      const reward = getReward(db, entry.reward_id);
      return reward ? { ...clone(entry), ...clone(reward) } : null;
    }).filter(Boolean),
  };
}

export function purchaseItem(childId, rewardId) {
  return mutate(db => purchaseItemInDb(db, childId, rewardId));
}

export function redeemFromInventory(childId, rewardId) {
  return mutate(db => redeemInventoryInDb(db, childId, rewardId));
}

export function legacyRedeem(childId, rewardId) {
  return mutate(db => legacyRedeemInDb(db, childId, rewardId));
}

export function achievements(childId) {
  return { success: true, data: achievementsFor(readDb(), childId) };
}

export function streak(childId) {
  return { success: true, data: clone(childEntry(readDb(), childId).streak || { count: 0, longest: 0 }) };
}

export function goal(childId) {
  const db = readDb();
  const child = childEntry(db, childId);
  const reward = child.active_goal ? getReward(db, child.active_goal) : null;
  if (!reward) return { success: true, data: null };
  return {
    success: true,
    data: {
      reward: clone(reward),
      progress: child.coins,
      target: reward.coins_cost,
      percent: Math.min(100, Math.round((child.coins / reward.coins_cost) * 100)),
      remaining: Math.max(0, reward.coins_cost - child.coins),
    },
  };
}

export function setGoal(childId, rewardId) {
  return mutate(db => {
    childEntry(db, childId).active_goal = rewardId ? Number(rewardId) : null;
    return { success: true, active_goal: rewardId ? Number(rewardId) : null };
  });
}

function dailyQuestInDb(db, childId) {
  const child = childEntry(db, childId);
  const today = todayKey();
  if (child.daily_quest && child.daily_quest.date === today) return child.daily_quest;
  const active = db.tasks.filter(t => t.is_active);
  if (!active.length) return null;
  const task = active[Math.floor(Math.random() * active.length)];
  child.daily_quest = {
    date: today,
    task_id: task.id,
    task_name: task.name,
    icon: task.icon_emoji,
    multiplier: 2,
    completed: false,
  };
  return child.daily_quest;
}

export function dailyQuest(childId) {
  return mutate(db => ({ success: true, data: dailyQuestInDb(db, childId) }));
}

export function plantTypes() {
  return { success: true, data: clone(PLANT_TYPES) };
}

export function garden(childId) {
  return mutate(db => {
    db.gardens[childId] ||= { plants: [] };
    return { success: true, data: db.gardens[childId] };
  });
}

export function plantSeed(childId, plantType) {
  return mutate(db => {
    const child = childEntry(db, childId);
    const type = PLANT_TYPES.find(p => p.id === plantType);
    if (!type) return { success: false, message: '无效种子' };
    if (child.coins < type.cost) return { success: false, message: '金币不够' };
    child.coins -= type.cost;
    db.gardens[childId] ||= { plants: [] };
    const plant = { id: Date.now(), type: type.id, planted_at: now(), last_watered: now(), stage: 0, is_mature: false };
    db.gardens[childId].plants.push(plant);
    addTransaction(db, childId, { task_name: `种植：${type.name}`, coins_earned: -type.cost });
    return { success: true, plant, new_balance: child.coins };
  });
}

export function waterPlant(childId, plantId) {
  return mutate(db => {
    const gardenState = db.gardens[childId] || { plants: [] };
    const plant = gardenState.plants.find(p => String(p.id) === String(plantId));
    if (!plant) return { success: false, message: '找不到植物' };
    plant.last_watered = now();
    plant.stage = Math.min(2, Number(plant.stage || 0) + 1);
    plant.is_mature = plant.stage >= 2;
    return { success: true, plant };
  });
}

export function harvestPlant(childId, plantId) {
  return mutate(db => {
    const gardenState = db.gardens[childId] || { plants: [] };
    const idx = gardenState.plants.findIndex(p => String(p.id) === String(plantId));
    if (idx < 0) return { success: false, message: '找不到植物' };
    const plant = gardenState.plants[idx];
    const type = PLANT_TYPES.find(p => p.id === plant.type) || PLANT_TYPES[0];
    if (!plant.is_mature) return { success: false, message: '还没长大' };
    gardenState.plants.splice(idx, 1);
    const newBalance = addCoins(db, childId, type.harvest_coins);
    addTransaction(db, childId, { task_name: `收获：${type.name}`, coins_earned: type.harvest_coins });
    return { success: true, reward: type.harvest_coins, new_balance: newBalance };
  });
}

export function holiday() {
  return { success: true, data: null };
}

export function themes() {
  return { success: true, data: [] };
}

export function setChildTheme() {
  return { success: true };
}

export function wheelStatus(childId) {
  const db = readDb();
  return { success: true, ...wheelStatusFor(childEntry(db, childId)) };
}

export function spinWheel(childId) {
  return mutate(db => {
    const child = childEntry(db, childId);
    const status = wheelStatusFor(child);
    if (!status.canSpin) return { status: 429, success: false, cooldown: true, nextWindow: status.nextWindow };
    const shift = currentShiftId();
    if (child.wheel.last_shift !== shift) {
      child.wheel.last_shift = shift;
      child.wheel.spins_in_shift = 0;
    }
    child.wheel.spins_in_shift += 1;
    child.wheel.total_spins = Number(child.wheel.total_spins || 0) + 1;
    const prize = pickPrize();
    const newBalance = addCoins(db, childId, prize.coins);
    addTransaction(db, childId, { task_name: `幸运转盘：${prize.label}`, coins_earned: prize.coins });
    return {
      success: true,
      prize_id: prize.id,
      prize_index: WHEEL_PRIZES.findIndex(p => p.id === prize.id),
      coins: prize.coins,
      label: prize.label,
      new_balance: newBalance,
      status: wheelStatusFor(child),
    };
  });
}

export function createPendingPurchase(childId, rewardId) {
  return mutate(db => {
    const reward = getReward(db, rewardId);
    const child = childEntry(db, childId);
    if (!reward || !reward.is_active) return { success: false, message: '奖励不存在' };
    if (child.coins < reward.coins_cost) return { success: false, message: '金币不够' };
    const action = {
      id: nextId(db.pending_actions),
      child_id: childId,
      action_type: 'purchase',
      payload: pendingPayload(reward),
      status: 'pending',
      created_at: new Date().toISOString(),
      resolved_at: null,
      resolved_by: null,
    };
    db.pending_actions.push(action);
    return { success: true, action };
  });
}

export function createPendingRedeem(childId, rewardId) {
  return mutate(db => {
    const reward = getReward(db, rewardId);
    const inv = childEntry(db, childId).inventory;
    if (!reward) return { success: false, message: '奖励不存在' };
    if (!inv.some(i => String(i.reward_id) === String(reward.id) && i.quantity > 0)) {
      return { success: false, message: '背包里没有这个奖励' };
    }
    const action = {
      id: nextId(db.pending_actions),
      child_id: childId,
      action_type: 'redeem_inventory',
      payload: pendingPayload(reward),
      status: 'pending',
      created_at: new Date().toISOString(),
      resolved_at: null,
      resolved_by: null,
    };
    db.pending_actions.push(action);
    return { success: true, action };
  });
}

export function pendingAction(id) {
  const action = readDb().pending_actions.find(a => String(a.id) === String(id));
  return action ? { success: true, action: clone(action) } : { success: false };
}

export function cancelPendingAction(id) {
  return mutate(db => {
    const action = db.pending_actions.find(a => String(a.id) === String(id));
    if (!action) return { success: false };
    if (action.status === 'pending') {
      action.status = 'cancelled';
      action.resolved_at = new Date().toISOString();
      action.resolved_by = 'child';
    }
    return { success: true, action };
  });
}

export function pendingActions() {
  const rows = [...readDb().pending_actions].reverse();
  return {
    success: true,
    data: {
      pending: clone(rows.filter(a => a.status === 'pending')),
      recent: clone(rows.slice(0, 20)),
    },
  };
}

export function approveAction(id) {
  return mutate(db => {
    const action = db.pending_actions.find(a => String(a.id) === String(id));
    if (!action) return { success: false };
    if (action.status !== 'pending') return { success: false, error: 'already_resolved' };
    const result = applyApprovedAction(db, action);
    if (result.error) {
      action.status = 'rejected';
      action.error = result.error;
    } else {
      action.status = 'approved';
      action.result = result;
    }
    action.resolved_at = new Date().toISOString();
    action.resolved_by = 'parent';
    checkAchievements(db, action.child_id);
    return { success: true, action };
  });
}

export function rejectAction(id, reason = null) {
  return mutate(db => {
    const action = db.pending_actions.find(a => String(a.id) === String(id));
    if (!action) return { success: false };
    if (action.status === 'pending') {
      action.status = 'rejected';
      action.reason = reason;
      action.resolved_at = new Date().toISOString();
      action.resolved_by = 'parent';
    }
    return { success: true, action };
  });
}

export function pendingRedemptions(childId = null) {
  let rows = readDb().redemptions.filter(r => r.status === 'pending');
  if (childId) rows = rows.filter(r => r.child_id === childId);
  return { success: true, data: clone(rows.reverse()) };
}

export function approveRedemption(id) {
  return mutate(db => {
    const row = db.redemptions.find(r => String(r.id) === String(id));
    if (!row) return { success: false };
    row.status = 'approved';
    return { success: true, message: '已批准' };
  });
}

export function rejectRedemption(id) {
  return mutate(db => {
    const row = db.redemptions.find(r => String(r.id) === String(id));
    if (!row) return { success: false };
    row.status = 'rejected';
    if (row.coins_spent > 0) {
      addCoins(db, row.child_id, row.coins_spent);
      addTransaction(db, row.child_id, { task_name: `退回：${row.reward_name}`, coins_earned: row.coins_spent });
    }
    return { success: true, message: '已拒绝' };
  });
}

export function upsertChild(id, fields) {
  return mutate(db => {
    const child = childEntry(db, id);
    Object.assign(child, fields || {});
    return { success: true, data: { id, ...child } };
  });
}

export function createChild(data) {
  const id = (data.id || data.name || `child-${Date.now()}`).toString().trim().toLowerCase().replace(/\s+/g, '-');
  return upsertChild(id, { name: data.name || id, age: Number(data.age || 0) });
}

export function createTask(data) {
  return mutate(db => {
    const row = {
      id: nextId(db.tasks),
      name: data.name || '新任务',
      coins: Number(data.coins || 1),
      icon_emoji: data.icon_emoji || '⭐',
      icon_file: data.icon_file || null,
      duration_minutes: data.duration_minutes || null,
      coins_per_interval: data.coins_per_interval || null,
      is_active: 1,
    };
    db.tasks.push(row);
    return { success: true, data: row };
  });
}

export function updateTask(id, fields) {
  return mutate(db => {
    const row = getTask(db, id);
    if (!row) return { success: false };
    Object.assign(row, fields || {});
    return { success: true, data: row };
  });
}

export function createReward(data) {
  return mutate(db => {
    const row = {
      id: nextId(db.rewards),
      name: data.name || '新奖励',
      coins_cost: Number(data.coins_cost || 1),
      icon_emoji: data.icon_emoji || '🎁',
      icon_file: data.icon_file || null,
      category: data.category || 'real',
      is_active: 1,
    };
    db.rewards.push(row);
    return { success: true, data: row };
  });
}

export function updateReward(id, fields) {
  return mutate(db => {
    const row = getReward(db, id);
    if (!row) return { success: false };
    Object.assign(row, fields || {});
    return { success: true, data: row };
  });
}

export function adjustCoins(childId, coins, note) {
  return mutate(db => {
    const amount = Number(coins || 0);
    const newBalance = addCoins(db, childId || 'kelly', amount);
    addTransaction(db, childId || 'kelly', { task_name: note || '手动调整', coins_earned: amount });
    return { success: true, new_balance: newBalance };
  });
}

export function notifications(childId, unreadOnly = false) {
  let rows = readDb().notifications.filter(n => n.child_id === childId);
  if (unreadOnly) rows = rows.filter(n => !n.read);
  return { success: true, data: clone(rows.reverse()) };
}

export function markVoicePlayed() {
  return { success: true };
}

export function emptyList() {
  return { success: true, data: [] };
}

export function authStatus() {
  return { success: true, has_pin: false, configured: false, static_mode: true, vapid_public_key: null };
}

export function authOk() {
  return { success: true, token: 'static-parent' };
}

export function createBackup() {
  const db = readDb();
  const backups = listStoredBackups();
  const filename = `kelly-coins-static-${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
  backups.unshift({
    filename,
    created: new Date().toISOString(),
    size: JSON.stringify(db).length,
    data: db,
  });
  localStorage.setItem(BACKUP_KEY, JSON.stringify(backups.slice(0, 20)));
  return { success: true, data: { filename } };
}

function listStoredBackups() {
  try { return JSON.parse(localStorage.getItem(BACKUP_KEY) || '[]'); } catch (_) { return []; }
}

export function backups() {
  return {
    success: true,
    data: listStoredBackups().map(({ data, ...meta }) => meta),
  };
}

export function restoreBackup(filename) {
  const backup = listStoredBackups().find(b => b.filename === filename);
  if (!backup) return { success: false, message: '备份不存在' };
  writeDb(backup.data);
  return { success: true };
}

export function reports() {
  return { success: true, data: [] };
}

export function generateReport() {
  return { success: true, data: null };
}

export function iconCatalog() {
  return { success: true, data: clone(ICON_CATALOG) };
}

export function weather() {
  return { success: true, condition: 'clear', temperature: 72, is_day: true };
}

export function verifyVoiceStatic() {
  return { success: true, matches: false, transcript: '' };
}
