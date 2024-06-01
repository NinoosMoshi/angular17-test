export interface ICourse {
  id: number;
  title: string;
  description: string;
  image: string;
  category: CategoryType;
}

export enum CategoryType {
  begginers = 1,
  advanced = 2,
}
