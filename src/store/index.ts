import { Store, createStore } from "vuex";
import InterfaceProjeto from "../interfaces/InterfaceProjeto";
import { InjectionKey } from "vue";

interface Estado {
    projetos: InterfaceProjeto[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        projetos: [
            {
                id: new Date().toISOString(),
                nome: 'Typescript'
            },
            {
                id: new Date().toISOString(),
                nome: 'Vue'
            },
            {
                id: new Date().toISOString(),
                nome: 'Vuex'
            }
        ]
    }
})

export type Store = typeof store