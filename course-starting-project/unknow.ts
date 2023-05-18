//Tipo unknow pode ser usado quando tu não sabe o dado a ser recebvido.
// É melhor que o any pq se caso for adicionado um dado diferente do já atribuido vai dar erro.
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Jean';
if (typeof userInput === 'string') {
    userName = userInput;
}
//Utilizar never em vez de void
//Void somente está dizendo que não retorna nada
//never especifica que nunca vai retornar algo
function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
}

generateError('An error occurred', 500);