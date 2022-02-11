const quotes = [
  {
    quote: "동기는 갖는게 아니라 행하는 것이다",
    author: "Jim Kwik",
  },
  {
    quote:
      "동기는 당신의 가치관과 정체성 때문에 당신이 매일 수행하는 습관과 일상 그 자체다",
    author: "Jim Kwik",
  },
  {
    quote: "완벽한 순간은 없어, 그저 매순간이 최고의 순간일 뿐",
    author: "Me",
  },
  {
    quote:
      "지금 당장 실행할 수 있는 좋은 계획은 다음주에 실행 가능한 완벽한 계획보다 낫다",
    author: "George S. Patton",
  },
  {
    quote:
      "인생의 목적은 다수의 편에 서는 것이 아니라, 정신 나간 사람들 사이에서 벗어나는 것이다.",
    author: "마르쿠스 아우렐리우스",
  },
  {
    quote:
      "감각의 쾌락에 빠져 게으른 채로 이 세상의 바퀴를 돌리는 일에 함께하지 않는다면, 수치스럽고 헛되게 사는 삶이라 할 수 있다.",
    author: "바가바드 기타",
  },
  {
    quote: "'겨우 그거 가지고?'가 성공의 비밀이다",
    author: "Me",
  },
  {
    quote:
      "체계나 경계가 없는 자유는 방종이며, 자유가 없는 체계나 경계는 구속이다",
    author: "몬테소리",
  },
  {
    quote:
      "장기적인 성공과 행복을 위해서는 대체로 도전적인 목표를 추구하면서 동시에 실패와 부족을 받아들여야 한다.",
    author: "탈 벤 샤하르",
  },
  {
    quote:
      "자신의 '일시적인 삶'을 비현실적인 것으로 간주하는 것이 삶의 의지를 잃게 하는 중요한 요인이 된다",
    author: "빅터 프랭클린",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `[${todaysQuote.author}]`;
