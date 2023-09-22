export default class UsersRepository{
    constructor(dao){
        this.dao = dao;
    }

    getAllUsers = ()=>{
        return this.dao.getAll()
    }

    getUserById = (id)=>{
        return this.dao.getById(id)
    }

    createUser = (user)=>{
        return this.dao.saveUser(user)
    }

    updateUser = (user)=>{
        return this.dao.updateUser(user)
    }

}