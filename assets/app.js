/* ============================================================
 * 交互逻辑
 * ------------------------------------------------------------
 * 核心思路：
 *   1. 用户输入关键词（可为空）
 *   2. 点击站点卡片 → 若该站 url 含 {q} 且关键词非空，
 *      则用关键词替换 {q} 后在新标签打开；否则打开首页
 *   3. 主题 / 当前分类记忆到 localStorage
 * ============================================================ */

(function () {
  'use strict';

  var KEY = { theme: 'qs.theme', tab: 'qs.tab' };
  var GROUPS = window.GROUPS || [];
  var SITES = window.SITES || [];

  var $ = function (sel) { return document.querySelector(sel); };
  function load(k, d) { try { var v = localStorage.getItem(k); return v === null ? d : v; } catch (e) { return d; } }
  function save(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  var state = {
    theme: load(KEY.theme, 'light'),
    tab: load(KEY.tab, GROUPS[0] || '')
  };

  var kwInput = $('#kw');
  var clearBtn = $('#clearBtn');
  var tabsEl = $('#tabs');
  var gridEl = $('#grid');
  var emptyEl = $('#empty');

  /* ---------- 主题 ---------- */
  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    $('#themeBtn').textContent = t === 'dark' ? '☀️' : '🌙';
    document.querySelector('meta[name="theme-color"]')
      .setAttribute('content', t === 'dark' ? '#16181d' : '#ffffff');
  }
  $('#themeBtn').addEventListener('click', function () {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    save(KEY.theme, state.theme);
    applyTheme(state.theme);
  });

  /* ---------- 关键词 ---------- */
  function syncClear() { clearBtn.classList.toggle('show', !!kwInput.value); }
  kwInput.addEventListener('input', syncClear);
  function clearKw() { kwInput.value = ''; syncClear(); kwInput.focus(); }
  clearBtn.addEventListener('click', clearKw);

  function getKeyword() { return kwInput.value.trim(); }
  function openSite(site) {
    var q = getKeyword();
    var target = site.home || site.url;
    if (q && site.url && site.url.indexOf('{q}') !== -1) {
      target = site.url.replace('{q}', encodeURIComponent(q));
    }
    window.open(target, '_blank', 'noopener');
  }
  function searchDefault() {
    var q = getKeyword();
    if (!q) { kwInput.focus(); return; }
    // 默认搜索引擎：取第一个带 {q} 的站点
    var def = SITES.filter(function (s) { return s.url && s.url.indexOf('{q}') !== -1; })[0];
    if (def) openSite(def);
  }
  $('#searchBtn').addEventListener('click', searchDefault);

  /* ---------- 分类标签 ---------- */
  function renderTabs() {
    tabsEl.innerHTML = GROUPS.map(function (g) {
      return '<button class="tab' + (g === state.tab ? ' active' : '') +
             '" data-grp="' + g + '">' + g + '</button>';
    }).join('');
  }
  tabsEl.addEventListener('click', function (e) {
    var btn = e.target.closest('.tab');
    if (!btn) return;
    state.tab = btn.dataset.grp;
    save(KEY.tab, state.tab);
    renderTabs();
    renderGrid();
  });

  /* ---------- 站点卡片 ---------- */
  function renderGrid() {
    var list = SITES.filter(function (s) { return s.grp === state.tab; });
    gridEl.innerHTML = list.map(function (s) {
      return '<a class="card" href="' + (s.home || s.url) + '" data-id="' + s.id +
             '" target="_blank" rel="noopener" title="' + s.name + '">' +
               '<span class="card-icon">' + (s.icon || '🔗') + '</span>' +
               '<span class="card-name">' + s.name + '</span>' +
             '</a>';
    }).join('');
    emptyEl.hidden = list.length > 0;
  }
  gridEl.addEventListener('click', function (e) {
    var card = e.target.closest('.card');
    if (!card) return;
    e.preventDefault();
    var site = SITES.filter(function (s) { return s.id === card.dataset.id; })[0];
    if (site) openSite(site);
  });

  /* ---------- 快捷键 ---------- */
  document.addEventListener('keydown', function (e) {
    if (e.key === '/' && document.activeElement !== kwInput) {
      e.preventDefault();
      kwInput.focus();
      kwInput.select();
    }
    if (e.key === 'Escape') {
      if (document.activeElement === kwInput) clearKw();
    }
    if (e.key === 'Enter' && document.activeElement === kwInput) {
      e.preventDefault();
      searchDefault();
    }
  });

  /* ---------- 初始化 ---------- */
  applyTheme(state.theme);
  renderTabs();
  renderGrid();
  syncClear();
})();
