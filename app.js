const articles = [
  {
    id: 1,
    category: "思考",
    date: "2026.06.02",
    readTime: "6 分钟",
    title: "在答案越来越快的时代，重新学习提问",
    summary: "工具可以迅速给出答案，但真正决定方向的，仍然是我们提出了什么问题。",
    visual: "visual-thought",
    lead: "我们从不缺答案。真正稀缺的，是一个能够打开新路径的问题。",
    sections: [
      ["答案变得廉价之后", "搜索、推荐和生成式工具让答案以前所未有的速度来到面前。这当然是一种进步，但它也容易让我们忘记：答案从来不是思考的起点，问题才是。一个模糊的问题会得到一堆看似正确却无法行动的信息；一个准确的问题，则会替我们排除大部分噪音。"],
      ["好问题带着边界", "所谓好问题，并不一定宏大。它通常具体、诚实，知道自己暂时不解决什么。比起问“怎样变得更优秀”，不如问“未来三个月，我愿意稳定练习哪一项能力”。边界并没有限制思考，反而让思考获得了抓手。"],
      ["给未知留一点空间", "提问也意味着承认不知道。我们可以在下判断之前多停留一会儿，观察事实，区分感受与推论。这个停顿不是迟疑，而是一种成熟：它让新的信息有机会改变我们。"]
    ]
  },
  {
    id: 2,
    category: "技术",
    date: "2026.05.24",
    readTime: "8 分钟",
    title: "工具应该安静地工作",
    summary: "谈谈我心中真正好用的软件，以及设计如何把复杂性藏到恰当的位置。",
    visual: "visual-tech",
    lead: "最好的工具不会不断提醒你它有多聪明，而是让你更专注于眼前的事情。",
    sections: [
      ["界面不是舞台", "软件界面的任务不是展示功能，而是帮助人完成目标。每一个按钮、提醒和动画都在占用注意力，因此它们必须证明自己的必要性。安静不是简陋，而是一种经过取舍后的清晰。"],
      ["复杂性不会消失", "设计无法消灭复杂性，只能决定由谁在什么时候承担它。成熟的产品会把系统复杂性留给系统，把关键选择交给用户，并在错误发生时给出可以恢复的路径。"],
      ["让工具逐渐退后", "当使用者熟悉一套工具后，操作应该越来越接近本能。稳定的位置、一致的语言和可预期的反馈，比偶尔令人惊喜的变化更有价值。"]
    ]
  },
  {
    id: 3,
    category: "生活",
    date: "2026.05.11",
    readTime: "5 分钟",
    title: "一座城市的清晨",
    summary: "早起走过几条熟悉的街，重新看见日常生活里被忽略的细节。",
    visual: "visual-life",
    lead: "城市在清晨显露出一种难得的坦率，还来不及表演，只是在慢慢醒来。",
    sections: [
      ["没有观众的街道", "六点半的路口很安静。早餐店刚刚掀开门帘，清洁车留下湿润的路面，行道树的影子缓慢移动。那些白天显得普通的事物，此刻都有了清楚的轮廓。"],
      ["以步行的速度理解", "走路让空间重新拥有尺度。你会发现两个地铁站其实没有那么远，也会注意到一面墙、一家旧店和某扇总是半开的窗。生活并没有突然变得丰富，只是我们的速度终于允许它被看见。"]
    ]
  },
  {
    id: 4,
    category: "思考",
    date: "2026.04.27",
    readTime: "7 分钟",
    title: "阅读不是收集",
    summary: "读过多少并不重要，重要的是哪些文字真正参与了你的判断。",
    visual: "visual-reading",
    lead: "书架上的数量无法替我们思考，摘录软件里的句子也不会自动成为经验。",
    sections: [
      ["从拥有到使用", "我们很容易把阅读变成一种收集：书单、划线、摘录和年度数字。这些记录带来满足感，却不一定带来变化。真正进入我们的文字，会在某次选择时突然出现，帮助我们看清局面。"],
      ["写下自己的回应", "比摘录更有价值的，是在读完一段话后写下自己的回应。赞同什么，怀疑什么，它与已有经验如何连接。哪怕只有三句话，主动的回应也比完整保存更接近思考。"]
    ]
  },
  {
    id: 5,
    category: "技术",
    date: "2026.04.09",
    readTime: "9 分钟",
    title: "给数字生活做一次减法",
    summary: "整理文件、通知与订阅，不是为了极简，而是把注意力还给自己。",
    visual: "visual-work",
    lead: "数字空间同样会积灰，只不过它消耗的不是房间，而是我们的判断力。",
    sections: [
      ["先处理入口", "与其每隔几个月进行一次大清理，不如先减少新的东西进入。关闭不必要的通知，退出已经不读的订阅，把下载文件集中到固定位置。入口变少，维护成本才会真正下降。"],
      ["建立简单的归属", "文件分类不需要精密。工作、个人、归档三个顶层目录，往往比十几层嵌套更可靠。一个系统是否有效，不在于它看起来多专业，而在于疲惫时我们是否仍愿意使用它。"],
      ["保留寻找的能力", "整理不是让一切永远井然有序，而是确保需要时能够找到。清晰的命名、稳定的位置和一份可靠备份，已经解决了大部分问题。"]
    ]
  }
];

