import InterfaceProjeto from "./InterfaceProjeto";

export default interface InterfaceTarefa {
    duracaoEmSegundos: number, 
    descricao: string,
    projeto: InterfaceProjeto
}