import { RegularUserFragment } from 'src/generated/graphql';
import create from 'zustand';
import storage from '../utils/storage';
import authStorage from '../utils/storage/auth';

type AuthStore = {
	token: string | null;
	user: RegularUserFragment | null;
	setToken: (token: string) => void;
	setUser: (user: RegularUserFragment) => void;
	updateUser: (user: Partial<RegularUserFragment>) => void;
	logout: () => void;
};

export const useAuthStore = create<AuthStore>((set, get) => ({
	token: null,
	user: null,
	setToken:
		(token) => {
			const authData = authStorage.get();
			authStorage.set({ ...authData, token });
			set((state) => ({ ...state, token }));
		},
	setUser:
		(user) => {
			const authData = authStorage.get();
			authStorage.set({ ...authData, user });
			set((state) => ({ ...state, user }));
		},
	logout:
		() => {
			set((state) => ({ ...state, user: null, token: null }));
			storage.clear();
		},
	updateUser:
		(user) => {
			const u = get().user;
			const updatedUser = Object.assign({}, u, user)!;
			console.log('Here', updatedUser);
			const authData = authStorage.get();
			authStorage.set({ ...authData, user: updatedUser });
			set((state) => ({ ...state, user: updatedUser }));
		}
}));
