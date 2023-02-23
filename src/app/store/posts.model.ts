export class PostsStateModel {
    posts: Posts[]=[];

    constructor (){}
  }
  export interface Posts {
    id: string;
    text: string;
  }