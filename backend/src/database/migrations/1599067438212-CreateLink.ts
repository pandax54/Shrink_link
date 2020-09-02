import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateLink1599067438212 implements MigrationInterface {

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
                        name: 'shortCode',
                        type: 'varchar',
                    },
                    {
                        name: 'views',
                        type: 'int',
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
