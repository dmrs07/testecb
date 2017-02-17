export interface IRecipe {
	recipeId: number;
	recipeName: string;
	recipeCode: string;
	releaseDate: string;
	price: number;
	description: string;
	starRating:number;
	imageUrlSm:string;
	imageUrlLg:string;
	ingredients:string[];
	todo:string[];
	timeElapsed:number;
}