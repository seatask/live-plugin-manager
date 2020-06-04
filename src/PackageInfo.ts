export interface PackageJsonInfo extends PackageInfo {
	main?: string;
	dependencies?: { [name: string]: string };
	author?: string;
}

export interface PackageInfo {
	name: string;
	version: string;
	dist?: {
		tarball: string
	};
}
