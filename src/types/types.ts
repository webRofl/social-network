export type PostType = {
  id: number;
  name: string;
  likesCount: number;
};

export type ProfileContactsType = {
  facebook: string;
  github: string;
  instagram: string;
  mainLink: string;
  twitter: string;
  vk: string;
  website: string;
  youtube: string;
};

export type ProfilePhotosType = {
  large: string | null;
  small: string | null;
};

export type ProfileType = {
  aboutMe: string;
  contacts: ProfileContactsType;
  fullName: string;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  photos: ProfilePhotosType;
  userId: number;
};

export type UserType = {
  followed: boolean;
  id: number;
  name: string;
  photos: ProfilePhotosType;
  status: string;
  uniqueUrlName: any;
};