const grid = document.querySelector("#articleGrid");
const emptyState = document.querySelector("#emptyState");
const articleDialog = document.querySelector("#articleDialog");
const articleContent = document.querySelector("#articleContent");
const searchDialog = document.querySelector("#searchDialog");
const searchInput = document.querySelector("#searchInput");
const searchResults = document.querySelector("#searchResults");
let activeCategory = "全部";

function renderNotes() {
  const notesList = document.querySelector("#notesList");
  notesList.innerHTML = dailyNotes.map(note => `
    <article>
      <time datetime="${note.date}">${note.date.slice(5).replace("-", ".")}</time>
      <p>${note.text}</p>
    </article>
  `).join("");
}

function articleMeta(article) {
  return `<div class="article-meta"><span>${article.category}</span><i></i><time>${article.date}</time><i></i><span>${article.readTime}</span></div>`;
}

function renderArticles() {
  const visible = articles.filter(article => activeCategory === "全部" || article.category === activeCategory);
  grid.innerHTML = visible.map(article => `
    <article class="article-card" tabindex="0" role="button" data-id="${article.id}" aria-label="阅读：${article.title}">
      <div class="card-visual ${article.visual}" aria-hidden="true"></div>
      ${articleMeta(article)}
      <h3>${article.title}</h3>
      <p>${article.summary}</p>
    </article>
  `).join("");
  emptyState.hidden = visible.length > 0;
}

function openArticle(id) {
  const article = articles.find(item => item.id === Number(id));
  if (!article) return;
  articleContent.innerHTML = `
    ${articleMeta(article)}
    <h1>${article.title}</h1>
    <p class="lead">${article.lead}</p>
    ${article.sections.map(([title, body]) => `<h2>${title}</h2><p>${body}</p>`).join("")}
  `;
  if (searchDialog.open) searchDialog.close();
  articleDialog.showModal();
}

function renderSearch(query = "") {
  const keyword = query.trim().toLowerCase();
  const matches = articles.filter(article =>
    !keyword || [article.title, article.summary, article.category].some(text => text.toLowerCase().includes(keyword))
  );
  searchResults.innerHTML = matches.length
    ? matches.map(article => `<button class="search-result" type="button" data-id="${article.id}"><strong>${article.title}</strong><span>${article.category} · ${article.date} · ${article.readTime}</span></button>`).join("")
    : `<p class="empty-state">没有找到匹配的文章。</p>`;
}

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    document.querySelectorAll(".filter").forEach(item => item.classList.toggle("active", item === button));
    renderArticles();
  });
});

grid.addEventListener("click", event => {
  const card = event.target.closest(".article-card");
  if (card) openArticle(card.dataset.id);
});

grid.addEventListener("keydown", event => {
  const card = event.target.closest(".article-card");
  if (card && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    openArticle(card.dataset.id);
  }
});

document.querySelector("#themeButton").addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("blog-theme", next);
  const giscusFrame = document.querySelector("iframe.giscus-frame");
  giscusFrame?.contentWindow.postMessage({
    giscus: { setConfig: { theme: next === "dark" ? "dark" : "light" } }
  }, "https://giscus.app");
});

document.querySelector("#searchButton").addEventListener("click", () => {
  renderSearch();
  searchDialog.showModal();
  setTimeout(() => searchInput.focus(), 50);
});

searchInput.addEventListener("input", () => renderSearch(searchInput.value));
searchResults.addEventListener("click", event => {
  const result = event.target.closest(".search-result");
  if (result) openArticle(result.dataset.id);
});

document.querySelector("#articleClose").addEventListener("click", () => articleDialog.close());

[searchDialog, articleDialog].forEach(dialog => {
  dialog.addEventListener("click", event => {
    const rect = dialog.getBoundingClientRect();
    const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
    if (outside) dialog.close();
  });
});

const storedTheme = localStorage.getItem("blog-theme");
if (storedTheme) {
  document.documentElement.dataset.theme = storedTheme;
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.documentElement.dataset.theme = "dark";
}

renderNotes();
renderArticles();
