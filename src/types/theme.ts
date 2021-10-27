export type themeName =
	| 'a11y-dark'
	| 'blackboard'
	| 'base16-dark'
	| 'base16-light'
	| 'cobalt'
	| 'duotone-dark'
	| 'hopscotch'
	| 'lucario'
	| 'material'
	| 'monokai'
	| 'night-owl'
	| 'nord'
	| 'oceanic-next'
	| 'one-light'
	| 'one-dark'
	| 'panda-syntax'
	| 'paraiso-dark'
	| 'seti'
	| 'shades-of-purple'
	| 'solarized+dark'
	| 'solarized+light'
	| 'synthwave-84'
	| 'twilight'
	| 'verminal'
	| 'vscode'
	| 'yeti'
	| 'zenburn';

export type ThemeObjType = Record<themeName, string>;

export const themes: ThemeObjType = {
	'a11y-dark': 'A11y Dark',
	blackboard: 'Blackboard',
	'base16-dark': 'Base 16 (Dark)',
	'base16-light': 'Base 16 (Light)',
	cobalt: 'Cobalt',
	'duotone-dark': 'Duotone',
	hopscotch: 'Hopscotch',
	lucario: 'Lucario',
	material: 'Material',
	monokai: 'Monokai',
	'night-owl': 'Night Owl',
	nord: 'Nord',
	'oceanic-next': 'Oceanic Next',
	'one-dark': 'One Dark',
	'one-light': 'One Light',
	'panda-syntax': 'Panda',
	'paraiso-dark': 'Paraiso',
	seti: 'Seti',
	'shades-of-purple': 'Shades Of Purple',
	'solarized+dark': 'Solarized Dark',
	'solarized+light': 'Solarized Light',
	'synthwave-84': 'SynthWave 84',
	twilight: 'Twilight',
	verminal: 'Verminal',
	vscode: 'VSCode',
	yeti: 'Yeti',
	zenburn: 'Zenburn'
};
