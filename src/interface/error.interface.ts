export interface ErrorInterface {
	id: string;
	codigo: string;
	linea: number;
	objeto: string;
	mensaje: string;
	servidor: string;
	fecha_registro: Date;
	fk_usuario: string;
}
