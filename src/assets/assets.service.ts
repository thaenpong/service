import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Asset } from './entities/asset.entity';
import { Repository } from 'typeorm';


@Injectable()
export class AssetsService {

  constructor(
    @InjectRepository(Asset)
    private assetRepository: Repository<Asset>,
  ) { }

  async create(createAssetDto: CreateAssetDto) {
    try {
      const res = await this.assetRepository.create(createAssetDto);
      return res;
    } catch (error) {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          message: ['ไม่สามารถเพิ่มข้อมูลได้'],
          error: error,
        },
        HttpStatus.BAD_REQUEST
      );
    }
  }

  findAll() {
    return this.assetRepository.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} asset`;
  }

  update(id: number, updateAssetDto: UpdateAssetDto) {
    return `This action updates a #${id} asset`;
  }

  remove(id: number) {
    return `This action removes a #${id} asset`;
  }
}
