'use strict';
var t = Object.defineProperty;
var a = Object.getOwnPropertyDescriptor;
var C = Object.getOwnPropertyNames;
var s = Object.prototype.hasOwnProperty;
var h = (o, l) => {
    for (var e in l) t(o, e, { get: l[e], enumerable: !0 });
  },
  n = (o, l, e, g) => {
    if ((l && typeof l == 'object') || typeof l == 'function')
      for (let r of C(l))
        !s.call(o, r) &&
          r !== e &&
          t(o, r, {
            get: () => l[r],
            enumerable: !(g = a(l, r)) || g.enumerable,
          });
    return o;
  };
var d = (o) => n(t({}, '__esModule', { value: !0 }), o);
var m = {};
h(m, { default: () => p, icons: () => w });
module.exports = d(m);
var w = [
    'Angular',
    'ArchLinux',
    'CSharp',
    'CSS3',
    'Chrome',
    'Docker',
    'Elixir',
    'Emacs',
    'ECharts',
    'Golang',
    'HTML5',
    'Java',
    'JavaScript',
    'Kubernetes',
    'Linux',
    'Neovim',
    'NextJS',
    'NodeJS',
    'NPM',
    'NuxtJS',
    'PHP',
    'Python',
    'React',
    'Ruby',
    'Rust',
    'TailwindCSS',
    'TiddlyWiki5',
    'TypeScript',
    'Vercel',
    'Vim',
    'Vite',
    'Vue',
  ],
  u = ({ subject: o, color: l, logo: e, logoColor: g }) =>
    `https://img.shields.io/badge/${encodeURIComponent(
      o,
    )}-${l}?style=flat-square&logo=${encodeURIComponent(e)}&logoColor=${g}`,
  c = {
    Angular: { color: 'DD0031', logo: 'angular', logoColor: 'white' },
    ArchLinux: { color: 'blue', logo: 'arch-linux', logoColor: 'white' },
    CSharp: { color: '239120', logo: 'c#', logoColor: 'white' },
    CSS3: { color: '1572B6', logo: 'css3', logoColor: 'white' },
    Docker: { color: '2496ED', logo: 'docker', logoColor: 'white' },
    Elixir: { color: '4B275F', logo: 'elixir', logoColor: 'white' },
    Emacs: { color: '7F5AB6', logo: 'gnu-emacs', logoColor: 'white' },
    ECharts: { color: 'AA344D', logo: 'apache-echarts', logoColor: 'white' },
    Golang: { color: '00ADD8', logo: 'go', logoColor: 'white' },
    HTML5: { color: 'E34F26', logo: 'html5', logoColor: 'white' },
    Java: { color: '437291', logo: 'openjdk', logoColor: 'white' },
    JavaScript: { color: 'F7DF1E', logo: 'javascript', logoColor: 'black' },
    Kubernetes: { color: '326CE5', logo: 'kubernetes', logoColor: 'white' },
    Linux: { color: 'FCC624', logo: 'linux', logoColor: 'black' },
    Neovim: { color: '2E8B57', logo: 'neovim', logoColor: 'white' },
    NextJS: { color: 'black', logo: 'next.js', logoColor: 'white' },
    NodeJS: { color: '43853D', logo: 'node.js', logoColor: 'white' },
    Chrome: { color: '4285F4', logo: 'google-chrome', logoColor: 'white' },
    NPM: { color: 'C12127', logo: 'npm', logoColor: 'white' },
    NuxtJS: { color: '00C58E', logo: 'nuxt.js', logoColor: 'white' },
    PHP: { color: '777BB4', logo: 'php', logoColor: 'white' },
    Python: { color: '3776AB', logo: 'python', logoColor: 'white' },
    React: { color: '20232A', logo: 'react', logoColor: '61DAFB' },
    Ruby: { color: 'CC342D', logo: 'ruby', logoColor: 'white' },
    Rust: { color: '000000', logo: 'rust', logoColor: 'white' },
    TailwindCSS: { color: '38B2AC', logo: 'tailwindcss', logoColor: 'white' },
    TiddlyWiki5: { color: '111111', logo: 'tiddlywiki', logoColor: 'white' },
    TypeScript: { color: '007ACC', logo: 'typescript', logoColor: 'white' },
    Vercel: { color: 'black', logo: 'vercel', logoColor: 'white' },
    Vite: { color: '2F74C0', logo: 'vite', logoColor: 'white' },
    Vim: { color: '007ACC', logo: 'vim', logoColor: 'white' },
    Vue: { color: '35495E', logo: 'vue.js', logoColor: '4FC08D' },
  },
  i = {};
Object.keys(c).forEach((o) => {
  i[o] = u({ subject: o, ...c[o] });
});
var p = i;
0 && (module.exports = { icons });
