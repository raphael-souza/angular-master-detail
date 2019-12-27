import { InMemoryDbService } from "angular-in-memory-web-api";

import { Category } from "./pages/categories/shared/category.model";

export class InMemoryDataBase implements InMemoryDbService {
    createDb() {
        const categories: Category[] = [
            { id: 1, name: 'lazer', description: 'Pagamentos de Conta da casa'},
            { id: 2, name: 'saúde', description: 'dentista '},
            { id: 3, name: 'lazer', description: 'Pagamentos de Conta da casa'},
            { id: 4, name: 'lazer', description: 'barzinho'},
            { id: 5, name: 'Freelas', description: 'site '},
            { id: 6, name: 'lazer', description: 'shopping na sábado'},
            { id: 7, name: 'Casa', description: 'Pagamentos de Conta da casa'},
            { id: 8, name: 'Supermecado', description: 'compras do mes'}
        ];

        return { categories };
    }
}
