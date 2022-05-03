import { DataTypes, Model } from 'https://deno.land/x/denodb@v1.0.40/mod.ts';
import database from '../../database.ts';

class Pizza extends Model {
    static table = 'pizza';
    static timestamps = true;
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
