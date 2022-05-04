import { DataTypes, Model } from 'https://deno.land/x/denodb/mod.ts';
import database from '../../database.ts';

class Pizza extends Model {
    static table = 'pizza';
    static fields = {
        id: {
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
    };
}

database.link([Pizza]);
await database.sync();

export default Pizza;
