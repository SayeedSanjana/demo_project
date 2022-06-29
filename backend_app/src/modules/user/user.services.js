import bcrypt from 'bcrypt';

export default (repository) => {

    const register = async (body) => {
        const { firstName, lastName, dob, email, password } = body;
        // email validation
        const emailMatch = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        if(!emailMatch.test(email)) {
            throw new Error("Invalid email")
        }

        if(!password || !dob || !firstName || !lastName || typeof firstName !== "string" || typeof lastName !== "string") {
            throw new Error("Invalid data")
        }

        // check if email already exists
        const existingUser = await repository.findOne({ email: email });
        if (existingUser) {
            throw new Error("User already exists")
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await repository.create({...body, password: hashedPassword});

        delete user.password;
        user.status = 200;

        return user;
    }
    
    const login = async (body) => {
        const { email, password } = body;

        if(!email || !password) {
             throw new Error("Invalid data");
        }

        const user = await repository.findOne({ email: email });

        if(!user){
            throw new Error("User does not exist");
        }
        
        const isValidPass = await bcrypt.compare(password, user.password);

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