import { Injectable } from '@angular/core';
import { Migration} from './Migration';
import {MIGRATIONS} from './mock-migrations';

@Injectable()
export class MigrationService {
     getMigrations(): Promise<Migration[]> {
  return Promise.resolve(MIGRATIONS);
}
}

 