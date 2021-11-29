import create from 'zustand';

type UserStore = {
	followerIds: string[];
	followingIds: string[];
	feedIds: string[];
	setFollowerIds: (ids: string[]) => void;
	setFollowingIds: (ids: string[]) => void;
	setFeedIds: (ids: string[]) => void;
};

export const useUserStore = create<UserStore>((set, get) => ({
	followerIds: [],
	feedIds: [],
	followingIds: [],
	setFeedIds: (ids) => set((state) => set({ ...state, feedIds: ids })),
	setFollowerIds: (ids) => set((state) => set({ ...state, followerIds: ids })),
	setFollowingIds: (ids) => set((state) => set({ ...state, followingIds: ids }))
}));
