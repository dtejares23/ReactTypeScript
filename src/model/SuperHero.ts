import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
    tableName: SuperHero.SH_TABLE_NAME,
}) 

export class SuperHero extends Model {
    public static SH_TABLE_NAME = "superheroes" as string;
    public static SH_ID = "id" as string;
    public static SH_NAME = "name" as string;
    public static SH_REAL_NAME = "real_name" as string;
    public static SH_GENDER = "gender" as string;
    public static SH_BIRTH_DATE = "birth_date" as string;
    public static SH_FIRST_APPEARANCE = "first_appearance" as string;

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: SuperHero.SH_ID,
    })
    id!: number;

    @Column({
        type: DataType.STRING(100),
        field: SuperHero.SH_NAME,
    })
    name!: string;

    @Column({
        type: DataType.STRING(255),
        field: SuperHero.SH_REAL_NAME,
    })
    real_name!: string;

    @Column({
        type: DataType.STRING(255),
        field: SuperHero.SH_GENDER,
    })
    gender!: string;

    @Column({
        type: DataType.DATE,
        field: SuperHero.SH_BIRTH_DATE,
    })
    birth_date!: string;

    @Column({
        type: DataType.STRING(255),
        field: SuperHero.SH_FIRST_APPEARANCE,
    })
    first_appearance!: string;
}
