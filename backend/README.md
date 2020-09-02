
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateLink1598996931285 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'links',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'url',
                        type: 'varchar',
                    },
                    {
                        name: 'shortUrl',
                        type: 'varchar',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('links');
    }
}

https://www.youtube.com/watch?v=Z57566JBaZQ&t=2s
https://www.youtube.com/watch?v=JQDHz72OA3c