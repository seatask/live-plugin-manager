export enum PluginFromEnum {
	none,
	npm,
	path,
	github,
	code,
};
export interface IPluginInfo {
	readonly mainFile: string;
	readonly location: string;
	readonly name: string;
	readonly version: string;
	readonly author: string;
	from: PluginFromEnum;
	readonly dependencies: { [name: string]: string };
}
