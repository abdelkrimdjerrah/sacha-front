declare namespace Entities {
  export type Userrole = "Admin" | "Moderator" | "User";

  export interface UserEntity extends Creatable {
    _id: mongoose.Schema.Types.ObjectId;
    username: string;
    email: string;
    password: string;
    role: Userrole;
    active: boolean;
    firstName?: string;
    lastName?: string;
    picture?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }
}
