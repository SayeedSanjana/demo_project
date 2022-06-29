import bcrypt from 'bcrypt';

export default (repository) => {

    const register = async (body) => {

        // email validation
        const emailMatch = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        if(!emailMatch.test(body.email)) {
            throw new Error("Invalid email")
        }

        if(!body.password || !body.name || typeof body.name !== "string") {
            throw new Error("Invalid data")
        }

        // check if email already exists
        const existingUser = await repository.findOne({ email: body.email });
        if (existingUser) {
            throw new Error("User already exists")
        }

        const hashedPassword = await bcrypt.hash(body.password, 10);
        const user = await repository.create({...body, password: hashedPassword});

        delete user.password;
        user.status = 200;

        return user;
    }
    
    const login = async (body) => {

        if(!body.email || !body.password) {
             throw new Error("Invalid data");
        }

        const user = await repository.findOne({ email: body.email });

        if(!user){
            throw new Error("User does not exist");
        }
        
        const isValidPass = await bcrypt.compare(body.password, user.password);

        if(!isValidPass) throw new Error("Invalid password");

        delete user.password;

        return {
            ...user,
            status: 201
        };
    }

    return Object.freeze({
        register,
        login
    })


}