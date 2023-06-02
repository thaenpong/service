import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Asset {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    category_id: number;

    @Column({ nullable: false, unique: true })
    code: string;

    @Column({ default: null })
    serial_number: string;

    @Column({ default: null })
    brand: string;

    @Column({ default: null })
    model: string;

    @Column({ default: null })
    species: string;

    @Column({ default: null })
    color: string;

    @Column({ nullable: false })
    user_employee_id: number;

    @Column({ default: null })
    note: string;

    @Column({ default: 1 })
    status: number;

    @CreateDateColumn()
    datecreate: Date;

    @Column({ nullable: false })
    staff_employee_id: number;

    @Column({ default: null })
    remove_at: Date;

    @Column({ default: null })
    staff_employee_id_remove: number;

    @Column({ default: null })
    waranty_expires: Date;
}
