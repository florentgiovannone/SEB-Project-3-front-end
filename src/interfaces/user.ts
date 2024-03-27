
export interface IUser {
    _id: string,
    userName: string,
    firstName: string,
    lastName: string,
    email: string,
  image: string,
  myCave: [{
    _id: number,
    winery: string,
    wineName: string,
    region: string,
    country: string,
    style: string,
    vintage: number,
    grapes: string,
    image: string
  }]

  }