import { v4 as uuidv4 } from 'uuid';

let users = [];

export const mostraOsCria = (req, res) => {
    res.send(users);
}

export const criaOsCria = (req, res) => {
    const user = req.body;

    users.push({...user, id: uuidv4()});

    res.send(`O cria com o nome ${user.firstName} foi colocado na database`);
}
    

export const mostraUmCria = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id == id)

    res.send(foundUser);
}

export const deletaOcria = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id);

    res.send(`O menó com o  id ${id} foi amassado da database`);
}

export const atualizaOcria = (req,res) => {
    const { id } = req.params;
    const { firstName, lastName, age} = req.body; 
    const user = users.find((user) => user.id == id);

    if(firstName){
        user.firstName = firstName;
    }

    if(lastName){
        user.lastName = lastName;
    }

    if(age){
        user.age = age;    
    }

    res.send(`'O menó com o id ${id} foi atualizado'`)

}