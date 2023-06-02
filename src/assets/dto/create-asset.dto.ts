import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAssetDto {

    @IsNotEmpty()
    @ApiProperty({
        example: "MS.65.01",
        description: "รหัสทรัพย์สิน"
    })
    code: string;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({
        example: "1",
        description: "ID หมวดหมู่"
    })
    category_id: number;

    @IsString()
    @ApiProperty({
        example: "SN478528X4",
        description: "ซีเรียลนัมเบอร์"
    })
    serial_number: string;

    @IsString()
    @ApiProperty({
        example: "Asus",
        description: "ชื่อแบรนด์"
    })
    brand: string;

    @IsString()
    @ApiProperty({
        example: "เมาส์ไร้สาย",
        description: "ประเภท"
    })
    model: string;

    @IsString()
    @ApiProperty({
        example: "Asus Nexus Devices",
        description: "ชื่อรุ่น"
    })
    species: string;

    @IsString()
    @ApiProperty({
        example: "ดำ",
        description: "สี"
    })
    color: string;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({
        example: "9165061501",
        description: "ID ผู้ใช้"
    })
    user_employee_id: number;

    @IsString()
    @ApiProperty({
        example: "ไม่ติดแท็ก",
        description: "หมายเหตุ"
    })
    note: string;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({
        example: "9165061501",
        description: "ID ผู้ลงทะเบียน"
    })
    staff_employee_id: number;

    @IsDateString()
    @ApiProperty({
        example: new Date(),
        description: "วันหมดประกัน"
    })
    waranty_expires: Date;
}
