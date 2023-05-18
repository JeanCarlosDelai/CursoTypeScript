const person: {
    // Name,age,hobbies não precisa especificar pois a inerencia especifica o tipo automaticamente
    name: string;
    age: number;
    hobbies: string[];
    // Tuple
    role: [number, string];
} = {
    name: ' Jean',
    age: 23,
    hobbies: ['Sports', 'Cooking'],
    // 1, identificador numérico, 2, descrição
    role: [2, 'Author']
};
person.role.push('admin');
// person.role[1] = 10; Não é aceito, pois estamos tentando adicionar um number em uma string
// person.role = [0, 'admin', 'user']; Não é aceito pois estamos adicionando mais que 2 itens no array

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}