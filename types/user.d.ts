export type User = {
	username : string;
	password : string;
};

export type FileInfo = {
	name : string,
	size : number,
	is_dir : boolean,
	modified : string,
	created : string,
	sign : string,
	thumb : string,
	type : number,
	hashinfo : string,
	hash_info : any
}