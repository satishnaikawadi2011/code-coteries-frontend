export type languageName =
	| 'auto'
	| 'apache'
	| 'bash'
	| 'plaintext'
	| 'c'
	| 'c++'
	| 'c#'
	| 'clojure'
	| 'cobol'
	| 'coffeescript'
	| 'crystal'
	| 'css'
	| 'd'
	| 'dart'
	| 'diff'
	| 'django'
	| 'docker'
	| 'elixir'
	| 'elm'
	| 'erlang'
	| 'fortran'
	| 'gherkin'
	| 'graphql'
	| 'go'
	| 'groovy'
	| 'handlebars'
	| 'haskell'
	| 'html'
	| 'xml'
	| 'java'
	| 'javascript'
	| 'jsx'
	| 'json'
	| 'julia'
	| 'kotlin'
	| 'latex'
	| 'lisp'
	| 'lua'
	| 'markdown'
	| 'mathematica'
	| 'matlab'
	| 'octave'
	| 'mysql'
	| 'ntriples'
	| 'nginx'
	| 'nim'
	| 'objectivec'
	| 'ocaml'
	| 'pascal'
	| 'perl'
	| 'php'
	| 'powershell'
	| 'python'
	| 'r'
	| 'ruby'
	| 'rust'
	| 'riscv'
	| 'sass'
	| 'scala'
	| 'smalltalk'
	| 'solidity'
	| 'sparql'
	| 'sql'
	| 'swift'
	| 'stylus'
	| 'tcl'
	| 'turtle'
	| 'toml'
	| 'typescript'
	| 'tsx'
	| 'twig'
	| 'vb.net'
	| 'verilog'
	| 'vhdl'
	| 'vue'
	| 'xquery'
	| 'yaml';

export const languages: Record<languageName, string> = {
	auto: 'Auto',
	apache: 'Apache',
	bash: 'Bash',
	plaintext: 'Plain Text',
	c: 'C',
	'c++': 'C++',
	'c#': 'C#',
	clojure: 'Clojure',
	cobol: 'Cobol',
	coffeescript: 'CoffeeScript',
	crystal: 'Crystal',
	css: 'CSS',
	d: 'D',
	dart: 'Dart',
	diff: 'Diff',
	django: 'Django',
	docker: 'Dockerfile',
	elixir: 'Elixir',
	elm: 'Elm',
	erlang: 'Erlang',
	fortran: 'Fortran',
	gherkin: 'Gherkin',
	go: 'Go',
	graphql: 'Graphql',
	groovy: 'Groovy',
	handlebars: 'Handlebars',
	haskell: 'Haskell',
	html: 'HTML',
	xml: 'XML',
	java: 'Java',
	javascript: 'Javascript',
	json: 'JSON',
	jsx: 'JSX',
	julia: 'Julia',
	kotlin: 'Kotlin',
	latex: 'LaTex',
	lisp: 'Lisp',
	lua: 'Lua',
	markdown: 'Markdown',
	mathematica: 'Mathematica',
	matlab: 'MATLAB/Octave',
	mysql: 'MySQL',
	octave: 'Octave',
	nginx: 'NGINX',
	nim: 'Nim',
	ntriples: 'N-Triples',
	objectivec: 'Objective C',
	ocaml: 'OCaml/F#',
	pascal: 'Pascal',
	perl: 'Perl',
	php: 'PHP',
	powershell: 'Powershell',
	python: 'Python',
	r: 'R',
	riscv: 'RISC-V',
	ruby: 'Ruby',
	rust: 'Rust',
	sass: 'Sass',
	scala: 'Scala',
	smalltalk: 'Smalltalk',
	solidity: 'Solidity',
	sparql: 'SPARQL',
	sql: 'SQL',
	stylus: 'Stylus',
	swift: 'Swift',
	tcl: 'TCL',
	toml: 'TOML',
	tsx: 'TSX',
	turtle: 'Turtle',
	twig: 'Twig',
	typescript: 'Typescript',
	'vb.net': 'VB.NET',
	verilog: 'Verilog',
	vhdl: 'VHDL',
	vue: 'Vue',
	xquery: 'XQuery',
	yaml: 'YAML'
};