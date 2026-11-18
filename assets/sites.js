/* ============================================================
 * 站点数据配置
 * ------------------------------------------------------------
 * 每一个站点对象：
 *   id   唯一标识
 *   name 显示名称
 *   grp  所属分类（必须出现在下面的 GROUPS 里）
 *   url  搜索地址模板，用 {q} 代表关键词；没有 {q} 则直接打开首页
 *   home （可选）站点首页地址，用于无关键词时跳转
 *   icon （可选）图标 emoji
 *
 * 想增删站点，只改这个文件即可，无需动其他代码。
 * ============================================================ */

window.GROUPS = [
  '综合搜索',
  'AI 搜索',
  '学术科研',
  '开发工具',
  '设计素材',
  '社区内容',
  '金融理财',
  '效率办公',
  '购物电商',
  '实用工具'
];

window.SITES = [
  // ---------- 综合搜索 ----------
  { id: 'baidu',   name: '百度',        grp: '综合搜索', icon: '🔍', url: 'https://www.baidu.com/s?wd={q}',   home: 'https://www.baidu.com' },
  { id: 'bing',    name: '必应',        grp: '综合搜索', icon: '🅱️',  url: 'https://www.bing.com/search?q={q}', home: 'https://www.bing.com' },
  { id: 'google',  name: 'Google',      grp: '综合搜索', icon: '🌐', url: 'https://www.google.com/search?q={q}', home: 'https://www.google.com' },
  { id: 'sogou',   name: '搜狗',        grp: '综合搜索', icon: '🐶', url: 'https://www.sogou.com/web?query={q}', home: 'https://www.sogou.com' },
  { id: 'ddg',     name: 'DuckDuckGo',  grp: '综合搜索', icon: '🦆', url: 'https://duckduckgo.com/?q={q}',     home: 'https://duckduckgo.com' },

  // ---------- AI 搜索 ----------
  { id: 'yuanbao', name: '腾讯元宝',    grp: 'AI 搜索', icon: '💎', home: 'https://yuanbao.tencent.com' },
  { id: 'kimi',    name: 'Kimi',        grp: 'AI 搜索', icon: '🤖', home: 'https://kimi.moonshot.cn' },
  { id: 'doubao',  name: '豆包',        grp: 'AI 搜索', icon: '🫘', home: 'https://www.doubao.com' },
  { id: 'perplexity', name: 'Perplexity', grp: 'AI 搜索', icon: '🔮', home: 'https://www.perplexity.ai' },
  { id: 'metaso',  name: '秘塔搜索',    grp: 'AI 搜索', icon: '⚡', url: 'https://metaso.cn/?q={q}',          home: 'https://metaso.cn' },

  // ---------- 学术科研 ----------
  { id: 'scholar', name: '谷歌学术',    grp: '学术科研', icon: '🎓', url: 'https://scholar.google.com/scholar?q={q}', home: 'https://scholar.google.com' },
  { id: 'cnki',    name: '知网',        grp: '学术科研', icon: '📚', home: 'https://www.cnki.net' },
  { id: 'pubmed',  name: 'PubMed',      grp: '学术科研', icon: '🧬', url: 'https://pubmed.ncbi.nlm.nih.gov/?term={q}', home: 'https://pubmed.ncbi.nlm.nih.gov' },
  { id: 'arxiv',   name: 'arXiv',       grp: '学术科研', icon: '📄', home: 'https://arxiv.org' },
  { id: 'baiduxueshu', name: '百度学术', grp: '学术科研', icon: '📖', url: 'https://xueshu.baidu.com/s?wd={q}', home: 'https://xueshu.baidu.com' },
  { id: 'connected', name: 'Connected Papers', grp: '学术科研', icon: '🔗', home: 'https://www.connectedpapers.com' },

  // ---------- 开发工具 ----------
  { id: 'github',  name: 'GitHub',      grp: '开发工具', icon: '🐙', url: 'https://github.com/search?q={q}', home: 'https://github.com' },
  { id: 'npm',     name: 'npm',         grp: '开发工具', icon: '📦', url: 'https://www.npmjs.com/search?q={q}', home: 'https://www.npmjs.com' },
  { id: 'stackoverflow', name: 'Stack Overflow', grp: '开发工具', icon: '📐', url: 'https://stackoverflow.com/search?q={q}', home: 'https://stackoverflow.com' },
  { id: 'mdn',     name: 'MDN',         grp: '开发工具', icon: '📘', url: 'https://developer.mozilla.org/zh-CN/search?q={q}', home: 'https://developer.mozilla.org' },
  { id: 'wolfram', name: 'Wolfram Alpha', grp: '开发工具', icon: '∑', url: 'https://www.wolframalpha.com/input?i={q}', home: 'https://www.wolframalpha.com' },

  // ---------- 设计素材 ----------
  { id: 'iconfont', name: 'iconfont',   grp: '设计素材', icon: '🎨', home: 'https://www.iconfont.cn' },
  { id: 'unsplash', name: 'Unsplash',   grp: '设计素材', icon: '🖼️', url: 'https://unsplash.com/s/photos/{q}', home: 'https://unsplash.com' },
  { id: 'images',  name: '必应图片',    grp: '设计素材', icon: '🌅', url: 'https://www.bing.com/images/search?q={q}', home: 'https://www.bing.com/images' },

  // ---------- 社区内容 ----------
  { id: 'zhihu',   name: '知乎',        grp: '社区内容', icon: '🧠', url: 'https://www.zhihu.com/search?type=content&q={q}', home: 'https://www.zhihu.com' },
  { id: 'weibo',   name: '微博',        grp: '社区内容', icon: '🔥', url: 'https://s.weibo.com/weibo?q={q}', home: 'https://weibo.com' },
  { id: 'bilibili',name: '哔哩哔哩',    grp: '社区内容', icon: '📺', url: 'https://search.bilibili.com/all?keyword={q}', home: 'https://www.bilibili.com' },
  { id: 'xhs',     name: '小红书',      grp: '社区内容', icon: '📕', home: 'https://www.xiaohongshu.com' },

  // ---------- 金融理财 ----------
  { id: 'xueqiu',   name: '雪球',        grp: '金融理财', icon: '⛄', url: 'https://xueqiu.com/k?q={q}',              home: 'https://xueqiu.com' },
  { id: 'eastmoney',name: '东方财富',    grp: '金融理财', icon: '📈', url: 'https://so.eastmoney.com/web/s?keyword={q}', home: 'https://www.eastmoney.com' },
  { id: 'ths',      name: '同花顺',      grp: '金融理财', icon: '📊', home: 'https://www.10jqka.com.cn' },
  { id: 'iwencai',  name: '问财',        grp: '金融理财', icon: '💹', url: 'https://www.iwencai.com/unifiedwap/result?w={q}', home: 'https://www.iwencai.com' },
  { id: 'jisilu',   name: '集思录',      grp: '金融理财', icon: '🧮', home: 'https://www.jisilu.cn' },
  { id: 'cninfo',   name: '巨潮资讯',    grp: '金融理财', icon: '📋', home: 'https://www.cninfo.com.cn' },

  // ---------- 效率办公 ----------
  { id: 'qqdoc',    name: '腾讯文档',    grp: '效率办公', icon: '📝', home: 'https://docs.qq.com' },
  { id: 'yuque',    name: '语雀',        grp: '效率办公', icon: '🦉', home: 'https://www.yuque.com' },
  { id: 'feishu',   name: '飞书',        grp: '效率办公', icon: '🪁', home: 'https://www.feishu.cn' },
  { id: 'shimo',    name: '石墨文档',    grp: '效率办公', icon: '✏️', home: 'https://shimo.im' },
  { id: 'processon',name: 'ProcessOn',   grp: '效率办公', icon: '🔀', home: 'https://www.processon.com' },
  { id: 'wjx',      name: '问卷星',      grp: '效率办公', icon: '📋', home: 'https://www.wjx.cn' },

  // ---------- 购物电商 ----------
  { id: 'taobao',   name: '淘宝',        grp: '购物电商', icon: '🛒', url: 'https://s.taobao.com/search?q={q}',          home: 'https://www.taobao.com' },
  { id: 'jd',       name: '京东',        grp: '购物电商', icon: '🐶', url: 'https://search.jd.com/Search?keyword={q}',  home: 'https://www.jd.com' },
  { id: 'pdd',      name: '拼多多',      grp: '购物电商', icon: '🧧', home: 'https://www.pinduoduo.com' },
  { id: '1688',     name: '1688 批发',   grp: '购物电商', icon: '📦', url: 'https://s.1688.com/selloffer/offer_search.htm?keywords={q}', home: 'https://www.1688.com' },
  { id: 'smzdm',    name: '什么值得买',  grp: '购物电商', icon: '🏷️', url: 'https://search.smzdm.com/?c=home&s={q}',   home: 'https://www.smzdm.com' },
  { id: 'xianyu',   name: '闲鱼',        grp: '购物电商', icon: '🐟', home: 'https://www.goofish.com' },

  // ---------- 实用工具 ----------
  { id: 'map',     name: '高德地图',    grp: '实用工具', icon: '🗺️', url: 'https://www.amap.com/search?query={q}', home: 'https://www.amap.com' },
  { id: 'kuaidi',  name: '快递查询',    grp: '实用工具', icon: '📮', home: 'https://www.kuaidi100.com' },
  { id: 'translation', name: 'DeepL 翻译', grp: '实用工具', icon: '🌍', home: 'https://www.deepl.com/translator' },
  { id: 'law',     name: '法律法规',    grp: '实用工具', icon: '⚖️', home: 'https://flk.npc.gov.cn' }
];
