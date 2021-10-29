import { RegularUserFragment } from './../../generated/graphql';
import storage, { prefix } from './index';

const key = 'authStorage';

export interface IAuthStorage {
	token: string;
	user: RegularUserFragment;
	__typename: 'AuthResponse' | undefined;
}

const set = (data: IAuthStorage) => {
	storage.set(prefix + key, data);
};

const get = (): IAuthStorage => {
	const data = storage.get(prefix + key) as IAuthStorage;
	return data;
};

const remove = () => {
	storage.remove(prefix + key);
};

const exportData = {
	set,
	get,
	remove
};

export default exportData;
