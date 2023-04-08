import { Injectable } from '@nestjs/common';

@Injectable()
export class StockService {
  getStock(): string {
    return 'Stock';
  }
}
