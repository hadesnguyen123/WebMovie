const arrUser = [
    {
        id: '1',
        firstname: 'Nguyễn',
        lastname: 'Hoàng',
        email: 'nguyenhoang123@gmail.com',
        password: '123'
    },
    {
        id: '2',
        firstname: 'Trịnh',
        lastname: 'Công',
        email: '123@gmail.com',
        password: '123'
    },
    {
        id: '3',
        firstname: 'Hoàng Hoa',
        lastname: 'Thám',
        email: '123123@gmail.com',
        password: '123'
    },
    {
        id: '4',
        firstname: 'Tiểu Sư ',
        lastname: 'Muội',
        email: '12345@gmail.com',
        password: '123'
    },
]


const login = (req, res) => {
    const { email, password } = req.body
    try {
        const index = arrUser.findIndex(u => u.email === email)
        if (index !== -1) {  //tìm thấy
            if (password === arrUser[index].password) {
                res.status(200).send("Login sucess!")
            } else {
                res.status(401).send("Wrong password! ")
            }
        } else {
            res.status(404).send("Wrong Email! ")
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const signup = (req, res) => {
    const { firstname, lastname, email, password } = req.body
    try {
        const index = arrUser.findIndex(u => u.email === email)
        if (index === -1) {
            const id = Math.random()
            arrUser.push({ id, firstname, lastname, email, password })
            res.status(201).send("Register sucessful")
        } else {
            res.status(404).send("Exist")
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const getAllUser = (req, res) => {
    try {
        res.status(200).send(arrUser)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    login,
    signup,
    getAllUser
}