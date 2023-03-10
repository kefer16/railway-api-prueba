import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/conexion";
export class Usuario extends Model {
	usuario!: string | "";
	contrasenia!: string | "";
}

Usuario.init(
	{
		id: {
			type: "UNIQUEIDENTIFIER",
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
			allowNull: false,
		},
		nombre: {
			type: DataTypes.STRING,
		},
		apellido: {
			type: DataTypes.STRING,
		},
		correo: {
			type: DataTypes.STRING,
		},
		usuario: {
			type: DataTypes.STRING,
			defaultValue: "",
		},
		contrasenia: {
			type: DataTypes.BLOB,
			defaultValue: "",
		},
		dinero: {
			type: DataTypes.DOUBLE,
		},
		foto: {
			type: DataTypes.STRING,
		},
		fecha_registro: {
			type: DataTypes.STRING,
		},
		activo: {
			type: DataTypes.BOOLEAN,
		},
		fk_privilegio: {
			type: "UNIQUEIDENTIFIER",
		},
		fecha_inicial: {
			type: DataTypes.STRING,
		},
		fecha_final: {
			type: DataTypes.STRING,
		},
	},
	{
		sequelize,
		modelName: "Usuario",
		timestamps: false,
	}
);
