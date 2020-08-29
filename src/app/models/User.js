import dynamoose from 'dynamoose';
import { v4 } from 'uuid';

const Userschema = new dynamoose.Schema(
  {
    id: {
      type: String,
      hashKey: true,
      default: v4(),
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

export default dynamoose.model('Users', Userschema);
