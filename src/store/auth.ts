import { RegularUserFragment } from 'src/generated/graphql';
import create from 'zustand';
import storage from '../utils/storage';

type AuthStore = {
	token: string | null;
	user: RegularUserFragment | null;
	setToken: (token: string) => void;
	setUser: (user: RegularUserFragment) => void;
	logout: () => void;
};

export const useAuthStore = create<AuthStore>((set, get) => ({
	token: null,
	user: null,
	setToken: (token) => set((state) => ({ ...state, token })),
	setUser: (user) => set((state) => ({ ...state, user })),
	logout:
		() => {
			set((state) => ({ ...state, user: null, token: null }));
			storage.clear();
		}
}));
